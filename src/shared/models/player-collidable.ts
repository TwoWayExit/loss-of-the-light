import { CharacterRigR15, CharacterRigR6 } from "@rbxts/promise-character";
import { CollectionService, Players, RunService } from "@rbxts/services";
import { Signal } from "@rbxts/beacon";
import { BasePlayer } from "./player";
import { LifecycleHook } from "shared/utils/lifecycle-hooks";
import { $env } from "rbxts-transform-env";
import { Tags } from "shared/modules/tags";
import { States } from "shared/modules/states";

export type BoundingBox = Part & { Weld: Weld };

export class PlayerCollidable<P extends Player | undefined = Player | undefined> extends BasePlayer<P> {
	// Override with a new separate signal
	public static override readonly playerAdded = new Signal<PlayerCollidable>();

	public readonly boundingBoxLoaded = new Signal<BoundingBox>();

	// Override with a new separate array
	protected static override players: PlayerCollidable[] = [];

	protected isCollidable = true;

	protected boundingBox?: BoundingBox;

	public constructor(character?: Model, rbxPlayer?: P);

	public constructor(character?: Model, rbxPlayer?: P, id?: string);

	public constructor(character?: Model, rbxPlayer?: P, id?: string) {
		super(character, rbxPlayer, id);

		this.janitor.Add(this.boundingBoxLoaded, "Destroy");

		if ($env.boolean("SINGLE_PLAYER_TESTING")) {
			// Exclude this check
		} else {
			if (RunService.IsClient() && Players.MaxPlayers > 1 && this.getRbxPlayer() !== Players.LocalPlayer) {
				return;
			}
		}

		this.janitor.Add(
			this.characterLoaded.Connect((character) => this.onCharacterLoaded(character)),
			"Disconnect",
		);

		if (this.character) {
			this.onCharacterLoaded(this.character);
		}

		this.janitor.Add(new LifecycleHook("Stepped", () => this.updateBoundingBox()), "unhook");
	}

	public static getBoundingBoxes() {
		return this.getPlayers().mapFiltered((player) => player.getBoundingBox());
	}

	/**
	 * Gets the list of created {@link PlayerCollidable}s
	 * @returns The player list
	 */
	public static override getPlayers() {
		return super.getPlayers() as Readonly<typeof this.players>;
	}

	/**
	 * Gets the {@link PlayerCollidable} object from a character
	 * @param character - The character {@link Model}
	 * @returns The {@link PlayerCollidable} object if it exists, otherwise `undefined`
	 */
	public static override getPlayerFromCharacter(character: Model) {
		return super.getPlayerFromCharacter(character) as PlayerCollidable | undefined;
	}

	/**
	 * Gets the {@link PlayerCollidable} object from a {@link Player}
	 * @param rbxPlayer - The {@link Player}
	 * @returns The {@link PlayerCollidable} object if it exists, otherwise `undefined`
	 */
	public static override getPlayerFromRbxPlayer(rbxPlayer: Player) {
		return super.getPlayerFromRbxPlayer(rbxPlayer) as PlayerCollidable | undefined;
	}

	public getBoundingBox() {
		return this.boundingBox;
	}

	public setCollidable(collidable: boolean) {
		this.isCollidable = collidable;
	}

	protected override onPlayerCreated() {
		super.onPlayerCreated();

		PlayerCollidable.players.push(this);
		PlayerCollidable.playerAdded.Fire(this);
	}

	protected override onPlayerDestroyed() {
		super.onPlayerDestroyed();

		PlayerCollidable.players.remove(PlayerCollidable.players.indexOf(this));
	}

	protected addBoundingBox(rootPart: BasePart) {
		const box = new Instance("Part");
		const weld = new Instance("Weld");

		const origin = this.getAbsOrigin();
		const mins = this.getPlayerMins();
		const maxs = this.getPlayerMaxs();

		const size = maxs.sub(mins);
		const startOffset = mins.add(maxs).mul(0.5);
		const center = origin.add(startOffset);
		const inverseRotation = rootPart.CFrame.sub(rootPart.Position).ToObjectSpace(CFrame.identity);
		const c0 = new CFrame(center.sub(rootPart.Position)).mul(inverseRotation);

		if (RunService.IsClient()) {
			this.destroyServerBox(rootPart);
		}

		CollectionService.AddTag(box, RunService.IsServer() ? Tags.ENV_SV : Tags.ENV_CL);

		box.CollisionGroup = "BoundingBoxes";
		box.Name = "BoundingBox";
		box.Anchored = false;
		box.CanCollide = this.isCollidable;
		box.Massless = true;
		box.Transparency = 1;
		box.Size = size;
		box.Parent = rootPart;

		weld.Part0 = rootPart;
		weld.Part1 = box;
		weld.C0 = c0;
		weld.Parent = box;

		box.Destroying.Once(() => {
			this.boundingBox = undefined;
		});

		rootPart.Destroying.Once(() => box.Destroy());

		return box as BoundingBox;
	}

	protected updateBoundingBox() {
		if (!this.boundingBox || !this.isCollidable) {
			return;
		}

		const origin = this.getAbsOrigin();
		const mins = this.getPlayerMins();
		const maxs = this.getPlayerMaxs();

		const size = maxs.sub(mins);
		const startOffset = mins.add(maxs).mul(0.5);
		const center = origin.add(startOffset);
		const inverseRotation = this.character!.HumanoidRootPart.CFrame.sub(
			this.character!.HumanoidRootPart.Position,
		).ToObjectSpace(CFrame.identity);
		const c0 = new CFrame(center.sub(this.character!.HumanoidRootPart.Position)).mul(inverseRotation);

		this.boundingBox.CanCollide = this.getFlags() & States.NOCLIPPING ? false : this.isCollidable;
		this.boundingBox.Size = size;
		this.boundingBox.Weld.C0 = c0;
	}

	protected setCharacterCollidable(character: CharacterRigR6 | CharacterRigR15) {
		for (const v of character.GetDescendants()) {
			// Make sure it isn't a bounding box, else the (potential) server box's CollisionGroup would've been changed to Characters
			if (v.IsA("BasePart") && v.CollisionGroup !== "BoundingBoxes") {
				v.CanCollide = false;
				v.CanTouch = false;
				v.CanQuery = false;
				v.CollisionGroup = "Characters";
			}
		}
	}

	protected findServerBox(rootPart: BasePart) {
		return CollectionService.GetTagged(Tags.ENV_SV).find(
			(v) => v.IsA("BasePart") && v.CollisionGroup === "BoundingBoxes" && v.Parent === rootPart,
		);
	}

	protected destroyServerBox(rootPart: BasePart) {
		let serverBox = this.findServerBox(rootPart);

		if (serverBox) {
			serverBox.Destroy();
		} else {
			const event = this.janitor.Add(
				CollectionService.TagAdded.Connect((tag) => {
					if (tag === Tags.ENV_SV) {
						serverBox = this.findServerBox(rootPart);

						if (serverBox) {
							serverBox.Destroy();

							event.Disconnect();
						}
					}
				}),
			);
		}
	}

	/**
	 * Called when the player character's body parts fully load
	 * @param character - The fully loaded character
	 * @virtual
	 */
	protected onCharacterLoaded(character: CharacterRigR6 | CharacterRigR15) {
		this.setCharacterCollidable(character);

		this.boundingBox = this.addBoundingBox(character.HumanoidRootPart);

		this.boundingBox.Destroying.Once(() => {
			this.boundingBox = undefined;
		});

		character.Humanoid.Died.Once(() => {
			this.boundingBox?.Destroy();
			this.boundingBox = undefined;
		});

		this.boundingBoxLoaded.Fire(this.boundingBox);
	}
}
