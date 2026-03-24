import { Combatant } from "shared/models/combatant-builder";
import { maleMcCombatant } from "./combatants/malemc-combatant";

export type CombatantList = Omit<ReplicatedStorage["combatants"], keyof Folder>;

export default {
	malemc: maleMcCombatant,
} satisfies Record<keyof CombatantList, Combatant>;
