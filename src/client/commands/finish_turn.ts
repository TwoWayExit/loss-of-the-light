import { Players } from "@rbxts/services";
import { Command } from "@twowayexit/dev-con";
import { Events } from "client/network";
import { battlesAtom } from "shared/atoms/battles";
import { playersAtom } from "shared/atoms/players";

export const finish_turn: Command = {
	execute: () => {
		const battleId = playersAtom()[tostring(Players.LocalPlayer.UserId)].battleId;

		if (battleId === undefined) {
			return;
		}

		if (battlesAtom()[battleId].playerInfo[tostring(Players.LocalPlayer.UserId)].turnFinished) {
			return;
		}

		Events.lotl.finishTurn();
	},
};
