import { Service, OnInit } from "@flamework/core";
import { Functions } from "server/network/global";
import { Players, HttpService } from "@rbxts/services";
import { NetworkingFunctionError } from "@flamework/networking";
import { Globals } from "shared/modules/globals";
import { PlayerNetworked } from "shared/models/player-networked";

const enum Errors {
	INCORRECT_KEY = "Incorrect key returned",
	RECURSION_TIMEOUT = "Recursive ping timeout",
}

@Service()
export class NetworkService implements OnInit {
	protected async ping(player: PlayerNetworked, key: string, past = os.clock()) {
		try {
			if (os.clock() - past >= Globals.NETWORK_TIMEOUT) {
				throw Errors.RECURSION_TIMEOUT;
			}

			const returnedKey = await Functions.response.invokeWithTimeout(
				player.getLocalPlayer(),
				Globals.NETWORK_TIMEOUT,
				key,
			);

			if (returnedKey === key) {
				const ping = math.round((os.clock() - past) * 1000);

				player.setPing(ping);
			} else {
				warn(`Rejected ${player.getLocalPlayer().Name}'s response because "${Errors.INCORRECT_KEY}"`);
				player.getLocalPlayer().Kick();
			}
		} catch (e) {
			if (this.isTimeoutError(e)) {
				const ping = math.round((os.clock() - past) * 1000);

				player.setPing(ping);

				warn(`Pinging ${player.getLocalPlayer().Name} timed out after ${ping}ms (${e})`);
			} else {
				//warn(`Rejected ${player.Name}'s response because "${e}"`);

				task.wait(); // Avoid stack overflow
				await this.ping(player, key, past);
			}
		}
	}

	protected async startPing(player: PlayerNetworked) {
		const start = time();

		while (PlayerNetworked.getPlayers().includes(player) && player.getLocalPlayer().IsDescendantOf(Players)) {
			const key = HttpService.GenerateGUID(false);

			await this.ping(player, key);
		}

		print(`Player ${player} connection done after ${time() - start}s`);
	}

	private isTimeoutError(e: unknown): e is string {
		return (
			typeIs(e, "string") &&
			(e.match(NetworkingFunctionError.Timeout + "$")[0] !== undefined ||
				e.match(Errors.RECURSION_TIMEOUT + "$")[0] !== undefined)
		);
	}

	onInit() {
		PlayerNetworked.playerAdded.Connect((player) => this.startPing(player));
	}
}
