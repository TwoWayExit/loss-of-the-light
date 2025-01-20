import { Service, OnInit } from "@flamework/core";
import { Events } from "server/network";
import { producer } from "server/producer";
import { LotlPlayer, LotlPlayerNetworked } from "shared/models/lotl_player";
import { Skillset } from "shared/utils/skills";

@Service({})
export class CastSkill implements OnInit {
	onInit() {
		Events.lotl.castSkill.connect(async (localPlayer, skill, targetId, casterCombatant, targetCombatant) => {
			const player = LotlPlayerNetworked.getPlayerFromLocalPlayer(localPlayer)!;

			const battleId = producer.getState((state) => state.players[player.id].battleId);

			if (battleId === undefined) {
				return;
			}

			const target = LotlPlayer.getPlayerFromId(targetId);

			if (!target) {
				return;
			}

			const casterCombatants = producer.getState((state) => state.players[player.id].combatants);

			if (!(casterCombatant in casterCombatants)) {
				return;
			}

			const targetCombatants = producer.getState((state) => state.players[player.id].combatants);

			if (!(targetCombatant in targetCombatants)) {
				return;
			}

			// If the combatant already casted a skill
			if (producer.getState((state) => state.players[player.id].skillsCasted.has(casterCombatant))) {
				return;
			}

			const success = await Skillset.getSkillset(casterCombatant).skills[skill].cast(
				player,
				target,
				targetCombatant,
			);

			if (!success) {
				return;
			}

			producer.castSkill(player.id, casterCombatant, skill);
		});
	}
}
