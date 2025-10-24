import { Controller, OnInit } from "@flamework/core";
import { Events } from "client/network";
import { BasePlayer } from "shared/models/player";
import { Skillset } from "shared/utils/skills";

@Controller({})
export class CastSkillVfx implements OnInit {
	onInit() {
		Events.lotl.castSkillVFX.connect((skill, casterId, targetId, casterCombatant, targetCombatant) => {
			const caster = BasePlayer.getPlayerFromId(casterId);
			const target = BasePlayer.getPlayerFromId(targetId);

			assert(caster);
			assert(target);

			Skillset.getSkillset(casterCombatant).skills[skill].cast(caster, target, targetCombatant);
		});
	}
}
