import { insert, produce, remove } from "@rbxts/better-immut";
import { atom } from "@rbxts/charm";
import type { CombatantInfo, CombatantList } from "server/models/combatant";
import { Region } from "shared/modules/globals";

export const enum LotlPlayerStatus {
	IDLE,
	IN_BATTLE,
}

export interface PlayerInfo {
	readonly battleId?: string;

	readonly skillsCasted: Map<keyof CombatantList, string>;
	readonly combatants: CombatantInfo[];
	/** -1 if no combatant is selected */
	readonly selectedCombatant: number;
	readonly energy: Map<keyof CombatantList, number>;

	readonly region: Region;
	readonly status: LotlPlayerStatus;
}

interface PlayersState {
	readonly [playerId: string]: PlayerInfo;
}

const initialState: PlayersState = {};

export const playersAtom = atom(initialState);

export const createPlayer = (state: PlayersState, playerId: string) =>
	produce(state, (draft) => {
		draft[playerId] = {
			skillsCasted: new Map(),
			combatants: [],
			selectedCombatant: -1,
			energy: new Map(),
			region: "baseplate",
			status: LotlPlayerStatus.IDLE,
		};
	});

export const addCombatant = (state: PlayersState, playerId: string, info: CombatantInfo) =>
	produce(state, (draft) => {
		insert(draft[playerId].combatants, info);
	});

export const takeCombatantDamage = (
	state: PlayersState,
	playerId: string,
	combatant: keyof CombatantList,
	damage: number,
) =>
	produce(state, (draft) => {
		const index = state[playerId].combatants.findIndex((c) => c.character.Name === combatant);

		assert(state[playerId].combatants[index], `Combatant ${combatant} not found in player ${playerId}`);

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
