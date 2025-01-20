import { RunService } from "@rbxts/services";
import { CombatantList } from "server/models/combatant";
import { LotlPlayer } from "shared/models/lotl_player";
import { Skill } from "shared/utils/skills";

export class BasicSkill extends Skill {
	public constructor(protected readonly caster: keyof CombatantList) {
		super("Basic", {
			damage: 10,
		});
	}

	public override cast(caster: LotlPlayer, target: LotlPlayer, combatant: keyof CombatantList) {
		if (caster === target) {
			return false;
		}

		if (RunService.IsServer()) {
			import("server/producer").now().then(({ producer }) => {
				producer.takeCombatantDamage(target.id, combatant, this.properties.damage);
			});
		} else {
			// VFX here
		}

		return true;
	}
}
