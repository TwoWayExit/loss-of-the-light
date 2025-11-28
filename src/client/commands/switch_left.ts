import { Players } from "@rbxts/services";
import { Command } from "@twowayexit/dev-con";
import { clSelectedCombatant } from "client/app/atoms/client-info";
import { playersAtom } from "shared/atoms/players";

export const switch_left: Command = {
	execute: () => {
		const { battleId } = playersAtom()[tostring(Players.LocalPlayer.UserId)];
		const selectedCombatant = clSelectedCombatant();

		if (battleId === undefined) {
			return;
		}

		if (selectedCombatant - 1 < 0) {
			return;
		}

		clSelectedCombatant(selectedCombatant - 1);
	},
};
