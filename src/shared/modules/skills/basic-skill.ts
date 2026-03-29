import { RunService } from "@rbxts/services";
import { CombatantList } from "shared/modules/combatant-list";
import { Skill, SkillProperties } from "shared/models/skills";
import { playersAtom } from "shared/atoms/players";
import { battlesAtom } from "shared/atoms/battles";
import { takeCombatantDamage } from "shared/atoms/battles";
import { $print } from "rbxts-transform-debug";
import assetInstances from "shared/asset-instances";
import { $NODE_ENV } from "rbxts-transform-env";
import { getAnimationLength } from "shared/lib/util";
import { produce } from "@rbxts/better-immut";

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
			const { animationHandler } = battlesAtom()[battleId].playerInfo[casterId].combatants[casterCombatant];
			// We want to store the original health to prevent desynchronization when rehydrating information from the server
			// This desynchronization exists when the server is able to update the health before the client reads it, thus we read it now to ensure this never happens
			const combatantHealth = battlesAtom()[battleId].playerInfo[targetId].combatants[targetCombatant].health;

			return animationHandler
				.playAnimation(this.properties.animation)
				.then((attackAnim) => {
					return Promise.delay(attackAnim.Length);
				})
				.then(() => {
					battlesAtom((state) =>
						produce(state, (draft) => {
							draft[battleId].playerInfo[targetId].combatants[targetCombatant].health =
								combatantHealth - this.properties.quantifier;
						}),
					);

					if ($NODE_ENV === "development") {
						$print(
							`Locally damaged ${targetId} combatant ${targetCombatant} for ${this.properties.quantifier}`,
						);
					}

					return true;
				});
		}
	}
}
