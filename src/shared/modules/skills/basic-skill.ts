import { RunService } from "@rbxts/services";
import { CombatantList } from "server/models/combatant";
import { BasePlayer } from "shared/models/player";
import { Skill } from "shared/utils/skills";
import { playersAtom, takeCombatantDamage } from "shared/atoms/players";

export class BasicSkill extends Skill {
	public constructor(protected readonly caster: keyof CombatantList) {
		super("Basic", {
			damage: 10,
		});
	}

	public override cast(caster: BasePlayer, target: BasePlayer, combatant: keyof CombatantList) {
		if (caster === target) {
			return false;
		}

		if (RunService.IsServer()) {
			playersAtom((state) => takeCombatantDamage(state, target.id, combatant, this.properties.damage));
		} else {
			// VFX here
		}

		return true;
	}
}
