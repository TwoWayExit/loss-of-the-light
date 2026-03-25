import { RunService } from "@rbxts/services";
import { CombatantList } from "shared/modules/combatant-list";
import { Skill, SkillProperties } from "shared/models/skills";
import { playersAtom } from "shared/atoms/players";
import { takeCombatantDamage } from "shared/atoms/battles";
import { $print } from "rbxts-transform-debug";
import assetInstances from "shared/asset-instances";

export class BasicSkill implements Skill {
	public readonly name: string;
	public readonly properties: SkillProperties;

	public constructor(protected readonly caster: keyof CombatantList) {
		this.name = "basic";
		this.properties = {
			quantifier: 10,
			coins: 1,
			description: "placeholder",
			animation: assetInstances.animations[`${caster}/basic`],
		};
	}

	public async cast(casterId: string, targetId: string, combatant: number) {
		const battleId = playersAtom()[casterId].battleId;

		assert(battleId, `Expected battleId to be defined in player ${casterId}`);

		if (casterId === targetId) {
			return false;
		}

		if (RunService.IsServer()) {
			// TODO: Implement animation timings using Promise.delay()
			takeCombatantDamage(battleId, targetId, combatant, this.properties.quantifier);

			$print(`Damaged ${targetId} combatant ${combatant}`);
		} else {
			// TODO: Implement animation playing (and timings)
			// VFX here
		}

		return true;
	}
}
