import { Dependency, Reflect } from "@flamework/core";
import { Components } from "@flamework/components";
import { Signal } from "@rbxts/beacon";
import { ReplicatedStorage, Workspace } from "@rbxts/services";
import { PlayerAnimate } from "shared/components/lotl_player-animate";
import { BasePlayer } from "./player";
import { NetworkPlayer, Networked } from "shared/utils/network";
import { Character } from "./character";
import { $warn } from "rbxts-transform-debug";
import { Combatant } from "./combatant";

export const enum LotlPlayerStatus {
	IDLE,
	IN_BATTLE,
}

export type CombatantList = Omit<ReplicatedStorage["combatants"], keyof Folder>;

export class LotlPlayer<P extends Player | undefined = Player | undefined> extends BasePlayer<P> {
	// Override with a new separate signal
	public static override readonly playerAdded = new Signal<LotlPlayer>();

	// Override with a new separate array
	protected static override players: LotlPlayer[] = [];

	protected combatants: (keyof CombatantList)[] = [];
	protected combatantInstances: Character[] = [];

	protected status = LotlPlayerStatus.IDLE;

	// Make localPlayer the first parameter in order for Networked to automatically pass in the player
	public constructor(localPlayer?: P, character?: Model | Promise<Model>, id?: string) {
		super(character, localPlayer, id);
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

	public getStatus() {
		return this.status;
	}

	public setStatus(status: LotlPlayerStatus) {
		this.status = status;
	}

	public addCombatant(combatant: keyof CombatantList) {
		this.combatants.push(combatant);
	}

	public removeCombatant(combatant: keyof CombatantList) {
		this.combatants.remove(this.combatants.indexOf(combatant));
	}

	public async createCombatants() {
		const combatants: Combatant[] = [];

		for (const name of this.combatants) {
			const clone = ReplicatedStorage.combatants[name].Clone();

			clone.Parent = Workspace.combatants;

			this.combatantInstances.push(clone);

			// FIXME: Need a better alternative to await for metadata
			task.wait();

			const combatant = Reflect.getMetadata<Combatant>(clone, "combatant");

			if (!combatant) {
				$warn(`[WARN] Combatant not found in ${name}`);
				continue;
			}

			combatants.push(combatant);
		}

		return combatants;
	}

	public cleanupCombatants() {
		for (const instance of this.combatantInstances) {
			instance.Destroy();
		}

		this.combatantInstances.clear();
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

@Networked({})
export class LotlPlayerNetworked extends LotlPlayer<Player> {
	// Override with a new separate signal
	public static override readonly playerAdded = new Signal<LotlPlayerNetworked>();

	// Override with a new separate array
	protected static override players: LotlPlayerNetworked[] = [];

	public constructor(localPlayer: NetworkPlayer) {
		const character = localPlayer.Character ?? Promise.fromEvent(localPlayer.CharacterAdded);

		super(localPlayer, character);
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
