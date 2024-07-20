import { createProducer } from "@rbxts/reflex";
import { Teams } from "shared/models/battle";

interface BattleInfo {
	readonly turn: number;
	readonly origin: CFrame;

	readonly teams: {
		readonly [teamName in Teams]: ReadonlySet<string>;
	};
}

interface BattlesState {
	readonly battles: {
		readonly [id: string]: BattleInfo;
	};
}

const initialState: BattlesState = {
	battles: {},
};

export const battlesSlice = createProducer(initialState, {
	addBattle: (state, id: string) => ({
		...state,
		battles: { ...state.battles, [id]: { turn: 0, origin: CFrame.identity, teams: {} as BattleInfo["teams"] } },
	}),

	nextBattleTurn: (state, id: string) => {
		const { turn, origin, teams } = state.battles[id];

		return {
			...state,
			battles: { ...state.battles, [id]: { turn: turn + 1, origin, teams: { ...teams } } },
		};
	},

	setBattleOrigin: (state, id: string, origin: CFrame) => ({
		...state,
		battles: {
			...state.battles,
			[id]: { turn: state.battles[id].turn, origin, teams: { ...state.battles[id].teams } },
		},
	}),

	addBattleTeam: (state, id: string, teamName: Teams, team: ReadonlySet<string>) => {
		const { turn, origin, teams } = state.battles[id];

		return {
			...state,
			battles: { ...state.battles, [id]: { turn, origin, teams: { ...teams, [teamName]: team } } },
		};
	},

	removeBattle: (state, id: string) => {
		const battles = { ...state.battles };

		delete battles[id];

		return {
			...state,
			battles,
		};
	},
});
