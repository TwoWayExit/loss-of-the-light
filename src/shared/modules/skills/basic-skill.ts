import { RunService } from "@rbxts/services";
import { CombatantList } from "shared/modules/combatant-list";
import { Skill, SkillProperties } from "shared/models/skills";
import { playersAtom } from "shared/atoms/players";
import { battlesAtom } from "shared/atoms/battles";
import { takeCombatantDamage } from "shared/atoms/battles";
import { $print } from "rbxts-transform-debug";
import assetInstances from "shared/asset-instances";
import { $NODE_ENV } from "rbxts-transform-env";
import { getAnimationLength, waitForAnimationLoaded } from "shared/lib/util";

export class BasicSkill implements Skill {
	public readonly name = "basic";
	public readonly properties: SkillProperties;

	public constructor(protected readonly caster: keyof CombatantList) {
		this.properties = {
			quantifier: 10,
			coins: 1,
			description: "placeholder",
			animation: assetInstances.animations[`${caster}/basic`],
		};
	}

	public async cast(casterId: string, casterCombatant: number, targetId: string, targetCombatant: number) {
		const battleId = playersAtom()[casterId].battleId;

		assert(battleId, `Expected battleId to be defined in player ${casterId}`);

		if (casterId === targetId) {
			return false;
		}

		if (RunService.IsServer()) {
			return getAnimationLength(this.properties.animation.AnimationId)
				.then((length) => Promise.delay(length))
				.then(() => {
					takeCombatantDamage(battleId, targetId, targetCombatant, this.properties.quantifier);

					if ($NODE_ENV === "development") {
						$print(`Damaged ${targetId} combatant ${targetCombatant} for ${this.properties.quantifier}`);
					}

					return true;
				});
		} else {
			// VFX here
			const { character } = battlesAtom()[battleId].playerInfo[casterId].combatants[casterCombatant];
			const { character: enemyCharacter } =
				battlesAtom()[battleId].playerInfo[targetId].combatants[targetCombatant];
			const attackAnim = character.Humanoid.Animator.LoadAnimation(this.properties.animation);
			const hurtAnim = enemyCharacter.Humanoid.Animator.LoadAnimation(
				assetInstances.animations[`${enemyCharacter.Name}/hurt`],
			);

			return waitForAnimationLoaded(attackAnim)
				.then(() => {
					attackAnim.Play();

					return Promise.delay(attackAnim.Length);
				})
				.then(() => {
					hurtAnim.Play();

					return true;
				});
		}
	}
}
