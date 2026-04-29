import { AnimationHandler } from "shared/models/animation-handler";
import type { AnimatedCharacter } from "shared/modules/global-types";

export interface CombatantInfo {
	/** This property should be equivalent to `character.Name` */
	readonly name: string;
	/**
	 * A clone of the original character rig for this combatant, used in battle
	 * @remarks This member is undefined on the server, since characters should only be rendered on the client
	 */
	readonly character: AnimatedCharacter;
	/**
	 * @remarks This member is undefined on the server, since characters should only be rendered on the client
	 */
	readonly animationHandler: AnimationHandler;

	readonly health: number;
	readonly energy: number;
}

export const enum ActionType {
	SINGLE,
	CLASH,
}

// TODO: Add coin flip results, generated on the server
/** Represents a server constructed object of an action plan array element */
export interface Action<T extends ActionType = ActionType> {
	type: T;
	cast: T extends ActionType.SINGLE ? SkillCast : [first: SkillCast, second: SkillCast];
}

/** A server parsed version of a `SkillCastQueue` to be shared with all clients within the battle, also being the final object to be processed on the server for skill casting */
export type ActionPlan = Action[];

export const enum BattlePhase {
	/** Players decide their skills to cast during this phase */
	DECIDE,
	/** Animations play and queued skills are casted during this phase */
	ACTION,
	/** Victory/defeat phase */
	FINISH,
}

export interface SkillCast {
	/** Skillset index */
	skill: number;
	/** Player ID */
	casterPlayer: string;
	/** Player ID */
	targetPlayer: string;
	/** playersAtom `combatants` array index */
	casterCombatant: number;
	/** playersAtom `combatants` array index */
	targetCombatant: number;
}

export type SkillCastQueue = SkillCast[];
