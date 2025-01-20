import { createProducer } from "@rbxts/reflex";
import { Teams } from "shared/models/battle";
import { Region } from "shared/modules/globals";

interface BattleInfo {
	readonly turn: number;
	readonly region: Region;

	readonly teams: {
		readonly [teamName in Teams]: ReadonlySet<string>;
	};
	readonly spectators: ReadonlySet<string>;
}

interface BattlesState {
	readonly [id: string]: BattleInfo;
}

const initialState: BattlesState = {};

export const battlesSlice = createProducer(initialState, {
	addBattle: (state, id: string, region: BattleInfo["region"]) => ({
		...state,
		[id]: { turn: 0, region, teams: {} as BattleInfo["teams"], spectators: new Set() },
	}),

	nextBattleTurn: (state, id: string) => {
		const { turn, teams } = state[id];

		return { ...state, [id]: { ...state[id], turn: turn + 1, teams: { ...teams } } };
	},

	addBattleTeam: (state, id: string, teamName: Teams, team: ReadonlySet<string>) => ({
		...state,
		[id]: { ...state[id], teams: { ...state[id].teams, [teamName]: team } },
	}),

	removeBattle: (state, id: string) => {
		const battles = { ...state };

		delete battles[id];

		return battles;
	},
});
