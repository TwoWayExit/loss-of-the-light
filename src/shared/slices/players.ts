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
	readonly players: {
		readonly [id: string]: PlayerInfo;
	};
}

const initialState: PlayersState = {
	players: {},
};

export const playersSlice = createProducer(initialState, {
	addPlayer: (state, id: string) => ({
		...state,
		players: { ...state.players, [id]: { combatants: {}, combatantsOrder: [] } },
	}),

	removePlayer: (state, id: string) => {
		const players = { ...state.players };

		delete players[id];

		return {
			...state,
			players,
		};
	},

	addPlayerCombatant: (state, id: string, combatant: keyof CombatantList, info: CombatantInfo) => {
		const { combatants, combatantsOrder: order } = state.players[id];
		const combatantsOrder = [...order];

		combatantsOrder.push(combatant);

		return {
			...state,
			players: {
				...state.players,
				[id]: { combatants: { ...combatants, [combatant]: info }, combatantsOrder },
			},
		};
	},

	setCombatantHealth: (state, id: string, combatant: keyof CombatantList, health: number) => {
		const { combatants, combatantsOrder } = state.players[id];
		const info = combatants[combatant];

		assert(info, `Combatant ${combatant} not found in player ${id}`);

		return {
			...state,
			players: {
				...state.players,
				[id]: { combatants: { ...combatants, [combatant]: { ...info, health } }, combatantsOrder },
			},
		};
	},

	takeCombatantDamage: (state, id: string, combatant: keyof CombatantList, damage: number) => {
		const { combatants, combatantsOrder } = state.players[id];
		const info = combatants[combatant];

		assert(info, `Combatant ${combatant} not found in player ${id}`);

		return {
			...state,
			players: {
				...state.players,
				[id]: {
					combatants: { ...combatants, [combatant]: { ...info, health: info.health - damage } },
					combatantsOrder,
				},
			},
		};
	},

	setPlayerSkillCasted: (state, id: string, skillCasted?: string) => ({
		...state,
		players: {
			...state.players,
			[id]: {
				...state.players[id],
				skillCasted,
			},
		},
	}),

	setPlayerActiveCombatant: (state, id: string, activeCombatant?: keyof CombatantList) => {
		if (activeCombatant) {
			assert(
				activeCombatant in state.players[id].combatants,
				`Combatant ${activeCombatant} not found in player ${id}`,
			);
		}

		return {
			...state,
			players: {
				...state.players,
				[id]: {
					...state.players[id],
					activeCombatant,
				},
			},
		};
	},

	reorderPlayerCombatant: (state, id: string, combatant: keyof CombatantList, orderIndex: number) => {
		const { combatants, combatantsOrder: order } = state.players[id];
		const combatantsOrder = [...order];

		combatantsOrder.remove(combatantsOrder.indexOf(combatant));
		combatantsOrder.insert(orderIndex, combatant);

		return {
			...state,
			players: {
				...state.players,
				[id]: { combatants, combatantsOrder },
			},
		};
	},

	removePlayerCombatant: (state, id: string, combatant: keyof CombatantList) => {
		const combatants = { ...state.players[id].combatants };
		const combatantsOrder = [...state.players[id].combatantsOrder];

		delete combatants[combatant];

		combatantsOrder.remove(combatantsOrder.indexOf(combatant));

		return {
			...state,
			players: { ...state.players, [id]: { combatants, combatantsOrder } },
		};
	},
});
