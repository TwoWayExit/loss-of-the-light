import { Networking } from "@flamework/networking";
import { Players, RunService } from "@rbxts/services";

export function rateLimiter<I extends unknown[], O>(rate: number): Networking.FunctionMiddleware<I, O> {
	return (processNext, event) => {
		if (RunService.IsClient()) {
			throw "Rate limiter middleware can only be loaded on the server";
		}

		const rateLimit: { [player: string]: number | undefined } = {};

		// Not particularly efficient with memory usage
		Players.PlayerRemoving.Connect((player) => {
			rateLimit[player.Name] = undefined;
		});

		print(`Loaded rate limiter middleware for ${event.name}`);

		return async (player, ...args) => {
			if (rateLimit[player!.Name] === undefined) {
				rateLimit[player!.Name] = 0;
			}

			if (os.clock() - rateLimit[player!.Name]! > 1 / rate) {
				rateLimit[player!.Name] = os.clock();
				return processNext(player, ...args);
			}

			rateLimit[player!.Name] = os.clock();
			return Networking.Skip;
		};
	};
}
