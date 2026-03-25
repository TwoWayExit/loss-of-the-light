import { CombatantList } from "shared/modules/combatant-list";

export class Skillset {
	protected static skillsets = new Map<string, Skillset>();

	public constructor(
		public readonly name: keyof CombatantList,
		public readonly skills: Skill[],
	) {
		Skillset.skillsets.set(name, this);
	}

	public static getSkillset(name: string) {
		const result = Skillset.skillsets.get(name);

		assert(result, `Could not find a skillset with name '${name}'`);

		return result;
	}
}

export interface SkillProperties {
	/** Damage/healing amount */
	readonly quantifier: number;
	readonly coins: number;
	readonly description: string;

	readonly animation: Animation;
}

export interface Skill {
	readonly name: string;
	readonly properties: SkillProperties;

	/**
	 * Overriden on the server for logic handling and animations; Overriden on the client for VFX/SFX excluding animations
	 * @remarks Animations must be handled on the server in order to determine how long it will take for all animations involved in the skill to complete
	 * @returns A success status boolean
	 * @virtual
	 */
	cast(casterId: string, targetId: string, combatant: number): boolean;
}
