import { Players, RunService } from "@rbxts/services";
import { Signal } from "@rbxts/beacon";
import { BaseCharacter } from "shared/models/character";
import { UserCommand } from "shared/modules/user-command";
import { ViewVectors } from "shared/modules/view-vectors";
import { networkVar } from "shared/lib/network";
import { $env } from "rbxts-transform-env";
import { svVarsAtom } from "shared/atoms/sv-vars";

export class BasePlayer<P extends Player | undefined = Player | undefined> extends BaseCharacter<P> {
	/** @virtual */
	public static readonly playerAdded = new Signal<BasePlayer>();

	public readonly command = new UserCommand();

	/** A signal which fires whenever the player dies */
	public readonly died = new Signal<void>();

	/** The unique identifier for this player */
	public readonly id: string;

	/**
	 * A signal which fires whenever the player respawns
	 * @remarks This signal does **not** fire when the player character loads for the first time
	 */
	public readonly respawned = new Signal<void>();

	/** @virtual */
	protected static players: BasePlayer[] = [];

	protected health = networkVar<number>(100);
	protected maxHealth = networkVar<number>(100);
	protected maxSpeed = 0;

	private flags = 0;

	static {
		if ($env.boolean("MULTI_LOCALPLAYER_INSTANCES")) {
			print(
				"[NOTICE] MULTI_LOCALPLAYER_INSTANCES env is TRUE, be wary of potential conflicts when using derivatives",
			);
		}
	}

	public constructor(character?: Model, rbxPlayer?: P);

	public constructor(character?: Model, rbxPlayer?: P, id?: string);

	public constructor(character?: Model, rbxPlayer?: P, id = rbxPlayer && tostring(rbxPlayer.UserId)) {
		assert(id, "No player id associated");

		if ($env.boolean("MULTI_LOCALPLAYER_INSTANCES")) {
			// Exclude this check
		} else {
			if (rbxPlayer) {
				assert(
					!BasePlayer.getPlayerFromRbxPlayer(rbxPlayer),
					"Attempt to duplicate BasePlayer from existing rbxPlayer",
				);
			}

			assert(!BasePlayer.getPlayerFromId(id), "Attempt to create BasePlayer from existing id");
		}

		super(character, rbxPlayer);

		this.id = id;

		this.health.network(id);
		this.maxHealth.network(id);

		this.janitor.Add(this.died, "Destroy");
		this.janitor.Add(this.respawned, "Destroy");

		this.died.Connect(() => this.onDied());

		this.onPlayerCreated();
	}

	/**
	 * Gets the list of created {@link BasePlayer}s
	 * @returns The player list
	 */
	public static getPlayers() {
		return this.players as Readonly<typeof this.players>;
	}

	/**
	 * Gets the {@link BasePlayer} object from a character
	 * @param character - The character {@link Model}
	 * @returns The {@link BasePlayer} object if it exists, otherwise `undefined`
	 */
	public static getPlayerFromCharacter(character: Model) {
		return this.players.find((player) => player.getCharacter() === character);
	}

	/**
	 * Gets the {@link BasePlayer} object from a {@link Player}
	 * @param rbxPlayer - The {@link Player}
	 * @returns The {@link BasePlayer} object if it exists, otherwise `undefined`
	 */
	public static getPlayerFromRbxPlayer(rbxPlayer: Player) {
		return this.players.find((player) => player.getRbxPlayer() === rbxPlayer);
	}

	/**
	 * Gets the {@link BasePlayer} object from an id
	 * @param id - A player id to lookup
	 * @returns The {@link BasePlayer} object if it exists, otherwise `undefined`
	 */
	public static getPlayerFromId(id: string) {
		return this.players.find((player) => player.id === id);
	}

	/**
	 * Gets the player character's bounding box mins (in local space)
	 * @returns The player character's bounding box mins
	 */
	public getPlayerMins() {
		assert(this.character);

		return ViewVectors.HULL_MIN.mul(this.character.GetScale());
	}

	/**
	 * Gets the player character's bounding box maxs (in local space)
	 * @returns The player character's bounding box maxs
	 */
	public getPlayerMaxs() {
		assert(this.character);

		return ViewVectors.HULL_MAX.mul(this.character.GetScale());
	}

	/**
	 * Gets the player's step size in studs
	 * @returns The player's step size
	 */
	public getStepSize() {
		return svVarsAtom().sv_stepsize;
	}

	/**
	 * Gets the player's max speed
	 * @returns The player's max speed
	 */
	public getMaxSpeed() {
		let maxSpeed = svVarsAtom().sv_maxspeed;

		if (this.maxSpeed > 0 && this.maxSpeed < maxSpeed) {
			maxSpeed = this.maxSpeed;
		}

		return maxSpeed;
	}

	/**
	 * Sets the player's max speed
	 * @param maxSpeed - The player's new max speed
	 */
	public setMaxSpeed(maxSpeed: number) {
		this.maxSpeed = maxSpeed;
	}

	/**
	 * Gets the player's current health
	 * @returns The player's current health
	 */
	public getHealth() {
		return this.health.get();
	}

	/**
	 * Sets the player's health with it capped between 0 and the max health
	 * @param health - The number to set the player's health as
	 * @returns The health after it gets changed
	 */
	public setHealth(health: number) {
		const oldHealth = this.health.get();

		this.health.set(math.clamp(health, 0, this.maxHealth.get()));

		if (health <= 0 && oldHealth > 0) {
			this.died.Fire();
		}

		return this.health.get();
	}

	/**
	 * Gets the player's maximum health
	 * @returns The player's maximum health
	 */
	public getMaxHealth() {
		return this.maxHealth.get();
	}

	/**
	 * Sets the player's maximum health
	 * @param maxHealth - The number to set the player's maximum health as
	 */
	public setMaxHealth(maxHealth: number) {
		this.maxHealth.set(math.max(maxHealth, 0));

		this.setHealth(this.getHealth()); // Update our health to be clamped
	}

	/**
	 * Makes the player take damage with their health capped between 0 and 100
	 * @param damage - How much damage the player should take
	 * @returns The health after the player takes damage
	 */
	public takeDamage(damage: number) {
		this.setHealth(this.health.get() - damage);

		return this.health;
	}

	/**
	 * Gets the player's current flags
	 * @returns The player's current flags
	 */
	public getFlags() {
		return this.flags;
	}

	/**
	 * Adds flags to the player
	 * @param flags - The flags to add
	 */
	public addFlag(flags: number) {
		this.flags |= flags;
	}

	/**
	 * Removes flags from the player
	 * @param flagsToRemove - The flags to remove
	 */
	public removeFlag(flagsToRemove: number) {
		this.flags &= ~flagsToRemove;
	}

	/**
	 * Clears the player's flags
	 */
	public clearFlags() {
		this.flags = 0;
	}

	/**
	 * Gets the player's nickname, helpful for debugging
	 * @returns Returns the player's `Name` if they have a `rbxPlayer`, else their `id`
	 */
	public getNickname() {
		return this.getRbxPlayer()?.Name ?? this.id;
	}

	/**
	 * Alias for `getHealth() > 0`
	 * @returns If the player is alive
	 */
	public isAlive() {
		return this.health.get() > 0;
	}

	/**
	 * Respawns the player and sets their health back to maximum
	 */
	public respawn(): void;

	/**
	 * Respawns the player and sets their health back to maximum
	 * @param respawnPoint - The position to spawn the player in
	 */
	public respawn(respawnPoint: Vector3): void;

	public respawn(respawnPoint = Vector3.zero) {
		this.setHealth(this.getMaxHealth());

		this.setAbsOrigin(respawnPoint);

		this.respawned.Fire();
	}

	public override destroy() {
		this.onPlayerDestroyed();

		super.destroy();
	}

	protected override async onCharacterAdded(newCharacter: Model) {
		await super.onCharacterAdded(newCharacter);

		this.respawn();
	}

	protected override onCharacterDestroyed() {
		super.onCharacterDestroyed();

		this.died.Fire();
	}

	/**
	 * Called when the {@link BasePlayer} public constructor is ran
	 * @remarks This method should only be overriden to add this constructed object to a list
	 * @virtual
	 */
	protected onPlayerCreated() {
		BasePlayer.players.push(this);
		BasePlayer.playerAdded.Fire(this);
	}

	/**
	 * Called when the {@link BasePlayer} destroy() method is ran
	 * @remarks This method should only be overriden to remove this constructed object from a list
	 * @virtual
	 */
	protected onPlayerDestroyed() {
		BasePlayer.players.remove(BasePlayer.players.indexOf(this));
	}

	/**
	 * Called when the player's health reaches 0
	 * @virtual
	 */
	protected onDied() {
		this.janitor.AddPromise(Promise.delay(4)).then(() => this.respawn());
	}
}
