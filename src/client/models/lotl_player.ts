import { Dependency } from "@flamework/core";
import { Components } from "@flamework/components";
import { Players, Workspace } from "@rbxts/services";
import { Signal } from "@rbxts/beacon";
import { CharacterRigR15, CharacterRigR6 } from "@rbxts/promise-character";
import { PlayerNetworked } from "shared/models/player-networked";
import { PlayerData } from "shared/models/player";
import { LifecycleHook } from "shared/utils/lifecycle-hooks";
import { Janitor } from "@rbxts/janitor";
import { PlayerAnimate } from "shared/components/lotl_player-animate";
import { ViewVectors } from "shared/modules/view-vectors";
import { Level } from "shared/utils/level";
import { Networked } from "shared/utils/network";

export class LotlPlayerData extends PlayerData {}

@Networked(true)
export class LotlPlayer extends PlayerNetworked {
	// Override with a new separate signal
	public static override readonly playerAdded = new Signal<LotlPlayer>();

	public override readonly localData = new LotlPlayerData();

	// Override with a new separate array
	protected static override players: LotlPlayer[] = [];

	protected static override clPlayer?: LotlPlayer;

	protected declare janitor: Janitor<{
		onCharacterDestroyed: RBXScriptConnection;
		onChildRemoved: RBXScriptConnection;
	}>;

	public constructor(player: Player) {
		super(player);

		if (this.isLocalClient()) {
			LotlPlayer.clPlayer = this;

			this.destroying.Once(() => {
				LotlPlayer.clPlayer = undefined;
			});
		}
	}

	/**
	 * Gets the main {@link LotlPlayer} of the client running the game if there is one, returning `undefined` on the server
	 * @remarks This method is more performant than calling `getPlayerFromLocalPlayer()` with the local player
	 * @returns The {@link LotlPlayer} of the client running the game
	 * @client
	 */
	public static override getLocalClient() {
		return this.clPlayer;
	}

	/**
	 * Gets a copy of the list of created {@link LotlPlayer}s
	 * @returns A copy of the player list
	 */
	public static override getPlayers() {
		return super.getPlayers() as LotlPlayer[];
	}

	/**
	 * Gets the {@link LotlPlayer} object from a character
	 * @param character - The character {@link Model}
	 * @returns The {@link LotlPlayer} object if it exists, otherwise `undefined`
	 */
	public static override getPlayerFromCharacter(character: Model) {
		return super.getPlayerFromCharacter(character) as LotlPlayer | undefined;
	}

	/**
	 * Gets the {@link LotlPlayer} object from a {@link Player}
	 * @param localPlayer - The {@link Player}
	 * @returns The {@link LotlPlayer} object if it exists, otherwise `undefined`
	 */
	public static override getPlayerFromLocalPlayer(localPlayer: Player) {
		return super.getPlayerFromLocalPlayer(localPlayer) as LotlPlayer | undefined;
	}

	protected override onPlayerCreated() {
		super.onPlayerCreated();

		LotlPlayer.players.push(this);
		LotlPlayer.playerAdded.Fire(this);
	}

	protected override onPlayerDestroyed() {
		super.onPlayerDestroyed();

		LotlPlayer.players.remove(LotlPlayer.players.indexOf(this));
	}

	protected override updateViewCFrame() {
		if (Workspace.CurrentCamera) {
			this.viewCFrame = Workspace.CurrentCamera.CFrame;
		}
	}

	protected override onDied() {
		if (!this.character) {
			return;
		}

		const components = Dependency<Components>();
		const animate = components.getComponents<PlayerAnimate>(this.character)[0];
		const animations = animate?.getAnimations();

		if (animations) {
			//this.playAnimation(animations.death);
		}
	}
}
