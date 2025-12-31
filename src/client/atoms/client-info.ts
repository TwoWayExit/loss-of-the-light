import { atom } from "@rbxts/charm";

// NOTE: This should be renamed to selectedCombatant if the server-sided playersAtom member will no longer be used
/** Client-controlled value of the server-sided selectedCombatant playersAtom member -1 if no combatant is selected */
export const clSelectedCombatant = atom(-1);
/** -1 if no skill is selected */
export const selectedSkill = atom(-1);
/** -1 if no combatant is selected */
export const selectedEnemy = atom<[enemyIndex: number, combatantIndex: number]>([-1, -1]);
