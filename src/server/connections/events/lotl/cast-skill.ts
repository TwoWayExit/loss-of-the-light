import { Service, OnInit } from "@flamework/core";
import { ServerBattle } from "server/models/server-battle";
import { Events } from "server/network";
import { producer } from "server/producer";
import { LotlPlayer, LotlPlayerNetworked } from "shared/models/lotl_player";
import { Skillset } from "shared/utils/skills";

@Service({})
export class CastSkill implements OnInit {
	onInit() {
		Events.lotl.castSkill.connect((localPlayer, skill, targetId) => {
			const player = LotlPlayerNetworked.getPlayerFromLocalPlayer(localPlayer)!;
			const [inBattle, battleId] = ServerBattle.inBattle(player);

			if (!inBattle) {
				return;
			}

			const combatant = producer.getState((state) => state.players[player.id].activeCombatant);

			if (!combatant) {
				return;
			}

			const target = LotlPlayer.getPlayerFromId(targetId);

			if (!target) {
				return;
			}

			if (!ServerBattle.inBattle(target, battleId)[0]) {
				return;
			}

			// If the player already casted a skill
			if (producer.getState((state) => state.players[player.id].skillCasted)) {
				return;
			}

			Skillset.getSkillset(combatant).skills[skill].cast(player, target);

			producer.setPlayerSkillCasted(player.id, skill);
		});
	}
}
