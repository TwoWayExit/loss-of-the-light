import type { CombatantList } from "server/models/combatant";

export interface LotlServerEvents {
	castSkill: (
		skill: string,
		targetId: string,
		casterCombatant: keyof CombatantList,
		targetCombatant: keyof CombatantList,
	) => void;
}

export interface LotlClientEvents {
	castSkillVFX: (
		skill: string,
		casterId: string,
		targetId: string,
		casterCombatant: keyof CombatantList,
		targetCombatant: keyof CombatantList,
	) => void;
}

export interface LotlServerFunctions {}

export interface LotlClientFunctions {}
