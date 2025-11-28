import { RunService } from "@rbxts/services";
import { CombatantList } from "server/models/combatant";
import { BasePlayer } from "shared/models/player";
import { Skill } from "shared/models/skills";
import { playersAtom, takeCombatantDamage } from "shared/atoms/players";
import { $print } from "rbxts-transform-debug";

export class BasicSkill extends Skill {
	public constructor(protected readonly caster: keyof CombatantList) {
		super("Basic", {
			quantifier: 10,
			coins: 1,
			description: "placeholder",
		});
	}

	public override cast(caster: BasePlayer, target: BasePlayer, combatant: number) {
		if (caster === target) {
			return false;
		}

		if (RunService.IsServer()) {
			playersAtom((state) => takeCombatantDamage(state, target.id, combatant, this.properties.quantifier));

			$print(`Damaged ${target.id} combatant ${combatant}`);
		} else {
			// VFX here
		}

		return true;
	}
}
