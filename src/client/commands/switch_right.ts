import { produce } from "@rbxts/better-immut";
import { Players } from "@rbxts/services";
import { Command } from "@twowayexit/dev-con";
import { clSelectedCombatant } from "client/app/atoms/client-info";
import { playersAtom } from "shared/atoms/players";

export const switch_right: Command = {
	execute: () => {
		const { battleId, combatants } = playersAtom()[tostring(Players.LocalPlayer.UserId)];
		const selectedCombatant = clSelectedCombatant();

		if (battleId === undefined) {
			return;
		}

		if (selectedCombatant + 1 >= combatants.size()) {
			return;
		}

		clSelectedCombatant(selectedCombatant + 1);
	},
};
