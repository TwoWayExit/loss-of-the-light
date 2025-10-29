import { CharacterRigR6 } from "@rbxts/promise-character";
import { Skillset } from "shared/utils/skills";
import { BaseCharacter } from "shared/models/character";
import { BasePlayer } from "shared/models/player";
import { producer } from "server/producer";

export interface AnimatedCharacter extends CharacterRigR6 {
	anims: Folder & {
		idle: Animation;
	};
}

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

		for (const info of this.getCombatantInfos(player)) {
			const combatant = new Combatant(info.character);

			combatants.push(combatant);

			hasCombatants = true;
		}

		assert(hasCombatants, `Player ${player.getNickname()} does not have any combatants`);

		return combatants;
	}

	public static getCombatantInfos(player: BasePlayer) {
		return producer.getState((state) => state.players[player.id].combatants);
	}

	public static addCombatant(player: BasePlayer, info: CombatantInfo) {
		producer.addPlayerCombatant(player.id, info);
	}

	public static removeCombatant(player: BasePlayer, combatant: keyof CombatantList) {
		producer.removePlayerCombatant(player.id, combatant);
	}
}
