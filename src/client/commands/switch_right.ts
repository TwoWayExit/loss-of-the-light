import { Players } from "@rbxts/services";
import { Command } from "@twowayexit/dev-con";
import { clSelectedCombatant, selectedEnemy, selectedSkill } from "client/atoms/client-info";
import { getEnemyCombatants } from "shared/atoms/battles";
import { playersAtom } from "shared/atoms/players";

export const switch_right: Command = {
	execute: () => {
		const { battleId, combatants } = playersAtom()[tostring(Players.LocalPlayer.UserId)];
		let selectedCombatant = clSelectedCombatant();

		if (battleId === undefined) {
			return;
		}

		if (selectedSkill() !== -1) {
			let [enemyIndex, selectedEnemyCombatant] = selectedEnemy();
			const enemyCombatants = getEnemyCombatants(tostring(Players.LocalPlayer.UserId), enemyIndex);

			if (++selectedEnemyCombatant < enemyCombatants.size()) {
				selectedEnemy([enemyIndex, selectedEnemyCombatant]);
			}
		} else {
			if (++selectedCombatant < combatants.size()) {
				clSelectedCombatant(selectedCombatant);
			}
		}
	},
};
