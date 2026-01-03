import { ActionPlan } from "shared/modules/battle-types";

export interface LotlServerEvents {
	queueSkill: (skill: number, targetId: string, casterCombatant: number, targetCombatant: number) => void;
	// TODO: This is marked for deletion if no use cases on the server are found
	selectCombatant: (selected: number) => void;
	finishTurn: () => void;
}

export interface LotlClientEvents {
	startAction: (actionPlan: ActionPlan) => void;
}

export interface LotlServerFunctions {}

export interface LotlClientFunctions {}
