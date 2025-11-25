import { Signal } from "@rbxts/beacon";
import { Janitor } from "@rbxts/janitor";
import { LifecycleHook } from "shared/utils/lifecycle-hooks";
import { PlayerNetworked } from "shared/models/player-networked";

export class Level<S extends {} = {}, M extends Model = Model, C extends Instance = Instance> {
	/** A signal which fires whenever a level loads */
	public static readonly levelLoaded = new Signal<Level>();

	/** A signal which fires whenever a level unloads */
	public static readonly levelUnloaded = new Signal<Level>();

	protected static loadedLevels: Level[] = [];

	/** The cloned map instance used for loading */
	public readonly instance: M;

	protected janitor = new Janitor();

	protected name = "";
	protected spawnPoint = Vector3.zero;

	protected isLoaded = false;

	/** Constructs a new pre-defined level with the arguments inputted */
	public constructor(
		public readonly state: S,
		protected map: M,
		protected container: C,
	) {
		assert(!Level.loadedLevels.find((level) => level.map === map), "Attempt to duplicate map level");

		this.instance = map.Clone();
	}

	/**
	 * Gets the list of the currently loaded levels
	 * @returns A list of currently loaded levels
	 */
	public static getLoadedLevels() {
		return this.loadedLevels as Readonly<(typeof Level)["loadedLevels"]>;
	}

	/**
	 * Gets the map instance inputted from the public constructor
	 * @returns The map instance
	 */
	public getMap() {
		return this.map;
	}

	/**
	 * Gets the set name of the level
	 * @returns The name of the level
	 */
	public getName() {
		return this.name;
	}

	/**
	 * Sets the name of the level
	 * @param name - The new name of the level
	 * @returns This {@link Level} for chaining purposes
	 */
	public setName(name: string) {
		this.name = name;

		return this;
	}

	/**
	 * Gets the set spawn point of the level
	 * @returns The spawn point of the level
	 */
	public getSpawnPoint() {
		return this.spawnPoint;
	}

	/**
	 * Sets the spawn point of the level
	 * @param point - The new spawn point of the level
	 * @returns This {@link Level} for chaining purposes
	 */
	public setSpawnPoint(point: Vector3) {
		this.spawnPoint = point;

		return this;
	}

	/**
	 * Gets whether the level is loaded or not
	 * @returns A boolean indicating whether the level is loaded or not
	 */
	public getLoaded() {
		return this.isLoaded;
	}

	/**
	 * Adds an area which loads the level when at least 1 player is inside and unloads it when no more players are
	 * @param mins - The minimums of the area
	 * @param maxs - The maximums of the area
	 * @param destroyOnUnload - A boolean indicating whether the level should be destroyed when unloaded or not
	 * @returns The {@link LifecycleHook} which can be unhooked to remove the area loader
	 * @remarks The area loader gets automatically removed when the level is unloaded
	 */
	public addAreaLoader(mins: Vector3, maxs: Vector3, destroyOnUnload = true) {
		return this.janitor.Add(
			new LifecycleHook("Stepped", () => {
				for (const player of PlayerNetworked.getPlayers()) {
					const character = player.getCharacter();

					if (character && this.isInArea(character.GetPivot().Position, mins, maxs)) {
						this.load();
						return;
					}
				}

				if (this.isLoaded) {
					if (!destroyOnUnload) {
						this.unload();
					} else {
						this.destroy();
					}
				}
			}),
			"unhook",
		);
	}

	/**
	 * Loads the level
	 * @returns The cloned map instance loaded
	 * @remarks The level will not be reloaded if it was previously loaded
	 */
	public load() {
		if (this.isLoaded) {
			return this.instance;
		}

		Level.loadedLevels.push(this);

		this.instance.Parent = this.container;
		this.isLoaded = true;

		Level.levelLoaded.Fire(this);

		return this.instance;
	}

	/**
	 * Unloads the level, removing any added area loaders
	 * @remarks The level will not be unloaded if not previously loaded
	 */
	public unload() {
		if (!this.isLoaded) {
			return;
		}

		Level.loadedLevels.remove(Level.loadedLevels.indexOf(this));

		this.janitor.Cleanup();

		this.instance.Parent = undefined;
		this.isLoaded = false;

		Level.levelUnloaded.Fire(this);
	}

	/** Destructor */
	public destroy() {
		this.unload();

		this.janitor.Destroy();
		this.instance.Destroy();
	}

	private isInArea(position: Vector3, mins: Vector3, maxs: Vector3) {
		const { X, Y, Z } = position;

		const inX = (X > mins.X && X < maxs.X) || (X < mins.X && X > maxs.X),
			inY = (Y > mins.Y && Y < maxs.Y) || (Y < mins.Y && Y > maxs.Y),
			inZ = (Z > mins.Z && Z < maxs.Z) || (Z < mins.Z && Z > maxs.Z);

		return inX && inY && inZ;
	}
}
