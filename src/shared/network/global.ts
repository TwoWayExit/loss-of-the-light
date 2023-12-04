import { Networking } from "@flamework/networking";
import { config } from "../config";
import { globalReplicas } from "../replicas";

type MovementVar = keyof ReturnType<typeof globalReplicas.client.movement.GetValue>;

interface ServerEvents {}

interface ClientEvents {
	updateSharedConfig: (update: Partial<typeof config>) => void;
	receiveNetVar: (client: Player, uuid: string, value: unknown) => void;
}

interface ServerFunctions {
	setMovementVar: (varName: MovementVar, value: number) => string;
}

interface ClientFunctions {
	response: (key: string) => string;
}

export const GlobalEvents = Networking.createEvent<ServerEvents, ClientEvents>();
export const GlobalFunctions = Networking.createFunction<ServerFunctions, ClientFunctions>();
