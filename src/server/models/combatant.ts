import { CharacterRigR6 } from "@rbxts/promise-character";
import { Skillset } from "shared/models/skills";
import { BaseCharacter } from "shared/models/character";
import { BasePlayer } from "shared/models/player";
import { playersAtom } from "shared/atoms/players";

export interface AnimatedCharacter extends CharacterRigR6 {
	anims: Folder & {
		idle: Animation;
	};
}

/** Name can be accessed through `character.Name` */
export interface CombatantInfo {
	/** A clone of the original character rig for this combatant, used in battle */
	readonly character: AnimatedCharacter;

	readonly health: number;
}

export type CombatantList = Omit<ReplicatedStorage["combatants"], keyof Folder>;

export class Combatant extends BaseCharacter<undefined> {
	public readonly skillset: Skillset;

	protected constructor(character: Model) {
		super(character);

		this.skillset = Skillset.getSkillset(character.Name);
	}

	public static createCombatants(player: BasePlayer) {
		const combatants: Combatant[] = [];

		let hasCombatants = false;

		for (const info of playersAtom()[player.id].combatants) {
			const combatant = new Combatant(info.character);

			combatants.push(combatant);

			hasCombatants = true;
		}

		assert(hasCombatants, `Player ${player.getNickname()} does not have any combatants`);

		return combatants;
	}

	public override destroy() {
		this.destroying.Fire();

		this.janitor.Destroy();
	}
}
