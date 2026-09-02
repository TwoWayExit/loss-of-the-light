import { Players } from "@rbxts/services";
import { Command } from "@twowayexit/dev-con";
import { selectedCombatant, selectedEnemy, selectedSkill } from "client/atoms/battle";
import { playersAtom } from "shared/atoms/players";

export const switch_left: Command = {
	execute: () => {
		const { battleId } = playersAtom()[tostring(Players.LocalPlayer.UserId)];
		let combatant = selectedCombatant();

		if (battleId === undefined) {
			return;
		}

		// TODO: Make this account for dead combatants using the getNextLivingCombatant() function
		if (selectedSkill() !== -1) {
			let [enemyIndex, selectedEnemyCombatant] = selectedEnemy();

			if (--selectedEnemyCombatant >= 0) {
				selectedEnemy([enemyIndex, selectedEnemyCombatant]);
			}
		} else {
			if (--combatant >= 0) {
				selectedCombatant(combatant);
			}
		}
	},
};
