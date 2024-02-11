import { LotlPlayer } from "shared/models/lotl_player";

export class Skillset<T extends Record<string, Skill>> {
	protected static skillsets = new Map<string, Skillset<Record<string, Skill>>>();

	public constructor(
		public readonly name: string,
		protected skills: T,
	) {
		Skillset.skillsets.set(name, this);
	}

	public static getSkillset(name: string) {
		const result = Skillset.skillsets.get(name);

		assert(result, "Could not find a skillset with the associated name");

		return result;
	}
}

export abstract class Skill {
	/** @virtual */
	public constructor(public readonly name: string) {}

	/** @virtual */
	public cast(target: LotlPlayer) {
		warn(`[WARN] Skill cast unimplemented, target ${target}`);
	}
}
