import { GlobalEvents, GlobalFunctions } from "shared/network/global";
import { rateLimiter } from "shared/network/middleware";

export const Events = GlobalEvents.createServer({});
export const Functions = GlobalFunctions.createServer({
	middleware: {
		devCon: {
			ping: [rateLimiter(10)],
			sv_password: [rateLimiter(10)],
			mps_prompt: [rateLimiter(1)],
		},
	},
});
