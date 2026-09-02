import { Players } from "@rbxts/services";
import { Command } from "@twowayexit/dev-con";
import { currentMenu, Menu } from "client/atoms/combat-ui";
import { selectedCombatant, selectedEnemy, selectedSkill } from "client/atoms/battle";
import { Events } from "client/network";
import { battlesAtom, getPlayerTeam } from "shared/atoms/battles";
import { playersAtom } from "shared/atoms/players";
import { getOpposingTeam } from "shared/lib/util";

export const confirm: Command = {
	execute: () => {
		const battleId = playersAtom()[tostring(Players.LocalPlayer.UserId)].battleId;

		if (battleId === undefined) {
			return;
		}

		const skillIndex = selectedSkill();

		if (skillIndex === -1) {
			return;
		}

		currentMenu(Menu.MAIN);

		const [enemyIndex, combatantIndex] = selectedEnemy();
		const team = getPlayerTeam(tostring(Players.LocalPlayer.UserId));
		const enemyTeam = getOpposingTeam(team);
		const enemyId = battlesAtom()[battleId].teams[enemyTeam][enemyIndex];

		// selectedCombatant will never be -1 if the player is in battle, there's no need to check
		Events.lotl.queueSkill(skillIndex, enemyId, selectedCombatant(), combatantIndex);

		selectedEnemy([-1, -1]);
		selectedSkill(-1);
	},
};
