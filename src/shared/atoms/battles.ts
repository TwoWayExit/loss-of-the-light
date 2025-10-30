import { Teams } from "shared/models/battle";
import { Region } from "shared/modules/globals";
import { produce } from "@rbxts/better-immut";
import { atom } from "@rbxts/charm";

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

export const battlesAtom = atom(initialState);

export const createBattle = (state: BattlesState, id: string, region: BattleInfo["region"]) =>
	produce(state, (draft) => {
		draft[id] = { turn: 0, region, teams: {} as BattleInfo["teams"], spectators: new Set() };
	});

export const removeBattle = (state: BattlesState, id: string) =>
	produce(state, (draft) => {
		delete draft[id];
	});
