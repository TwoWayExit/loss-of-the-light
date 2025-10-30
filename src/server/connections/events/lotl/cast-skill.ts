import { Service, OnInit } from "@flamework/core";
import { Events } from "server/network";
import { playersAtom } from "shared/atoms/players";
import { LotlClient } from "shared/models/lotl_client";
import { BasePlayer } from "shared/models/player";
import { Skillset } from "shared/utils/skills";
import { produce } from "@rbxts/better-immut";

@Service({})
export class CastSkill implements OnInit {
	onInit() {
		Events.lotl.castSkill.connect(async (localPlayer, skill, targetId, casterCombatant, targetCombatant) => {
			const player = LotlClient.getPlayerFromLocalPlayer(localPlayer)!;

			const battleId = playersAtom()[player.id].battleId;

			if (battleId === undefined) {
				return;
			}

			const target = BasePlayer.getPlayerFromId(targetId);

			if (!target) {
				return;
			}

			const casterCombatants = playersAtom()[player.id].combatants;

			if (!(casterCombatant in casterCombatants)) {
				return;
			}

			const targetCombatants = playersAtom()[targetId].combatants;

			if (!(targetCombatant in targetCombatants)) {
				return;
			}

			// If the combatant already casted a skill
			if (playersAtom()[player.id].skillsCasted.has(targetCombatant)) {
				return;
			}

			const skillset = Skillset.getSkillset(casterCombatant);

			if (!skillset.skills[skill]) {
				return;
			}

			const success = skillset.skills[skill].cast(player, target, targetCombatant);

			if (!success) {
				return;
			}

			playersAtom((state) =>
				produce(state, (draft) => {
					draft[player.id].skillsCasted.set(casterCombatant, skill);
				}),
			);
		});
	}
}
