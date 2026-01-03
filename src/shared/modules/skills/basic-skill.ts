import { RunService } from "@rbxts/services";
import { CombatantList } from "shared/modules/combatant-list";
import { Skill } from "shared/models/skills";
import { playersAtom } from "shared/atoms/players";
import { battlesAtom, takeCombatantDamage } from "shared/atoms/battles";
import { $print } from "rbxts-transform-debug";

export class BasicSkill extends Skill {
	public constructor(protected readonly caster: keyof CombatantList) {
		super("Basic", {
			quantifier: 10,
			coins: 1,
			description: "placeholder",
			// FIXME: Add an Animation here
			animation: undefined!,
		});
	}

	public override cast(casterId: string, targetId: string, combatant: number) {
		const battleId = playersAtom()[casterId].battleId;

		assert(battleId, `Expected battleId to be defined in player ${casterId}`);

		if (casterId === targetId) {
			return false;
		}

		if (RunService.IsServer()) {
			battlesAtom((state) =>
				takeCombatantDamage(state, battleId, targetId, combatant, this.properties.quantifier),
			);

			$print(`Damaged ${targetId} combatant ${combatant}`);
		} else {
			// VFX here
		}

		return true;
	}
}
