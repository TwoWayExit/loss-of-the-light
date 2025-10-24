import { clear, insert, produce, remove } from "@rbxts/better-immut";
import { createProducer } from "@rbxts/reflex";
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
	readonly selectedCombatant: number;

	readonly region: Region;
	readonly status: LotlPlayerStatus;
}

interface PlayersState {
	readonly [id: string]: PlayerInfo;
}

const initialState: PlayersState = {};

export const playersSlice = createProducer(initialState, {
	addPlayer: (state, id: string) =>
		produce(state, (draft) => {
			draft[id] = {
				skillsCasted: new Map(),
				combatants: [],
				selectedCombatant: -1,
				region: "baseplate",
				status: LotlPlayerStatus.IDLE,
			};
		}),

	removePlayer: (state, id: string) =>
		produce(state, (draft) => {
			delete draft[id];
		}),

	addPlayerCombatant: (state, id: string, info: CombatantInfo) =>
		produce(state, (draft) => {
			insert(draft[id].combatants, info);
		}),

	setCombatantHealth: (state, id: string, combatant: keyof CombatantList, health: number) =>
		produce(state, (draft) => {
			const index = state[id].combatants.findIndex((c) => c.character.Name === combatant);

			assert(state[id].combatants[index], `Combatant ${combatant} not found in player ${id}`);

			draft[id].combatants[index].health = health;
		}),

	takeCombatantDamage: (state, id: string, combatant: keyof CombatantList, damage: number) =>
		produce(state, (draft) => {
			const index = state[id].combatants.findIndex((c) => c.character.Name === combatant);

			assert(state[id].combatants[index], `Combatant ${combatant} not found in player ${id}`);

			draft[id].combatants[index].health -= damage;
		}),

	setPlayerBattleId: (state, id: string, battleId?: string) =>
		produce(state, (draft) => {
			draft[id].battleId = battleId;
		}),

	castSkill: (state, id: string, combatant: keyof CombatantList, skill: string) =>
		produce(state, (draft) => {
			draft[id].skillsCasted.set(combatant, skill);
		}),

	clearSkillsCasted: (state, id: string) =>
		produce(state, (draft) => {
			clear(draft[id].skillsCasted);
		}),

	reorderPlayerCombatant: (state, id: string, combatant: keyof CombatantList, orderIndex: number) =>
		produce(state, (draft) => {
			const { combatants } = draft[id];
			const info = remove(
				combatants,
				combatants.findIndex((c) => c.character.Name === combatant),
			);

			assert(info, `Combatant ${combatant} not found in player ${id}`);

			insert(combatants, orderIndex, info);
		}),

	removePlayerCombatant: (state, id: string, combatant: keyof CombatantList) =>
		produce(state, (draft) => {
			const { combatants } = draft[id];
			const index = combatants.findIndex((c) => c.character.Name === combatant);

			delete combatants[index];
		}),

	setSelectedCombatant: (state, id: string, index: number) =>
		produce(state, (draft) => {
			assert(
				index < state[id].combatants.size() && index >= 0,
				"Attempt to select combatant would be out of bounds",
			);

			draft[id].selectedCombatant = index;
		}),

	clearSelectedCombatant: (state, id: string) =>
		produce(state, (draft) => {
			draft[id].selectedCombatant = -1;
		}),

	setRegion: (state, id: string, region: Region) =>
		produce(state, (draft) => {
			draft[id].region = region;
		}),

	setStatus: (state, id: string, status: LotlPlayerStatus) =>
		produce(state, (draft) => {
			draft[id].status = status;
		}),
});
