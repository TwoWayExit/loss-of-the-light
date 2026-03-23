import { insert, produce, remove } from "@rbxts/better-immut";
import { atom } from "@rbxts/charm";
import type { CombatantList } from "shared/modules/combatant-list";
import { Region } from "shared/modules/global-types";

export const enum PlayerStatus {
	IDLE,
	IN_BATTLE,
}

export const enum PlayerAuthorityFlag {
	PLAYER = 1 << 0,
	MODERATOR = 1 << 1,
}

export interface PlayerInfo {
	readonly battleId?: string;

	readonly combatants: (keyof CombatantList)[];

	readonly region: Region;
	readonly status: PlayerStatus;

	readonly authorityFlags: number;
}

interface PlayersState {
	readonly [playerId: string]: PlayerInfo;
}

const initialState: PlayersState = {};

export const playersAtom = atom(initialState);

export function isHighAuthority(playerId: string) {
	return playersAtom()[playerId].authorityFlags >= PlayerAuthorityFlag.MODERATOR;
}

export function createPlayer(playerId: string) {
	playersAtom((state) =>
		produce(state, (draft) => {
			draft[playerId] = {
				combatants: [],
				region: "baseplate",
				status: PlayerStatus.IDLE,
				authorityFlags: PlayerAuthorityFlag.PLAYER,
			};
		}),
	);
}

export function addCombatant(playerId: string, name: keyof CombatantList) {
	playersAtom((state) =>
		produce(state, (draft) => {
			insert(draft[playerId].combatants, name);
		}),
	);
}

export function reorderCombatant(playerId: string, combatant: keyof CombatantList, orderIndex: number) {
	playersAtom((state) =>
		produce(state, (draft) => {
			const { combatants } = draft[playerId];
			const info = remove(combatants, combatants.indexOf(combatant));

			assert(info, `Combatant ${combatant} not found in player ${playerId}`);

			insert(combatants, orderIndex, info);
		}),
	);
}

export function removeCombatant(playerId: string, combatant: keyof CombatantList) {
	playersAtom((state) =>
		produce(state, (draft) => {
			const { combatants } = draft[playerId];

			remove(combatants, combatants.indexOf(combatant));
		}),
	);
}
