import { Networking } from "@flamework/networking";
import { config } from "../config";
import { globalReplicas } from "../replicas";
import { DevConServerEvents, DevConServerFunctions } from "./dev-con";
import { LotlClientEvents, LotlServerEvents } from "./lotl";

type MovementVar = keyof ReturnType<typeof globalReplicas.client.movement.GetValue>;

interface ServerEvents {
	requestState: () => void;

	devCon: DevConServerEvents;
	lotl: LotlServerEvents;
}

interface ClientEvents {
	updateSharedConfig: (update: Partial<typeof config>) => void;
	receiveNetVar: (uuid: string, value: unknown, client?: string) => void;

	// Flamework's type guard middlware messes up the SyncPayload type and is prone to failing, so pass unknown instead
	syncState: (payload: unknown) => void;

	lotl: LotlClientEvents;
}

interface ServerFunctions {
	setMovementVar: (varName: MovementVar, value: number) => string;

	devCon: DevConServerFunctions;
}

interface ClientFunctions {}

export const GlobalEvents = Networking.createEvent<ServerEvents, ClientEvents>();
export const GlobalFunctions = Networking.createFunction<ServerFunctions, ClientFunctions>();
