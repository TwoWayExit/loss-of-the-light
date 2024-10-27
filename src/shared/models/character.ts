import { Janitor } from "@rbxts/janitor";
import { promiseChildOfClass } from "@rbxts/promise-child";
import promiseR15, { CharacterRigR15, CharacterRigR6, promiseR6 } from "@rbxts/promise-character";
import { Workspace } from "@rbxts/services";
import { Signal } from "@rbxts/beacon";
import { stats } from "shared/modules/stats-defs";
import { LifecycleHook } from "shared/utils/lifecycle-hooks";

export interface Character extends Model {
	Humanoid: Humanoid & {
		Animator: Animator;
	};
	HumanoidRootPart: BasePart;
}

export abstract class BaseCharacter<P extends Player | undefined = Player | undefined> {
	/** A signal which fires whenever the player character fully loads with all body parts */
	public readonly characterLoaded = new Signal<[character: CharacterRigR6 | CharacterRigR15]>();

	/** A signal which fires right before the character gets destroyed */
	public readonly characterDestroyed = new Signal<[oldCharacter: CharacterRigR6 | CharacterRigR15]>();

	/** A signal which fires right before this {@link BaseCharacter} gets destroyed */
	public readonly destroying = new Signal<void>();

	/** The {@link Player} instance linked with this {@link BaseCharacter} if provided one */
	protected localPlayer: P;

	protected viewCFrame = CFrame.identity;

	/**
	 * A janitor which gets destroyed when this {@link BaseCharacter} gets destroyed
	 * @remarks Although sealed, this janitor's type may be redefined using `declare`
	 * @sealed
	 */
	protected janitor = new Janitor<{
		onCharacterDestroyed: RBXScriptConnection;
		onChildRemoved: RBXScriptConnection;
	}>();

	protected character?: CharacterRigR6 | CharacterRigR15;

	private activeAnimations = new Map<Animation, AnimationTrack>();

	// We're not using a parameter property here to avoid P | undefined
	public constructor(character?: Model, localPlayer?: P) {
		this.localPlayer = localPlayer!;

		this.janitor.Add(this.characterLoaded, "Destroy");
		this.janitor.Add(this.characterDestroyed, "Destroy");
		this.janitor.Add(this.destroying, "Destroy");
		this.janitor.Add(
			new LifecycleHook("Stepped", () => {
				this.updateViewCFrame();
				this.checkVoid();
			}),
			"unhook",
		);

		if (character) {
			this.getLoadedCharacter(character).then((character) => this.initializeCharacter(character));
		}
	}

	/**
	 * Gets the {@link Player} instance linked with this {@link BaseCharacter} if provided one
	 * @returns The {@link Player}
	 */
	public getLocalPlayer() {
		return this.localPlayer;
	}

	/**
	 * If the character is destroyed, this will return a cloned version of the previous character until a new one is created with the Humanoid and all body parts loaded
	 * @returns The player character
	 * @virtual
	 */
	public getCharacter() {
		return this.character;
	}

	/**
	 * Gets the player character's height above the ground
	 * @returns The player character's height above the ground in studs
	 * @virtual
	 */
	public getCharacterHeight() {
		if (!this.character) {
			return 0;
		}

		let height;

		switch (this.character.Humanoid.RigType) {
			case Enum.HumanoidRigType.R6:
				height =
					(this.character as CharacterRigR6)["Left Leg"].Size.Y + this.character.HumanoidRootPart.Size.Y / 2;
				break;

			case Enum.HumanoidRigType.R15:
				height = this.character.HumanoidRootPart.Size.Y / 2 + this.character.Humanoid.HipHeight;
				break;

			default:
				throw `${this.character.Name} has an unknown rig type: ${this.character.Humanoid.RigType}`;
		}

		return height;
	}

	/**
	 * Gets the CFrame of the character's view
	 * @returns The character's view CFrame
	 * @virtual
	 */
	public getViewCFrame() {
		return this.viewCFrame;
	}

	/**
	 * Gets the player character's absolute origin
	 * @returns The player character's absolute origin
	 * @remarks The absolute origin of the character is located at the feet
	 * @virtual
	 */
	public getAbsOrigin() {
		return this.character!.HumanoidRootPart.Position.sub(new Vector3(0, this.getCharacterHeight(), 0));
	}

	/**
	 * Returns the AnimationTrack from the Animation provided if there is one playing on the character
	 * @param animation - The Animation which was used to animate the character
	 * @returns The AnimationTrack which is playing on the character
	 */
	public getAnimationTrack(animation: Animation) {
		return this.activeAnimations.get(animation);
	}

	/**
	 * Sets the player character's absolute origin
	 * @remarks The absolute origin of the character is located at the feet
	 * @virtual
	 */
	public setAbsOrigin(vec: Vector3) {
		if (!this.character) {
			return;
		}

		const newPosition = vec.add(new Vector3(0, this.getCharacterHeight(), 0));
		const [x, y, z] = this.character.GetPivot().ToEulerAnglesXYZ(),
			angle = CFrame.Angles(x, y, z);

		this.character.PivotTo(angle.add(newPosition));
	}

	/**
	 * Plays an Animation on the character and returns the AnimationTrack
	 * @param animation - The Animation to play
	 * @param args - The arguments to pass into the AnimationTrack.Play() method
	 * @returns The AnimationTrack playing on the character
	 * @remarks This will always return undefined if the character's body parts have not loaded yet
	 */
	public playAnimation(animation: Animation, ...args: Parameters<AnimationTrack["Play"]>) {
		if (!this.character) {
			return;
		}

		const existing = this.activeAnimations.get(animation);

		if (existing) {
			existing.Play(...args);
			return;
		}

		try {
			const track = this.character.Humanoid.Animator.LoadAnimation(animation);

			track.Ended.Once(() => this.activeAnimations.delete(animation));
			track.Stopped.Once(() => {
				this.activeAnimations.delete(animation);

				track.Destroy(); // Destroy the track to prevent Ended from firing
			});

			track.Play(...args);

			this.activeAnimations.set(animation, track);

			return track;
		} catch (e) {
			warn(e);
		}
	}

	/**
	 * Stops an AnimationTrack playing on the character with the Animation provided
	 * @param animation - The Animation used to find the active AnimationTrack
	 * @param args - The arguments to pass into the AnimationTrack.Stop() method
	 */
	public stopAnimation(animation: Animation, ...args: Parameters<AnimationTrack["Stop"]>) {
		this.activeAnimations.get(animation)?.Stop(...args);
		this.activeAnimations.delete(animation);
	}

	/**
	 * Stops AnimationTracks playing on the character with the list of Animations provided
	 * @param animations - The list of Animations used to find the active AnimationTracks
	 * @param args - The arguments to pass into the AnimationTrack.Stop() method
	 */
	public stopAnimations(animations: Animation[], ...args: Parameters<AnimationTrack["Stop"]>) {
		for (const animation of animations) {
			this.stopAnimation(animation, ...args);
		}
	}

	/**
	 * Stops all currently playing animations
	 * @param args - The arguments to pass into the AnimationTrack.Stop() method
	 */
	public stopAllAnimations(...args: Parameters<AnimationTrack["Stop"]>) {
		this.activeAnimations.forEach((track) => track.Stop(...args));
		this.activeAnimations.clear();
	}

	/**
	 * Destructor
	 * @remarks This destroys the character instance in addition
	 * @virtual
	 */
	public destroy() {
		this.destroying.Fire();

		this.character?.Destroy();
		this.janitor.Destroy();
	}

	/** @sealed */
	protected async getLoadedCharacter(character: Model) {
		const rigType = (await promiseChildOfClass(character, "Humanoid")).RigType;

		switch (rigType) {
			case Enum.HumanoidRigType.R6:
				return await promiseR6(character);

			case Enum.HumanoidRigType.R15:
				return await promiseR15(character);

			default:
				throw `${character.Name} has an unknown rig type: ${rigType}`;
		}
	}

	/** @virtual */
	protected updateViewCFrame() {
		if (this.character) {
			this.viewCFrame = this.character.Head.CFrame;
		}
	}

	/** @virtual */
	protected checkVoid() {
		if (!this.character) {
			return;
		}

		if (
			this.getAbsOrigin().Y + this.character.HumanoidRootPart.AssemblyLinearVelocity.Y * stats.frameTime <=
			Workspace.FallenPartsDestroyHeight
		) {
			this.setAbsOrigin(Vector3.zero);
		}
	}

	/** @virtual */
	protected setCharacter(character: CharacterRigR6 | CharacterRigR15) {
		this.character = character;

		this.characterLoaded.Fire(character);

		// In case it didn't get cleaned up beforehand
		this.janitor.RemoveList("onCharacterDestroyed", "onChildRemoved");

		this.janitor.Add(
			character.Destroying.Connect(() => this.onCharacterDestroyed()),
			"Disconnect",
			"onCharacterDestroyed",
		);

		this.janitor.Add(
			character.ChildRemoved.Connect((child) => this.onChildRemoved(child)),
			"Disconnect",
			"onChildRemoved",
		);
	}

	/** @virtual */
	protected initializeCharacter(character: CharacterRigR6 | CharacterRigR15) {
		this.setCharacter(character);

		character.Humanoid.SetStateEnabled(Enum.HumanoidStateType.Dead, false);

		if (!this.localPlayer) {
			return;
		}

		this.janitor.Add(
			this.localPlayer.CharacterAdded.Connect((newCharacter) => this.onCharacterAdded(newCharacter)),
			"Disconnect",
		);
	}

	/**
	 * Called on {@link Player.CharacterAdded}
	 * @param newCharacter - The character argument from the event
	 * @virtual
	 */
	protected async onCharacterAdded(newCharacter: Model) {
		this.character?.Destroy(); // Destroy the previous (cloned) character
		this.setCharacter(await this.getLoadedCharacter(newCharacter));
	}

	/**
	 * Called when the player character is destroyed
	 * @virtual
	 */
	protected onCharacterDestroyed() {
		if (!this.character) {
			return;
		}

		this.characterDestroyed.Fire(this.character);

		this.character.Archivable = true;

		const clone = this.character.Clone();

		this.character.Archivable = false;

		this.character = clone;

		this.janitor.RemoveList("onCharacterDestroyed", "onChildRemoved");
	}

	private onChildRemoved(child: Instance) {
		if (this.character && child.IsA("BasePart")) {
			this.onCharacterDestroyed();
		}
	}
}
