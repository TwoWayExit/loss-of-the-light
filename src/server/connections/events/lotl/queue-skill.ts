import { Service, OnInit } from "@flamework/core";
import { Events } from "server/network";
import { playersAtom } from "shared/atoms/players";
import { BasePlayer } from "shared/models/player";
import { Skillset } from "shared/models/skills";
import { insert, produce, remove } from "@rbxts/better-immut";
import { battlesAtom } from "shared/atoms/battles";
import { batch } from "@rbxts/charm";

@Service({})
export class CastSkill implements OnInit {
	onInit() {
		Events.lotl.queueSkill.connect(async (player, skill, targetId, casterCombatant, targetCombatant) => {
			const battleId = playersAtom()[tostring(player.UserId)].battleId;

			if (battleId === undefined) {
				return;
			}

			if (battlesAtom()[battleId].playerInfo[tostring(player.UserId)].turnFinished) {
				return;
			}

			const target = BasePlayer.getPlayerFromId(targetId);

			if (!target) {
				return;
			}

			const casterCombatants = playersAtom()[tostring(player.UserId)].combatants;

			if (!casterCombatants[casterCombatant]) {
				return;
			}

			const targetCombatants = playersAtom()[targetId].combatants;

			if (!targetCombatants[targetCombatant]) {
				return;
			}

			const skillset = Skillset.getSkillset(casterCombatants[casterCombatant].character.Name);

			if (!skillset.skills[skill]) {
				return;
			}

			const existingIndex = battlesAtom()[battleId].skillsCasted.findIndex(
				(info) => info.casterCombatant === casterCombatant && info.casterPlayer === tostring(player.UserId),
			);

			batch(() => {
				// If the combatant already casted a skill, assume that we want to delete it
				if (existingIndex !== -1) {
					battlesAtom((state) =>
						produce(state, (draft) => {
							remove(draft[battleId].skillsCasted, existingIndex);
						}),
					);
				}

				battlesAtom((state) =>
					produce(state, (draft) => {
						insert(draft[battleId].skillsCasted, {
							skill,
							casterPlayer: tostring(player.UserId),
							targetPlayer: targetId,
							casterCombatant,
							targetCombatant,
						});
					}),
				);
			});
		});
	}
}
