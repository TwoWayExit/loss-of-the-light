import { Dependency } from "@flamework/core";
import { Components } from "@flamework/components";
import { Signal } from "@rbxts/beacon";
import { PlayerAnimate } from "shared/components/lotl_player-animate";
import { BasePlayer } from "./player";
import { NetworkPlayer, Networked, networkVar } from "shared/utils/network";
import { $warn } from "rbxts-transform-debug";

export const enum LotlPlayerStatus {
	IDLE,
	IN_BATTLE,
}

export class LotlPlayer<P extends Player | undefined = Player | undefined> extends BasePlayer<P> {
	// Override with a new separate signal
	public static override readonly playerAdded = new Signal<LotlPlayer>();

	// Override with a new separate array
	protected static override players: LotlPlayer[] = [];

	protected status = networkVar<LotlPlayerStatus>(LotlPlayerStatus.IDLE);

	public constructor(character?: Model, localPlayer?: P, id?: string) {
		super(character, localPlayer, id);

		this.status.network(this.id);
	}

	/**
	 * Gets the list of created {@link LotlPlayer}s
	 * @returns The player list
	 */
	public static override getPlayers() {
		return super.getPlayers() as Readonly<typeof this.players>;
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

	/**
	 * Gets the {@link LotlPlayer} object from an id
	 * @param id - A player id to lookup
	 * @returns The {@link LotlPlayer} object if it exists, otherwise `undefined`
	 */
	public static getPlayerFromId(id: string) {
		return super.getPlayerFromId(id) as LotlPlayer | undefined;
	}

	public getStatus() {
		return this.status.get();
	}

	public setStatus(status: LotlPlayerStatus) {
		this.status.set(status);
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

		$warn(`[TODO] Unimplemented death LotlPlayer ${this.id}`);
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
}

// Creates a LotlPlayer for remote clients
@Networked({ client: true })
export class LotlPlayerNetworked extends LotlPlayer<Player> {
	// Override with a new separate signal
	public static override readonly playerAdded = new Signal<LotlPlayerNetworked>();

	// Override with a new separate array
	protected static override players: LotlPlayerNetworked[] = [];

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
	}

	/**
	 * Gets the list of created {@link LotlPlayerNetworked}s
	 * @returns The player list
	 */
	public static override getPlayers() {
		return super.getPlayers() as Readonly<typeof this.players>;
	}

	/**
	 * Gets the {@link LotlPlayerNetworked} object from a character
	 * @param character - The character {@link Model}
	 * @returns The {@link LotlPlayerNetworked} object if it exists, otherwise `undefined`
	 */
	public static override getPlayerFromCharacter(character: Model) {
		return super.getPlayerFromCharacter(character) as LotlPlayerNetworked | undefined;
	}

	/**
	 * Gets the {@link LotlPlayerNetworked} object from a {@link Player}
	 * @param localPlayer - The {@link Player}
	 * @returns The {@link LotlPlayerNetworked} object if it exists, otherwise `undefined`
	 */
	public static override getPlayerFromLocalPlayer(localPlayer: Player) {
		return super.getPlayerFromLocalPlayer(localPlayer) as LotlPlayerNetworked | undefined;
	}

	/**
	 * Gets the {@link LotlPlayerNetworked} object from an id
	 * @param id - A player id to lookup
	 * @returns The {@link LotlPlayerNetworked} object if it exists, otherwise `undefined`
	 */
	public static getPlayerFromId(id: string) {
		return super.getPlayerFromId(id) as LotlPlayerNetworked | undefined;
	}

	protected override onPlayerCreated() {
		super.onPlayerCreated();

		LotlPlayerNetworked.players.push(this);
		LotlPlayerNetworked.playerAdded.Fire(this);
	}

	protected override onPlayerDestroyed() {
		super.onPlayerDestroyed();

		LotlPlayerNetworked.players.remove(LotlPlayerNetworked.players.indexOf(this));
	}
}
