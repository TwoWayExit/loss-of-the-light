import { Command } from "@twowayexit/dev-con";
import { Functions } from "client/network";

export const mps_prompt: Command = {
	help: `Prompts you to purchase a catalog item, donating 40% of the item's price to Two-Way Exit
	Usage: mps_prompt <number>`,

	execute: async (_, args) => {
		const id = tonumber(args[0]);

		if (!id) {
			print("! | Missing asset ID");
			return;
		}

		try {
			const result = await Functions.devCon.mps_prompt(id);

			if (result.lower().find("ok")[0] !== undefined) {
				print(`! | ${result}`);
			} else {
				warn(result);
			}
		} catch {
			warn("! | You are being rate limited");
		}
	},
};
