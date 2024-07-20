import { createProducer } from "@rbxts/reflex";
import type { CombatantInfo, CombatantList } from "server/models/combatant";

interface PlayerInfo {
	readonly skillCasted?: string;

	readonly combatants: {
		readonly [combatant in keyof CombatantList]?: CombatantInfo;
	};
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
		players: { ...state.players, [id]: { combatants: {} as PlayerInfo["combatants"] } },
	}),

	removePlayer: (state, id: string) => {
		const players = { ...state.players };

		delete players[id];

		return {
			...state,
			players,
		};
	},

	addPlayerCombatant: (state, id: string, combatant: keyof CombatantList, info: CombatantInfo) => ({
		...state,
		players: { ...state.players, [id]: { combatants: { ...state.players[id].combatants, [combatant]: info } } },
	}),

	setCombatantHealth: (state, id: string, combatant: keyof CombatantList, health: number) => {
		const { combatants } = state.players[id];
		const info = combatants[combatant];

		assert(info, `Combatant ${combatant} not found in player ${id}`);

		return {
			...state,
			players: {
				...state.players,
				[id]: { combatants: { ...combatants, [combatant]: { ...info, health } } },
			},
		};
	},

	setPlayerSkill: (state, id: string, skillCasted?: string) => ({
		...state,
		players: {
			...state.players,
			[id]: {
				...state.players[id],
				skillCasted,
			},
		},
	}),

	removePlayerCombatant: (state, id: string, combatant: keyof CombatantList) => {
		const combatants = { ...state.players[id].combatants };

		delete combatants[combatant];

		return {
			...state,
			players: { ...state.players, [id]: { combatants } },
		};
	},
});
