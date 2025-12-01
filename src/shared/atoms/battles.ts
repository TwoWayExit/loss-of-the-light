import { Teams } from "shared/models/battle";
import { Region } from "shared/modules/global-types";
import { produce } from "@rbxts/better-immut";
import { atom } from "@rbxts/charm";
import { BattlePhase, SkillCast, SkillCastQueue } from "shared/modules/battle-types";

interface PlayerInfo {
	/** -1 if no combatant is selected */
	readonly selectedCombatant: number;
	// NOTE: The assumption is made that the order of combatants will never change in battle, so we can safely use indices instead of combatant names
	readonly energy: number[];
	readonly turnFinished: boolean;
}

interface BattleInfo {
	readonly turn: number;
	readonly region: Region;
	readonly first: Teams;
	readonly phase: BattlePhase;

	readonly teams: {
		readonly [teamName in Teams]: Set<string>;
	};
	readonly spectators: Set<string>;

	readonly playerInfo: {
		readonly [playerId: string]: PlayerInfo;
	};

	/** Skill cast queue */
	readonly skillsCasted: SkillCastQueue;
}

interface BattlesState {
	readonly [id: string]: BattleInfo;
}

const initialState: BattlesState = {};

export const battlesAtom = atom(initialState);

export const createBattle = (state: BattlesState, id: string, region: BattleInfo["region"], first: Teams) =>
	produce(state, (draft) => {
		draft[id] = {
			turn: 0,
			region,
			first,
			phase: BattlePhase.DECIDE,
			teams: {} as BattleInfo["teams"],
			spectators: new Set(),
			playerInfo: {},
			skillsCasted: [],
		};
	});

export const removeBattle = (state: BattlesState, id: string) =>
	produce(state, (draft) => {
		delete draft[id];
	});

/** Redirects an enemy combatant's targeting to an ally skill caster */
export const retargetCombatant = (state: BattlesState, id: string, casterSkillCast: SkillCast) =>
	produce(state, (draft) => {
		const enemyCastIndex = state[id].skillsCasted.findIndex(
			(cast) =>
				cast.casterPlayer === casterSkillCast.targetPlayer &&
				cast.casterCombatant === casterSkillCast.targetCombatant,
		);

		if (enemyCastIndex === -1) {
			return;
		}

		draft[id].skillsCasted[enemyCastIndex].targetPlayer = casterSkillCast.casterPlayer;
		draft[id].skillsCasted[enemyCastIndex].targetCombatant = casterSkillCast.casterCombatant;
	});
