import Object from "@rbxts/object-utils";
import { createProducer } from "@rbxts/reflex";
import type { CombatantInfo, CombatantList } from "server/models/combatant";
import { Region } from "shared/modules/globals";

export interface PlayerInfo {
	readonly battleId?: string;

	readonly skillsCasted: Map<keyof CombatantList, string>;

	readonly combatants: {
		readonly [combatant in keyof CombatantList]?: CombatantInfo;
	};

	/** Synchronized with `combatants` to simply show order, hacky way to do an "ordered map/record" in Luau */
	readonly combatantsOrder: (keyof CombatantList)[];

	readonly region: Region;
}

interface PlayersState {
	readonly [id: string]: PlayerInfo;
}

const initialState: PlayersState = {};

export const playersSlice = createProducer(initialState, {
	addPlayer: (state, id: string) => ({
		...state,
		[id]: { skillsCasted: new Map(), combatants: {}, combatantsOrder: [], region: "baseplate" },
	}),

	removePlayer: (state, id: string) => {
		const players = { ...state };

		delete players[id];

		return players;
	},

	addPlayerCombatant: (state, id: string, combatant: keyof CombatantList, info: CombatantInfo) => {
		const { combatants, combatantsOrder: order } = state[id];
		const combatantsOrder = [...order];

		combatantsOrder.push(combatant);

		return {
			...state,
			[id]: { ...state[id], combatants: { ...combatants, [combatant]: info }, combatantsOrder },
		};
	},

	setCombatantHealth: (state, id: string, combatant: keyof CombatantList, health: number) => {
		const { combatants, combatantsOrder } = state[id];
		const info = combatants[combatant];

		assert(info, `Combatant ${combatant} not found in player ${id}`);

		return {
			...state,
			[id]: { ...state[id], combatants: { ...combatants, [combatant]: { ...info, health } }, combatantsOrder },
		};
	},

	takeCombatantDamage: (state, id: string, combatant: keyof CombatantList, damage: number) => {
		const { combatants, combatantsOrder } = state[id];
		const info = combatants[combatant];

		assert(info, `Combatant ${combatant} not found in player ${id}`);

		return {
			...state,
			[id]: {
				...state[id],
				combatants: { ...combatants, [combatant]: { ...info, health: info.health - damage } },
				combatantsOrder,
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
		const { combatants, combatantsOrder: order } = state[id];
		const combatantsOrder = [...order];

		combatantsOrder.remove(combatantsOrder.indexOf(combatant));
		combatantsOrder.insert(orderIndex, combatant);

		return {
			...state,
			[id]: { ...state[id], combatants, combatantsOrder },
		};
	},

	removePlayerCombatant: (state, id: string, combatant: keyof CombatantList) => {
		const combatants = { ...state[id].combatants };
		const combatantsOrder = [...state[id].combatantsOrder];

		delete combatants[combatant];

		combatantsOrder.remove(combatantsOrder.indexOf(combatant));

		return { ...state, [id]: { ...state[id], combatants, combatantsOrder } };
	},
});
