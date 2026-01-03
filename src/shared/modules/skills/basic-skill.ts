import { RunService } from "@rbxts/services";
import { CombatantList } from "shared/modules/combatant-list";
import { BasePlayer } from "shared/models/player";
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

	public override cast(caster: BasePlayer, target: BasePlayer, combatant: number) {
		const battleId = playersAtom()[caster.id].battleId;

		assert(battleId, `Expected battleId to be defined in player ${caster.getNickname()} (${caster.id})`);

		if (caster === target) {
			return false;
		}

		if (RunService.IsServer()) {
			battlesAtom((state) =>
				takeCombatantDamage(state, battleId, target.id, combatant, this.properties.quantifier),
			);

			$print(`Damaged ${target.id} combatant ${combatant}`);
		} else {
			// VFX here
		}

		return true;
	}
}
