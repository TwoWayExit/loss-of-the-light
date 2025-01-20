import { Controller, OnInit } from "@flamework/core";
import { Events } from "client/network";
import { LotlPlayer } from "shared/models/lotl_player";
import { Skillset } from "shared/utils/skills";

@Controller({})
export class CastSkillVfx implements OnInit {
	onInit() {
		Events.lotl.castSkillVFX.connect((skill, casterId, targetId, casterCombatant, targetCombatant) => {
			const caster = LotlPlayer.getPlayerFromId(casterId);
			const target = LotlPlayer.getPlayerFromId(targetId);

			assert(caster);
			assert(target);

			Skillset.getSkillset(casterCombatant).skills[skill].cast(caster, target, targetCombatant);
		});
	}
}
