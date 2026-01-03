import { insert, produce, remove } from "@rbxts/better-immut";
import { atom } from "@rbxts/charm";
import type { CombatantList } from "shared/modules/combatant-list";
import { Region } from "shared/modules/global-types";

export const enum LotlPlayerStatus {
	IDLE,
	IN_BATTLE,
}

export interface PlayerInfo {
	readonly battleId?: string;

	readonly combatants: (keyof CombatantList)[];

	readonly region: Region;
	readonly status: LotlPlayerStatus;
}

interface PlayersState {
	readonly [playerId: string]: PlayerInfo;
}

const initialState: PlayersState = {};

export const playersAtom = atom(initialState);

// TODO: Perhaps move these helper functions into a separate file
export const createPlayer = (state: PlayersState, playerId: string) =>
	produce(state, (draft) => {
		draft[playerId] = {
			combatants: [],
			region: "baseplate",
			status: LotlPlayerStatus.IDLE,
		};
	});

export const addCombatant = (state: PlayersState, playerId: string, name: keyof CombatantList) =>
	produce(state, (draft) => {
		insert(draft[playerId].combatants, name);
	});

export const reorderCombatant = (
	state: PlayersState,
	playerId: string,
	combatant: keyof CombatantList,
	orderIndex: number,
) =>
	produce(state, (draft) => {
		const { combatants } = draft[playerId];
		const info = remove(combatants, combatants.indexOf(combatant));

		assert(info, `Combatant ${combatant} not found in player ${playerId}`);

		insert(combatants, orderIndex, info);
	});

export const removeCombatant = (state: PlayersState, playerId: string, combatant: keyof CombatantList) =>
	produce(state, (draft) => {
		const { combatants } = draft[playerId];

		remove(combatants, combatants.indexOf(combatant));
	});
