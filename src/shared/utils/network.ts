import { Modding } from "@flamework/core";
import { Signal } from "@rbxts/beacon";
import { Players, RunService } from "@rbxts/services";
import { t } from "@rbxts/t";

type Constructor<T> = new (...args: never[]) => T;
type NetworkValue = string | number | boolean | Map<string, unknown>;

/** A dependency to retrieve the `client` property of a {@link Networked} class object */
export type NetworkPlayer = Player & { _marker?: void };

/** An interface to implement when using the {@link Networked} decorator */
export interface Networkable {
	/** The {@link Player} associated with this {@link Networked} class object */
	client: Player;

	destroy?: (this: Networkable) => unknown;
}

/** A static singleton class to handle the {@link Networked} decorator and contains static helper methods */
export class Network {
	/** @internal @hidden */
	public static readonly playerAdded = new Signal<Player>();

	protected static playerInstances = new Map<Player, Networkable[]>();

	private static recentClient?: Player;

	static {
		Players.GetPlayers().forEach((player) => this.playerInstances.set(player, []));

		Players.PlayerAdded.Connect((player) => {
			this.playerInstances.set(player, []);
			this.playerAdded.Fire(player);
		});
		Players.PlayerRemoving.Connect((player) => this.onPlayerRemoving(player));
	}

	/** @remarks Do not construct! */
	private constructor() {}

	/**
	 * Gets the {@link Networked} instance associated with a player if there is one
	 * @param networked - The Networked class constructor
	 * @param player - A player to find the associated Networked instance
	 * @returns - An instance of the {@link Networked} class if there is one
	 */
	public static getNetworked<T>(networked: Constructor<T>, player: Player): T | undefined {
		const instances = this.playerInstances.get(player);

		if (instances) {
			for (const instance of instances) {
				if (instance instanceof networked) {
					return instance;
				}
			}
		}
	}

	/** @internal @hidden */
	public static getNetworkPlayer() {
		return this.recentClient;
	}

	/** @internal @hidden */
	public static onPlayerAdded<T extends Networkable>(player: Player, object: Constructor<T>) {
		const [instance, construct] = Modding.createDeferredDependency(object);

		instance.client = player;

		this.recentClient = player; // Allow the NetworkPlayer dependency to access

		this.playerInstances.get(player)!.push(instance);

		construct();
	}

	// There may be a better way of doing this
	protected static onPlayerRemoving(player: Player) {
		const instances = this.playerInstances.get(player);

		if (instances) {
			for (const instance of instances) {
				instance.destroy?.();
			}

			// Just in case
			instances.clear();

			this.playerInstances.delete(player);
		}
	}
}

/**
 * A class to create variables which replicate server values to client values (non vice versa)
 * @remarks Do not directly construct this class, instead use the {@link networkVar} macro
 */
export class NetworkVar<T extends NetworkValue> {
	public readonly valueSet = new Signal<[T]>();

	protected static idToVar = new Map<string, NetworkVar<NetworkValue>>();

	private client?: string;

	/** @internal @hidden */
	public constructor(
		protected value: T,
		public readonly uuid: string,
		public readonly isValid: t.check<T>,
	) {
		this.valueSet.Connect((value) => this.onValueSet(value));
	}

	public static is(object: unknown): object is NetworkVar<NetworkValue> {
		return typeIs(object, "table") && "value" in object && "valueSet" in object;
	}

	public static getVarFromId(uuid: string, client?: string) {
		return client !== undefined ? this.idToVar.get(`${client}~${uuid}`) : this.idToVar.get(uuid);
	}

	public get() {
		return this.value;
	}

	public set(value: T) {
		this.value = value;

		this.valueSet.Fire(value);
	}

	public getClient() {
		return this.client;
	}

	/** Initializes this {@link NetworkVar} as a global network var */
	public network(): void;

	/**
	 * Initializes this {@link NetworkVar} as a player network var
	 * @param client - A unique identifier for the player
	 */
	public network(client: string): void;

	public network(client?: string) {
		if (client === undefined) {
			if (NetworkVar.idToVar.get(this.uuid)) {
				warn(
					`[WARN] Pre-existing global networkVar ${this.uuid}, this may result in unexpected behavior and should be avoided`,
				);
			}

			NetworkVar.idToVar.set(this.uuid, this);
			return;
		}

		assert(this.client === undefined, "NetworkVar already networked and initialized");

		NetworkVar.idToVar.delete(this.uuid);

		this.client = client;

		NetworkVar.idToVar.set(`${client}~${this.uuid}`, this);
	}

	protected async onValueSet(value: T) {
		if (RunService.IsServer()) {
			const { Events } = await import("server/network/global");

			Events.receiveNetVar.broadcast(this.uuid, value, this.client);
		}
	}
}

export interface NetworkVarMetadata<T extends NetworkValue> {
	generic: Modding.Generic<T, "guard">;
	caller: Modding.Caller<"uuid">;
}

/**
 * Macro to construct a {@link NetworkVar}, which replicates server values to client values (non vice versa)
 * @remarks The {@link NetworkVar} is required to be initialized using the `network()` method with a client's unique ID (ie. UserId) if used within a non-static class member (preferably in the class constructor) or without otherwise (global network var)
 * @metadata macro
 */
export function networkVar<T extends NetworkValue>(initialValue: T, metadata?: Modding.Many<NetworkVarMetadata<T>>) {
	assert(metadata);

	return new NetworkVar(initialValue, metadata.caller, metadata.generic);
}

/**
 * Networks this class, creating it when a player joins, and destroying it when the player leaves, additionally adding a "player" metadata which stores the {@link Player} when this class is instantiated
 *
 * If the class constructor takes in a {@link NetworkPlayer} as one of its parameters, the player is passed in through dependency injection
 * @param client - Whether this class should be instantiated on the client or not (default: false)
 * @param server - Whether this class should be instantiated on the server or not (default: true)
 * @remarks The class will only be destroyed if it has a `destroy()` method
 * @metadata flamework:parameters {@link Networkable constraint}
 */
export const Networked = Modding.createDecorator<
	[{ client?: boolean; server?: boolean; predicate?: (player: Player) => boolean }]
>("Class", ({ constructor }, [{ client: runClient = false, server: runServer = true, predicate }]) => {
	// If it should create on the client
	if (RunService.IsClient() && !runClient) {
		return;
	}

	// If it should create on the server
	if (RunService.IsServer() && !runServer) {
		return;
	}

	if (!constructor) {
		return;
	}

	Players.GetPlayers().forEach((player) => {
		if (predicate && !predicate(player)) {
			return;
		}

		Network.onPlayerAdded(player, constructor as Constructor<Networkable>);
	});

	Network.playerAdded.Connect((player) => {
		if (predicate && !predicate(player)) {
			return;
		}

		Network.onPlayerAdded(player, constructor as Constructor<Networkable>);
	});
});

Modding.registerDependency<NetworkPlayer>((obj) => {
	assert(
		Modding.getDecorator<typeof Networked>(obj),
		"The NetworkPlayer dependency may only be used in a Networked decorated class",
	);

	// This will be called right after the instance is constructed, so recentClient will not have an overlap/conflict
	return Network.getNetworkPlayer();
});
