import { Command } from "@twowayexit/dev-con";
import { Events } from "client/network";
import { BasePlayer } from "shared/models/player";

export const kill: Command = {
	help: "Set's the player's health to 0",

	execute: (_, [target]) => {
		const player = BasePlayer.getPlayers().find((player) => player.getCharacter()?.Name === target);

		Events.devCon.kill(player?.getCharacter()); // Pass the character, since they're replicated by reference
	},
};
