import { createProducer } from "@rbxts/reflex";
import { Teams } from "shared/models/battle";
import { Region } from "shared/modules/globals";
import { produce } from "@rbxts/better-immut";

interface BattleInfo {
	readonly turn: number;
	readonly region: Region;

	readonly teams: {
		readonly [teamName in Teams]: Set<string>;
	};
	readonly spectators: Set<string>;
}

interface BattlesState {
	readonly [id: string]: BattleInfo;
}

const initialState: BattlesState = {};

export const battlesSlice = createProducer(initialState, {
	addBattle: (state, id: string, region: BattleInfo["region"]) =>
		produce(state, (draft) => {
			draft[id] = { turn: 0, region, teams: {} as BattleInfo["teams"], spectators: new Set() };
		}),

	nextBattleTurn: (state, id: string) =>
		produce(state, (draft) => {
			draft[id].turn++;
		}),

	addBattleTeam: (state, id: string, teamName: Teams, team: Set<string>) =>
		produce(state, (draft) => {
			draft[id].teams[teamName] = team;
		}),

	removeBattle: (state, id: string) =>
		produce(state, (draft) => {
			delete draft[id];
		}),
});
