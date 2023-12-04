import { Networking } from "@flamework/networking";
import { Players, RunService } from "@rbxts/services";
import { PlayerNetworked } from "../models/player-networked";

export function pingVerifier<I extends unknown[]>(): Networking.EventMiddleware<I> {
	return (processNext, event) => {
		if (RunService.IsClient()) {
			throw "Ping verifier middleware can only be loaded on the server";
		}

		print(`Loaded ping verifier middleware for ${event.name}`);

		return (player, ...args) => {
			const networkPlayer = PlayerNetworked.getPlayerFromLocalPlayer(player!);
			const success = networkPlayer?.pingResolved.Wait();

			if (success || !networkPlayer) {
				processNext(player, ...args);
			}
		};
	};
}

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
