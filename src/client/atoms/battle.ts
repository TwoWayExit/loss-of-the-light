import { atom } from "@rbxts/charm";

/** -1 if no combatant is selected */
export const selectedCombatant = atom(-1);
/** -1 if no skill is selected */
export const selectedSkill = atom(-1);
/** -1 if no combatant is selected */
export const selectedEnemy = atom<[enemyIndex: number, combatantIndex: number]>([-1, -1]);
