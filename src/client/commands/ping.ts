import { Command } from "@twowayexit/dev-con";
import { Functions } from "client/network/dev-con";

const ping: Command = {
	execute: async () => {
		try {
			const pings = await Functions.ping.invoke();

			// eslint-disable-next-line roblox-ts/no-array-pairs
			for (const [player, ping] of pairs(pings)) {
				print(`${player} : ${ping}ms`);
			}
		} catch {
			warn("[WARN] Potential rate limitation or unknown exception");
		}
	},
};

export { ping };
