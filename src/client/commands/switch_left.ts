import { Players } from "@rbxts/services";
import { Command } from "@twowayexit/dev-con";
import { clientSelectedCombatant } from "client/app/atoms/client-info";
import { playersAtom } from "shared/atoms/players";

export const switch_left: Command = {
	execute: () => {
		const { battleId } = playersAtom()[tostring(Players.LocalPlayer.UserId)];
		const selectedCombatant = clientSelectedCombatant();

		if (battleId === undefined) {
			return;
		}

		if (selectedCombatant - 1 < 0) {
			return;
		}

		clientSelectedCombatant(selectedCombatant - 1);
	},
};
