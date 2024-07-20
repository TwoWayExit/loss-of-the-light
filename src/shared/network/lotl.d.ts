import type { CombatantList } from "server/models/combatant";

export interface LotlServerEvents {
	castSkill: (skill: string) => void;
	switchCombatant: (combatant: keyof CombatantList) => void;
}

export interface LotlClientEvents {
	castSkillVFX: (skill: string) => void;
}

export interface LotlServerFunctions {}

export interface LotlClientFunctions {}
