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

	readonly skillCastQueue: SkillCastQueue;
}

interface BattlesState {
	readonly [id: string]: BattleInfo;
}

const initialState: BattlesState = {};

export const battlesAtom = atom(initialState);

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

export function createBattle(id: string, region: BattleInfo["region"], first: Teams) {
	battlesAtom((state) =>
		produce(state, (draft) => {
			draft[id] = {
				turn: 0,
				region,
				first,
				phase: BattlePhase.DECIDE,
				teams: {} as BattleInfo["teams"],
				spectators: new Set(),
				playerInfo: {},
				skillCastQueue: [],
			};
		}),
	);
}

export function removeBattle(id: string) {
	battlesAtom((state) =>
		produce(state, (draft) => {
			delete draft[id];
		}),
	);
}

/** Redirects an enemy combatant's targeting to an ally skill caster */
export function retargetCombatant(id: string, casterSkillCast: SkillCast) {
	battlesAtom((state) =>
		produce(state, (draft) => {
			const enemyCastIndex = state[id].skillCastQueue.findIndex(
				(cast) =>
					cast.casterPlayer === casterSkillCast.targetPlayer &&
					cast.casterCombatant === casterSkillCast.targetCombatant,
			);

			if (enemyCastIndex === -1) {
				return;
			}

			draft[id].skillCastQueue[enemyCastIndex].targetPlayer = casterSkillCast.casterPlayer;
			draft[id].skillCastQueue[enemyCastIndex].targetCombatant = casterSkillCast.casterCombatant;
		}),
	);
}

export function takeCombatantDamage(id: string, enemyId: string, combatantIndex: number, damage: number) {
	battlesAtom((state) =>
		produce(state, (draft) => {
			draft[id].playerInfo[enemyId].combatants[combatantIndex].health -= damage;
		}),
	);
}
