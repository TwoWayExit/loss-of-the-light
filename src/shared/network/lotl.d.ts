import { Action, ActionPlan } from "shared/modules/battle-types";

export interface LotlServerEvents {
	// TODO: Use `SkillCast` instead
	castSkill: (skill: number, targetId: string, casterCombatant: number, targetCombatant: number) => void;
	selectCombatant: (selected: number) => void;
	finishTurn: () => void;
}

export interface LotlClientEvents {
	startAction: (actionPlan: ActionPlan) => void;
}

export interface LotlServerFunctions {}

export interface LotlClientFunctions {}
