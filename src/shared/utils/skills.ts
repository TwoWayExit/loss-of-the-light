import { CombatantList } from "server/models/combatant";
import { BasePlayer } from "shared/models/player";

type ReadonlyRecord<K extends string | number | symbol, T> = { readonly [P in K]: T };

export class Skillset {
	protected static skillsets = new Map<string, Skillset>();

	public constructor(
		public readonly name: string,
		public readonly skills: ReadonlyRecord<string, Skill>,
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
	readonly damage: number;
}

export abstract class Skill {
	/** @virtual */
	public constructor(
		public readonly name: string,
		public readonly properties: SkillProperties,
	) {}

	/**
	 * This method must be overriden on the server for logic handling, and on the client for VFX
	 * @returns A success status boolean
	 * @virtual
	 */
	public cast(caster: BasePlayer, target: BasePlayer, combatant: keyof CombatantList) {
		warn(`[WARN] Skill cast unimplemented, caster ${caster.id}, target ${target.id}, combatant ${combatant}`);

		return false;
	}
}
