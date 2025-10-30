import { produce } from "@rbxts/better-immut";
import { Players } from "@rbxts/services";
import { Command } from "@twowayexit/dev-con";
import { playersAtom } from "shared/atoms/players";

export const switch_right: Command = {
	execute: () => {
		const { battleId, selectedCombatant, combatants } = playersAtom()[tostring(Players.LocalPlayer.UserId)];

		if (battleId === undefined) {
			return;
		}

		if (selectedCombatant + 1 >= combatants.size()) {
			return;
		}

		playersAtom((state) =>
			produce(state, (draft) => {
				draft[tostring(Players.LocalPlayer.UserId)].selectedCombatant = selectedCombatant + 1;
			}),
		);
	},
};
