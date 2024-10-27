import { Controller, OnInit } from "@flamework/core";
import { Events } from "client/network";
import { producer } from "client/producer";
import { LotlPlayer } from "shared/models/lotl_player";
import { Skillset } from "shared/utils/skills";

@Controller({})
export class CastSkillVfx implements OnInit {
	onInit() {
		Events.lotl.castSkillVFX.connect((skill, casterId, targetId) => {
			const caster = LotlPlayer.getPlayerFromId(casterId);
			const target = LotlPlayer.getPlayerFromId(targetId);

			assert(caster);
			assert(target);

			const combatant = producer.getState((state) => state.players[casterId].activeCombatant);

			if (!combatant) {
				return;
			}

			Skillset.getSkillset(combatant).skills[skill].cast(caster, target);
		});
	}
}
