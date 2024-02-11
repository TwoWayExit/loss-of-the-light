import { Modding, Reflect } from "@flamework/core";
import { Signal } from "@rbxts/beacon";
import { Players, RunService } from "@rbxts/services";
import { t } from "@rbxts/t";

interface Destructor {
	destroy(): void;
}

type Constructor<T> = new (...args: never[]) => T;
type DecoratorConfig = [client?: boolean, server?: boolean];
type NetworkValue = string | number | boolean | Map<string, unknown>;

const checkDestructor = t.interface({
	destroy: t.callback,
});

/** An abstract singleton class to handle the {@link Networked} decorator and has helper methods */
export abstract class Network {
	/** @internal @hidden */
	public static readonly playerAdded = new Signal<Player>();

	protected static playerInstances = new Map<Player, object[]>();

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
	public static onPlayerAdded<T extends object>(player: Player, object: Constructor<T>) {
		const checks = Reflect.getMetadata<t.check<unknown>[]>(object, "flamework:parameter_guards");

		let instance;

		if (checks && checks.size() > 0 && checks[0](player)) {
			// Wacky, wonky in all sorts of ways!
			instance = new object(player as never);
		} else {
			instance = new object();
		}

		Reflect.defineMetadata(instance, "player", player);

		this.playerInstances.get(player)!.push(instance);

		for (const [, value] of pairs(instance)) {
			if (NetworkVar.is(value)) {
				value.network(player);
			}
		}
	}

	// There may be a better way of doing this
	protected static onPlayerRemoving(player: Player) {
		const instances = this.playerInstances.get(player);

		if (instances) {
			for (const instance of instances) {
				if (checkDestructor(instance)) {
					// Convert to Destructor to compile to method calling
					(instance as Destructor).destroy();
				}
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

	private client?: Player;

	/** @internal @hidden */
	public constructor(
		protected value: T,
		public readonly uuid: string,
		public readonly isValid: t.check<T>,
	) {
		this.valueSet.Connect((value) => this.onValueSet(value));

		NetworkVar.idToVar.set(this.uuid, this);
	}

	public static is(object: unknown): object is NetworkVar<NetworkValue> {
		return typeIs(object, "table") && "value" in object && "valueSet" in object;
	}

	public static getVarFromId(uuid: string, client?: Player) {
		return client ? this.idToVar.get(`${client.UserId}~${uuid}`) : this.idToVar.get(uuid);
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

	public network(client: Player): void;

	public network(id: string): void;

	public network(client: Player | string) {
		assert(!this.client, "NetworkVar already networked and initialized");

		NetworkVar.idToVar.delete(this.uuid);

		if (typeIs(client, "Instance") && client.IsA("Player")) {
			this.client = client;

			NetworkVar.idToVar.set(`${client.UserId}~${this.uuid}`, this);
		} else {
			NetworkVar.idToVar.set(`${client}~${this.uuid}`, this);
		}
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
 * @remarks The {@link NetworkVar} can be initialized and linked to a client using the `network()` method
 * @metadata macro
 */
export function networkVar<T extends NetworkValue>(initialValue: T, metadata?: Modding.Many<NetworkVarMetadata<T>>) {
	assert(metadata);

	return new NetworkVar(initialValue, metadata.caller, metadata.generic);
}

/**
 * Networks this class, creating it when a player joins, and destroying it when the player leaves, additionally adding a "player" metadata which stores the {@link Player} when this class is instantiated
 *
 * If the class constructor takes in a {@link Player} as the first parameter, the player is passed in the first argument
 * @param client - Whether this class should be instantiated on the client or not (default: false)
 * @param server - Whether this class should be instantiated on the server or not (default: true)
 * @remarks The class will only be destroyed if it has a `destroy()` method
 * @metadata flamework:parameter_guards
 */
export const Networked = Modding.createDecorator<DecoratorConfig>(
	"Class",
	({ constructor }, [runClient = false, runServer = true]) => {
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

		Players.GetPlayers().forEach((player) => Network.onPlayerAdded(player, constructor));

		Network.playerAdded.Connect((player) => Network.onPlayerAdded(player, constructor));
	},
);
