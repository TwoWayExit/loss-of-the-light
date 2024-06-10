import { Combatant } from "shared/models/combatant";
import { LotlPlayer, LotlPlayerStatus } from "shared/models/lotl_player";

type BattleTeam = Map<LotlPlayer, Combatant[]>;

export class BattleInfo {
	public turn = 0;
}

export class Battle {
	protected battleInfo = new BattleInfo();

	public constructor(protected teams: Map<string, BattleTeam> = new Map()) {}

	public static async createQuickBattle(player1: LotlPlayer, player2: LotlPlayer) {
		return new Battle(
			new Map([
				["Team1", new Map([[player1, await player1.createCombatants()]])],
				["Team2", new Map([[player2, await player2.createCombatants()]])],
			]),
		);
	}

	public startBattle() {
		this.setStatusOfTeams(LotlPlayerStatus.IN_BATTLE);
		this.stopMovementOfTeams();
	}

	public stopBattle() {
		this.setStatusOfTeams(LotlPlayerStatus.IDLE);
		this.startMovementOfTeams();
	}

	public getTeam(teamName: string) {
		return this.teams.get(teamName);
	}

	public addTeam(teamName: string, team: BattleTeam) {
		this.teams.set(teamName, team);
	}

	public removeTeam(teamName: string) {
		this.teams.delete(teamName);
	}

	protected setStatusOfTeams(status: LotlPlayerStatus) {
		for (const [, team] of this.teams) {
			for (const [player] of team) {
				player.setStatus(status);
			}
		}
	}

	protected stopMovementOfTeams() {
		for (const [, team] of this.teams) {
			for (const [player] of team) {
				const localPlayer = player.getLocalPlayer();

				if (localPlayer) {
					player.getCharacter()?.RemoveTag("lotl_movement");
				}
			}
		}
	}

	protected startMovementOfTeams() {
		for (const [, team] of this.teams) {
			for (const [player] of team) {
				const localPlayer = player.getLocalPlayer();

				if (localPlayer) {
					player.getCharacter()?.AddTag("lotl_movement");
				}
			}
		}
	}
}
