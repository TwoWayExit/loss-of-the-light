import type { CombatantInfo } from "server/models/combatant";

type ReadonlyRecord<K extends string | number | symbol, T> = { readonly [P in K]: T };

export class Skillset<T extends ReadonlyRecord<string, Skill> = ReadonlyRecord<string, Skill>> {
	protected static skillsets = new Map<string, Skillset>();

	public constructor(
		public readonly name: string,
		public readonly skills: T,
	) {
		Skillset.skillsets.set(name, this);
	}

	public static getSkillset(name: string) {
		const result = Skillset.skillsets.get(name);

		assert(result, `Could not find a skillset with name '${name}'`);

		return result;
	}
}

export abstract class Skill {
	/** @virtual */
	public constructor(public readonly name: string) {}

	/** @virtual */
	public cast(target: CombatantInfo) {
		warn(`[WARN] Skill cast unimplemented, target ${target}`);
	}
}
