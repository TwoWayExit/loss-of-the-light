import { Teams } from "shared/models/battle";
import { Region } from "shared/modules/global-types";
import { produce } from "@rbxts/better-immut";
import { atom } from "@rbxts/charm";
import { BattlePhase, CombatantInfo, SkillCast, SkillCastQueue } from "shared/modules/battle-types";
import { playersAtom } from "./players";
import { getOpposingTeam } from "shared/lib/util";

interface PlayerInfo {
	/** -1 if no combatant is selected */
	readonly selectedCombatant: number;
	readonly combatants: CombatantInfo[];
	readonly turnFinished: boolean;
}

export interface BattleInfo {
	readonly turn: number;
	readonly region: Region;
	readonly first: Teams;
	readonly phase: BattlePhase;

	readonly teams: {
		readonly [teamName in Teams]: string[];
	};
	readonly spectators: Set<string>;

	readonly playerInfo: {
		readonly [playerId: string]: PlayerInfo;
	};

	readonly skillsCasted: SkillCastQueue;
}

interface BattlesState {
	readonly [id: string]: BattleInfo;
}

const initialState: BattlesState = {};

export const battlesAtom = atom(initialState);

// TODO: Perhaps move these helper functions into a separate file
export function getPlayerTeam(playerId: string) {
	const { battleId } = playersAtom()[playerId];

	assert(battleId, `Player ${playerId} is not currently in battle`);

	const battle = battlesAtom()[battleId];

	for (const [teamName, team] of pairs(battle.teams)) {
		if (team.includes(playerId)) {
			return teamName;
		}
	}

	throw `Could not find player's team (${playerId})`;
}

/**
 * @returns The combatants of an enemy through a given index correspondent to an element in the enemy team array of player ids (as defined in battlesAtom)
 * @remarks Throws an error if the battleId member (as defined in playersAtom) is undefined
 */
export function getEnemyCombatants(playerId: string, enemyIndex: number) {
	const { battleId } = playersAtom()[playerId];

	if (battleId === undefined) {
		throw "Not currently in battle";
	}

	const battle = battlesAtom()[battleId];

	// Get our player's team, then inverse it to get the enemy team
	const team = getPlayerTeam(playerId);
	const enemyTeam = getOpposingTeam(team);
	const enemyId = battle.teams[enemyTeam][enemyIndex];

	return battle.playerInfo[enemyId].combatants;
}

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

export const takeCombatantDamage = (
	state: BattlesState,
	id: string,
	enemyId: string,
	combatantIndex: number,
	damage: number,
) =>
	produce(state, (draft) => {
		draft[id].playerInfo[enemyId].combatants[combatantIndex].health -= damage;
	});
