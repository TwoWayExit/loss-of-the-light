import Object from "@rbxts/object-utils";
import { createProducer } from "@rbxts/reflex";
import type { CombatantInfo, CombatantList } from "server/models/combatant";
import { Region } from "shared/modules/globals";

export interface PlayerInfo {
	readonly battleId?: string;

	readonly skillsCasted: Map<keyof CombatantList, string>;

	readonly combatants: CombatantInfo[];

	readonly region: Region;
}

interface PlayersState {
	readonly [id: string]: PlayerInfo;
}

const initialState: PlayersState = {};

export const playersSlice = createProducer(initialState, {
	addPlayer: (state, id: string) => ({
		...state,
		[id]: { skillsCasted: new Map(), combatants: [], region: "baseplate" },
	}),

	removePlayer: (state, id: string) => {
		const players = { ...state };

		delete players[id];

		return players;
	},

	addPlayerCombatant: (state, id: string, info: CombatantInfo) => {
		const { combatants } = state[id];

		return {
			...state,
			[id]: { ...state[id], combatants: [...combatants, info] },
		};
	},

	setCombatantHealth: (state, id: string, combatant: keyof CombatantList, health: number) => {
		const combatants = [...state[id].combatants];
		const index = combatants.findIndex((c) => c.name === combatant);
		const info = combatants[index];

		assert(info, `Combatant ${combatant} not found in player ${id}`);

		combatants[index] = { ...info, health };

		return {
			...state,
			[id]: { ...state[id], combatants },
		};
	},

	takeCombatantDamage: (state, id: string, combatant: keyof CombatantList, damage: number) => {
		const combatants = [...state[id].combatants];
		const index = combatants.findIndex((c) => c.name === combatant);
		const info = combatants[index];

		assert(info, `Combatant ${combatant} not found in player ${id}`);

		combatants[index] = { ...info, health: info.health - damage };

		return {
			...state,
			[id]: {
				...state[id],
				combatants,
			},
		};
	},

	setPlayerBattleId: (state, id: string, battleId?: string) => ({
		...state,
		[id]: {
			...state[id],
			battleId,
		},
	}),

	castSkill: (state, id: string, combatant: keyof CombatantList, skill: string) => {
		const skillsCasted = Object.assign(new Map(), state[id].skillsCasted);

		skillsCasted.set(combatant, skill);

		return {
			...state,
			[id]: {
				...state[id],
				skillsCasted,
			},
		};
	},

	clearSkillsCasted: (state, id: string) => ({
		...state,
		[id]: {
			...state[id],
			skillsCasted: new Map(),
		},
	}),

	reorderPlayerCombatant: (state, id: string, combatant: keyof CombatantList, orderIndex: number) => {
		const { combatants } = state[id];
		const info = combatants.remove(combatants.findIndex((c) => c.name === combatant));

		assert(info, `Combatant ${combatant} not found in player ${id}`);

		combatants.insert(orderIndex, info);

		return {
			...state,
			[id]: { ...state[id], combatants },
		};
	},

	removePlayerCombatant: (state, id: string, combatant: keyof CombatantList) => {
		const combatants = [...state[id].combatants];
		const index = combatants.findIndex((c) => c.name === combatant);

		delete combatants[index];

		return { ...state, [id]: { ...state[id], combatants } };
	},
});
