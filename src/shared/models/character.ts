import { Janitor } from "@rbxts/janitor";
import { promiseChildOfClass } from "@rbxts/promise-child";
import promiseR15, { CharacterRigR15, CharacterRigR6, promiseR6 } from "@rbxts/promise-character";
import { Workspace } from "@rbxts/services";
import { Signal } from "@rbxts/beacon";
import { stats } from "shared/modules/stats-defs";
import { LifecycleHook } from "shared/lib/lifecycle-hooks";
import { AnimationHandler } from "./animation-handler";

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

	/** The Roblox {@link Player} instance linked with this {@link BaseCharacter} if provided one */
	protected rbxPlayer: P;

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
	protected animationHandler?: AnimationHandler;

	// We're not using a parameter property here to avoid P | undefined
	public constructor(character?: Model, rbxPlayer?: P) {
		this.rbxPlayer = rbxPlayer!;

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
	 * Gets the Roblox {@link Player} instance linked with this {@link BaseCharacter} if provided one
	 * @returns The {@link Player}
	 */
	public getRbxPlayer() {
		return this.rbxPlayer;
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
	 * @returns The associated `AnimationHandler` of this `BaseCharacter`, if the character instance is defined
	 */
	public getAnimationHandler() {
		return this.animationHandler;
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
		this.animationHandler = new AnimationHandler(character);

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

		if (!this.rbxPlayer) {
			return;
		}

		this.janitor.Add(
			this.rbxPlayer.CharacterAdded.Connect((newCharacter) => this.onCharacterAdded(newCharacter)),
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
