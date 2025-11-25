import { produce } from "@rbxts/better-immut";
import { Players } from "@rbxts/services";
import { Command } from "@twowayexit/dev-con";
import { clientSelectedCombatant } from "client/app/atoms/client-info";
import { playersAtom } from "shared/atoms/players";

export const switch_right: Command = {
	execute: () => {
		const { battleId, combatants } = playersAtom()[tostring(Players.LocalPlayer.UserId)];
		const selectedCombatant = clientSelectedCombatant();

		if (battleId === undefined) {
			return;
		}

		if (selectedCombatant + 1 >= combatants.size()) {
			return;
		}

		clientSelectedCombatant(selectedCombatant + 1);
	},
};
