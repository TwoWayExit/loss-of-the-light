import { Players } from "@rbxts/services";
import { Command } from "@twowayexit/dev-con";
import { selectedCombatant, selectedEnemy, selectedSkill } from "client/atoms/battle";
import { getEnemyCombatants } from "shared/atoms/battles";
import { playersAtom } from "shared/atoms/players";

export const switch_right: Command = {
	execute: () => {
		const { battleId, combatants } = playersAtom()[tostring(Players.LocalPlayer.UserId)];
		let combatant = selectedCombatant();

		if (battleId === undefined) {
			return;
		}

		// TODO: Make this account for dead combatants using the getNextLivingCombatant() function
		if (selectedSkill() !== -1) {
			let [enemyIndex, selectedEnemyCombatant] = selectedEnemy();
			const enemyCombatants = getEnemyCombatants(tostring(Players.LocalPlayer.UserId), enemyIndex);

			if (++selectedEnemyCombatant < enemyCombatants.size()) {
				selectedEnemy([enemyIndex, selectedEnemyCombatant]);
			}
		} else {
			if (++combatant < combatants.size()) {
				selectedCombatant(combatant);
			}
		}
	},
};
