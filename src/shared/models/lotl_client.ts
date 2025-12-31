import { Workspace } from "@rbxts/services";
import { Signal } from "@rbxts/beacon";
import { PlayerNetworked } from "shared/models/player-networked";
import { Janitor } from "@rbxts/janitor";
import { NetworkPlayer, Networked } from "shared/lib/network";

/** Derivative of PlayerNetworked for handling network players */
@Networked({ client: true })
export class LotlClient extends PlayerNetworked {
	// Override with a new separate signal
	public static override readonly playerAdded = new Signal<LotlClient>();

	// Override with a new separate array
	protected static override players: LotlClient[] = [];

	protected static override clPlayer?: LotlClient;

	declare protected janitor: Janitor<{
		onCharacterDestroyed: RBXScriptConnection;
		onChildRemoved: RBXScriptConnection;
	}>;

	public constructor(player: NetworkPlayer) {
		super(player);

		if (this.isLocalClient()) {
			LotlClient.clPlayer = this;

			this.destroying.Once(() => {
				LotlClient.clPlayer = undefined;
			});
		}
	}

	/**
	 * Gets the main {@link LotlClient} of the client running the game if there is one, returning `undefined` on the server
	 * @remarks This method is more performant than calling `getPlayerFromRbxPlayer()` with the local player
	 * @returns The {@link LotlClient} of the client running the game
	 * @client
	 */
	public static override getLocalClient() {
		return this.clPlayer;
	}

	/**
	 * Gets a copy of the list of created {@link LotlClient}s
	 * @returns A copy of the player list
	 */
	public static override getPlayers() {
		return super.getPlayers() as LotlClient[];
	}

	/**
	 * Gets the {@link LotlClient} object from a character
	 * @param character - The character {@link Model}
	 * @returns The {@link LotlClient} object if it exists, otherwise `undefined`
	 */
	public static override getPlayerFromCharacter(character: Model) {
		return super.getPlayerFromCharacter(character) as LotlClient | undefined;
	}

	/**
	 * Gets the {@link LotlClient} object from a {@link Player}
	 * @param rbxPlayer - The {@link Player}
	 * @returns The {@link LotlClient} object if it exists, otherwise `undefined`
	 */
	public static override getPlayerFromRbxPlayer(rbxPlayer: Player) {
		return super.getPlayerFromRbxPlayer(rbxPlayer) as LotlClient | undefined;
	}

	protected override onPlayerCreated() {
		super.onPlayerCreated();

		LotlClient.players.push(this);
		LotlClient.playerAdded.Fire(this);
	}

	protected override onPlayerDestroyed() {
		super.onPlayerDestroyed();

		LotlClient.players.remove(LotlClient.players.indexOf(this));
	}

	protected override updateViewCFrame() {
		if (Workspace.CurrentCamera) {
			this.viewCFrame = Workspace.CurrentCamera.CFrame;
		}
	}
}
