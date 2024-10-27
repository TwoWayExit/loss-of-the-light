import { createProducer } from "@rbxts/reflex";
import type { CombatantInfo, CombatantList } from "server/models/combatant";

export interface PlayerInfo {
	/** Most recent skill casted */
	readonly skillCasted?: string;

	/** Combatant selected during battle */
	readonly activeCombatant?: keyof CombatantList;

	readonly combatants: {
		readonly [combatant in keyof CombatantList]?: CombatantInfo;
	};

	/** Synchronized with `combatants` to simply show order, hacky way to do an "ordered map/record" in Luau */
	readonly combatantsOrder: (keyof CombatantList)[];
}

interface PlayersState {
	readonly [id: string]: PlayerInfo;
}

const initialState: PlayersState = {};

export const playersSlice = createProducer(initialState, {
	addPlayer: (state, id: string) => ({ ...state, [id]: { combatants: {}, combatantsOrder: [] } }),

	removePlayer: (state, id: string) => {
		const players = { ...state };

		delete players[id];

		return players;
	},

	addPlayerCombatant: (state, id: string, combatant: keyof CombatantList, info: CombatantInfo) => {
		const { combatants, combatantsOrder: order } = state[id];
		const combatantsOrder = [...order];

		combatantsOrder.push(combatant);

		return {
			...state,
			[id]: { combatants: { ...combatants, [combatant]: info }, combatantsOrder },
		};
	},

	setCombatantHealth: (state, id: string, combatant: keyof CombatantList, health: number) => {
		const { combatants, combatantsOrder } = state[id];
		const info = combatants[combatant];

		assert(info, `Combatant ${combatant} not found in player ${id}`);

		return {
			...state,
			[id]: { combatants: { ...combatants, [combatant]: { ...info, health } }, combatantsOrder },
		};
	},

	takeCombatantDamage: (state, id: string, combatant: keyof CombatantList, damage: number) => {
		const { combatants, combatantsOrder } = state[id];
		const info = combatants[combatant];

		assert(info, `Combatant ${combatant} not found in player ${id}`);

		return {
			...state,
			[id]: {
				combatants: { ...combatants, [combatant]: { ...info, health: info.health - damage } },
				combatantsOrder,
			},
		};
	},

	setPlayerSkillCasted: (state, id: string, skillCasted?: string) => ({
		...state,
		[id]: {
			...state[id],
			skillCasted,
		},
	}),

	setPlayerActiveCombatant: (state, id: string, activeCombatant?: keyof CombatantList) => {
		if (activeCombatant) {
			assert(activeCombatant in state[id].combatants, `Combatant ${activeCombatant} not found in player ${id}`);
		}

		return {
			...state,
			[id]: {
				...state[id],
				activeCombatant,
			},
		};
	},

	reorderPlayerCombatant: (state, id: string, combatant: keyof CombatantList, orderIndex: number) => {
		const { combatants, combatantsOrder: order } = state[id];
		const combatantsOrder = [...order];

		combatantsOrder.remove(combatantsOrder.indexOf(combatant));
		combatantsOrder.insert(orderIndex, combatant);

		return {
			...state,
			[id]: { combatants, combatantsOrder },
		};
	},

	removePlayerCombatant: (state, id: string, combatant: keyof CombatantList) => {
		const combatants = { ...state[id].combatants };
		const combatantsOrder = [...state[id].combatantsOrder];

		delete combatants[combatant];

		combatantsOrder.remove(combatantsOrder.indexOf(combatant));

		return { ...state, [id]: { combatants, combatantsOrder } };
	},
});
