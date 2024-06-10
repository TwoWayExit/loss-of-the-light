import { Command } from "@twowayexit/dev-con";
import { Events } from "client/network/global";
import { LotlPlayer } from "shared/models/lotl_player";

export const kill: Command = {
	help: "Set's the player's health to 0",

	execute: (_, [target]) => {
		const player = LotlPlayer.getPlayers().find((player) => player.getCharacter()?.Name === target);

		Events.devCon.kill(player?.getCharacter()); // Pass the character, since they're replicated by reference
	},
};
