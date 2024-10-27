import { Players, RunService } from "@rbxts/services";
import { PlayerCollidable } from "./player-collidable";
import { Globals } from "shared/modules/globals";
import { Signal } from "@rbxts/beacon";
import { NetworkPlayer, Networked, networkVar } from "shared/utils/network";
import { Reflect } from "@flamework/core";

/** A const enum of possible player statuses */
export const enum PlayerStatus {
	IN_MENUS,
	LOADING,
	IN_GAME,
}

// This Networked decorator may be safely modified if PlayerNetworked is extended to avoid duplicate localPlayer error
@Networked({ server: false, client: false })
export class PlayerNetworked extends PlayerCollidable<Player> {
	// Override with a new separate signal
	public static override readonly playerAdded = new Signal<PlayerNetworked>();

	/** A signal which fires whenever the player's status changes */
	public readonly statusChanged = new Signal<PlayerStatus>();

	/**
	 * A signal which fires whenever the player's ping is set, with the returned boolean indicating whether the player has reached the network timeout or not
	 * @remarks This property is only defined on the server
	 * @server
	 */
	public readonly pingResolved!: Signal<boolean>;

	// Override with a new separate array
	protected static override players: PlayerNetworked[] = [];

	/**
	 * The main {@link PlayerNetworked} currently running on the client
	 * @remarks This property should always be `undefined` on the server
	 * @virtual
	 * @client
	 */
	protected static clPlayer?: PlayerNetworked;

	protected status = networkVar<PlayerStatus>(PlayerStatus.IN_MENUS);
	protected ping = networkVar<number>(0);

	public constructor(localPlayer: NetworkPlayer) {
		const character = localPlayer.Character;

		super(character, localPlayer);

		if (!character) {
			this.janitor
				.AddPromise(Promise.fromEvent(localPlayer.CharacterAdded))
				.then((character) =>
					this.getLoadedCharacter(character).then((character) => this.initializeCharacter(character)),
				);
		}

		this.status.network(tostring(localPlayer.UserId));
		this.ping.network(tostring(localPlayer.UserId));

		if (this.isLocalClient()) {
			PlayerNetworked.clPlayer = this;

			this.destroying.Once(() => {
				PlayerNetworked.clPlayer = undefined;
			});
		}

		Reflect.defineMetadata(localPlayer, "player-networked", this);

		if (RunService.IsServer()) {
			this.pingResolved = new Signal();

			this.janitor.Add(this.pingResolved, "Destroy");
		}
	}

	/**
	 * Gets the main {@link PlayerNetworked} of the client running the game if there is one, returning `undefined` on the server
	 * @remarks This method is more performant than calling `getPlayerFromLocalPlayer()` with the local player
	 * @returns The {@link PlayerNetworked} of the client running the game
	 * @client
	 */
	public static getLocalClient() {
		return this.clPlayer;
	}

	/**
	 * Gets the list of created {@link PlayerNetworked}s
	 * @returns The player list
	 */
	public static override getPlayers() {
		return super.getPlayers() as Readonly<typeof this.players>;
	}

	/**
	 * Gets the {@link PlayerNetworked} object from a character
	 * @param character - The character {@link Model}
	 * @returns The {@link PlayerNetworked} object if it exists, otherwise `undefined`
	 */
	public static override getPlayerFromCharacter(character: Model) {
		return super.getPlayerFromCharacter(character) as PlayerNetworked | undefined;
	}

	/**
	 * Gets the {@link PlayerNetworked} object from a {@link Player}
	 * @param localPlayer - The {@link Player}
	 * @returns The {@link PlayerNetworked} object if it exists, otherwise `undefined`
	 */
	public static override getPlayerFromLocalPlayer(localPlayer: Player) {
		return super.getPlayerFromLocalPlayer(localPlayer) as PlayerNetworked | undefined;
	}

	/**
	 * Gets the {@link PlayerNetworked} object from an id
	 * @param id - A player id to lookup
	 * @returns The {@link PlayerNetworked} object if it exists, otherwise `undefined`
	 */
	public static override getPlayerFromId(id: string) {
		return super.getPlayerFromId(id) as PlayerNetworked | undefined;
	}

	/**
	 * Checks whether the player's localPlayer is the client running the game
	 * @remarks This always returns false on NPCs and on the server
	 * @returns If the player is the main {@link PlayerNetworked} running on the client
	 */
	public isLocalClient(): this is PlayerNetworked {
		return this.getLocalPlayer() && RunService.IsClient() && this.getLocalPlayer() === Players.LocalPlayer;
	}

	/**
	 * Gets the player's current status
	 * @returns The player's status
	 */
	public getStatus() {
		return this.status.get();
	}

	/**
	 * Sets the player's current status
	 * @param status - The new status
	 */
	public setStatus(status: PlayerStatus) {
		if (this.status.get() !== status) {
			this.status.set(status);

			this.statusChanged.Fire(status);
		}
	}

	/**
	 * Gets the player's latency in ms
	 * @returns The player's ping
	 */
	public getPing() {
		return this.ping.get();
	}

	/**
	 * Sets the player's ping and fires the pingResolved event
	 * @param ping - The player's new ping in ms
	 */
	public setPing(ping: number) {
		this.ping.set(ping);

		this.pingResolved?.Fire(ping < Globals.NETWORK_TIMEOUT);
	}

	protected override onPlayerCreated() {
		super.onPlayerCreated();

		PlayerNetworked.players.push(this);
		PlayerNetworked.playerAdded.Fire(this);
	}

	protected override onPlayerDestroyed() {
		super.onPlayerDestroyed();

		PlayerNetworked.players.remove(PlayerNetworked.players.indexOf(this));
	}
}
