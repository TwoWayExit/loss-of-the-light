import { insert, produce, remove } from "@rbxts/better-immut";
import { atom } from "@rbxts/charm";
import type { CombatantInfo, CombatantList } from "server/models/combatant";
import { Region } from "shared/modules/global-types";

export const enum LotlPlayerStatus {
	IDLE,
	IN_BATTLE,
}

export interface PlayerInfo {
	readonly battleId?: string;

	readonly combatants: CombatantInfo[];

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

export const addCombatant = (state: PlayersState, playerId: string, info: CombatantInfo) =>
	produce(state, (draft) => {
		insert(draft[playerId].combatants, info);
	});

export const takeCombatantDamage = (state: PlayersState, playerId: string, index: number, damage: number) =>
	produce(state, (draft) => {
		draft[playerId].combatants[index].health -= damage;
	});

export const reorderCombatant = (
	state: PlayersState,
	playerId: string,
	combatant: keyof CombatantList,
	orderIndex: number,
) =>
	produce(state, (draft) => {
		const { combatants } = draft[playerId];
		const info = remove(
			combatants,
			combatants.findIndex((c) => c.character.Name === combatant),
		);

		assert(info, `Combatant ${combatant} not found in player ${playerId}`);

		insert(combatants, orderIndex, info);
	});

export const removeCombatant = (state: PlayersState, playerId: string, combatant: keyof CombatantList) =>
	produce(state, (draft) => {
		const { combatants } = draft[playerId];
		const index = combatants.findIndex((c) => c.character.Name === combatant);

		remove(combatants, index);
	});
