import { Command } from "@twowayexit/dev-con";
import { PlayerNetworked } from "shared/models/player-networked";

export const kill: Command = {
	help: "Set's the player's health to 0",

	execute: () => {
		PlayerNetworked.getLocalClient()?.setHealth(0);
	},
};
