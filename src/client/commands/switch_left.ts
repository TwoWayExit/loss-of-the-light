import { Players } from "@rbxts/services";
import { Command } from "@twowayexit/dev-con";
import { clSelectedCombatant, selectedEnemy, selectedSkill } from "client/atoms/client-info";
import { playersAtom } from "shared/atoms/players";

export const switch_left: Command = {
	execute: () => {
		const { battleId } = playersAtom()[tostring(Players.LocalPlayer.UserId)];
		let selectedCombatant = clSelectedCombatant();

		if (battleId === undefined) {
			return;
		}

		if (selectedSkill() !== -1) {
			let [enemyIndex, selectedEnemyCombatant] = selectedEnemy();

			if (--selectedEnemyCombatant >= 0) {
				selectedEnemy([enemyIndex, selectedEnemyCombatant]);
			}
		} else {
			if (--selectedCombatant >= 0) {
				clSelectedCombatant(selectedCombatant);
			}
		}
	},
};
