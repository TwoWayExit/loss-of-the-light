export const enum ActionType {
	SINGLE,
	CLASH,
}

// TODO: Add coin flip results, generated on the server
/** Represents a server constructed object of an action plan element */
export interface Action<T extends ActionType = ActionType> {
	type: T;
	cast: T extends ActionType.SINGLE ? SkillCast : [first: SkillCast, second: SkillCast];
}

/** A server parsed version of a `SkillCastQueue` to be shared with all clients within the battle, also being the final object to be processed on the server for skill casting */
export type ActionPlan = Action[];

/** 2 phases for every turn, `DECIDE` when players are deciding on skills to cast, and `ACTION` when all skills are played out */
export const enum BattlePhase {
	DECIDE,
	ACTION,
}

export interface SkillCast {
	skill: number;
	casterPlayer: string;
	targetPlayer: string;
	casterCombatant: number;
	targetCombatant: number;
}

export type SkillCastQueue = SkillCast[];
