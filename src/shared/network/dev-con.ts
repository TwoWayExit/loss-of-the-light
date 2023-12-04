import { Networking } from "@flamework/networking";
import { rateLimiter } from "./middleware";

interface ServerEvents {}

interface ClientEvents {}

interface ServerFunctions {
	ping: () => { [player: string]: number };

	sv_password: (password: string) => string;

	mps_prompt: (assetId: number) => string;
}

interface ClientFunctions {}

export const DevConEvents = Networking.createEvent<ServerEvents, ClientEvents>();
export const DevConFunctions = Networking.createFunction<ServerFunctions, ClientFunctions>({
	ping: [rateLimiter(10)],
	sv_password: [rateLimiter(10)],
	mps_prompt: [rateLimiter(1)],
});
