import { Networking } from "@flamework/networking";
import { config } from "../config";
import { globalReplicas } from "../replicas";
import { DevConServerEvents, DevConServerFunctions } from "./dev-con";

type MovementVar = keyof ReturnType<typeof globalReplicas.client.movement.GetValue>;

interface ServerEvents {
	devCon: DevConServerEvents;
}

interface ClientEvents {
	updateSharedConfig: (update: Partial<typeof config>) => void;
	receiveNetVar: (uuid: string, value: unknown, client?: string) => void;
}

interface ServerFunctions {
	setMovementVar: (varName: MovementVar, value: number) => string;

	devCon: DevConServerFunctions;
}

interface ClientFunctions {
	response: (key: string) => string;
}

export const GlobalEvents = Networking.createEvent<ServerEvents, ClientEvents>();
export const GlobalFunctions = Networking.createFunction<ServerFunctions, ClientFunctions>();
