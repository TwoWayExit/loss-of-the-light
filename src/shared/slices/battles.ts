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
	readonly [id: string]: BattleInfo;
}

const initialState: BattlesState = {};

export const battlesSlice = createProducer(initialState, {
	addBattle: (state, id: string) => ({
		...state,
		[id]: { turn: 0, origin: CFrame.identity, teams: {} as BattleInfo["teams"] },
	}),

	nextBattleTurn: (state, id: string) => {
		const { turn, origin, teams } = state[id];

		return { ...state, [id]: { turn: turn + 1, origin, teams: { ...teams } } };
	},

	setBattleOrigin: (state, id: string, origin: CFrame) => ({
		...state,
		[id]: { turn: state[id].turn, origin, teams: { ...state[id].teams } },
	}),

	addBattleTeam: (state, id: string, teamName: Teams, team: ReadonlySet<string>) => {
		const { turn, origin, teams } = state[id];

		return { ...state, [id]: { turn, origin, teams: { ...teams, [teamName]: team } } };
	},

	removeBattle: (state, id: string) => {
		const battles = { ...state };

		delete battles[id];

		return battles;
	},
});
