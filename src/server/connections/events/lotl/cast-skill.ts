import { Service, OnInit } from "@flamework/core";
import { Events } from "server/network";
import { playersAtom } from "shared/atoms/players";
import { LotlClient } from "shared/models/lotl_client";
import { BasePlayer } from "shared/models/player";
import { Skillset } from "shared/models/skills";
import { insert, produce } from "@rbxts/better-immut";
import { battlesAtom } from "shared/atoms/battles";

@Service({})
export class CastSkill implements OnInit {
	onInit() {
		Events.lotl.castSkill.connect(async (rbxPlayer, skill, targetId, casterCombatant, targetCombatant) => {
			const player = LotlClient.getPlayerFromRbxPlayer(rbxPlayer)!;

			const battleId = playersAtom()[player.id].battleId;

			if (battleId === undefined) {
				return;
			}

			if (battlesAtom()[battleId].playerInfo[player.id].turnFinished) {
				return;
			}

			const target = BasePlayer.getPlayerFromId(targetId);

			if (!target) {
				return;
			}

			const casterCombatants = playersAtom()[player.id].combatants;

			if (!casterCombatants[casterCombatant]) {
				return;
			}

			const targetCombatants = playersAtom()[targetId].combatants;

			if (!targetCombatants[targetCombatant]) {
				return;
			}

			// If the combatant already casted a skill
			if (
				battlesAtom()[battleId].skillsCasted.find(
					(info) => info.casterCombatant === casterCombatant && info.casterPlayer === player.id,
				)
			) {
				return;
			}

			const skillset = Skillset.getSkillset(casterCombatants[casterCombatant].character.Name);

			if (!skillset.skills[skill]) {
				return;
			}

			const success = skillset.skills[skill].cast(player, target, targetCombatant);

			if (!success) {
				return;
			}

			battlesAtom((state) =>
				produce(state, (draft) => {
					insert(draft[battleId].skillsCasted, {
						skill,
						casterPlayer: player.id,
						targetPlayer: targetId,
						casterCombatant,
						targetCombatant,
					});
				}),
			);
		});
	}
}
