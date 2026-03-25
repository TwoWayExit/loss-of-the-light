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
	 * For server implementation, this method should be responsible for providing async delays for animation durations, and to lastly mutate state to rehydrate all clients via charm sync
	 * For client implementation, this method should be responsible for animation playing, VFX, SFX, and local (temporary) state changes
	 * This allows for more control over what specific skill casts should be capable of doing
	 * @returns A success status boolean
	 */
	cast(casterId: string, targetId: string, combatant: number): Promise<boolean>;
}
