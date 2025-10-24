import { HttpService, Workspace } from "@rbxts/services";
import { producer } from "server/producer";
import { Battle, Teams } from "shared/models/battle";
import { Combatant } from "server/models/combatant";
import { BasePlayer } from "shared/models/player";
import { Globals, Region } from "shared/modules/globals";
import { LotlPlayerStatus } from "shared/slices/players";

export type BattleTeam = Map<BasePlayer, Combatant[]>;

export class ServerBattle extends Battle {
	private constructor(
		protected teams: Map<Teams, BattleTeam>,
		public readonly region: Region,
	) {
		super(HttpService.GenerateGUID(false));

		// Add combatants for cleanup
		for (const [, team] of this.teams) {
			for (const [, combatants] of team) {
				this.janitor.Add(() => {
					combatants.forEach((combatant) => combatant.destroy());
					combatants.clear();
				});
			}
		}
	}

	public static createBattle(player1: BasePlayer, player2: BasePlayer, region: Region) {
		return new ServerBattle(
			new Map([
				[Teams.TEAM1, new Map([[player1, Combatant.createCombatants(player1)]])],
				[Teams.TEAM2, new Map([[player2, Combatant.createCombatants(player2)]])],
			]),
			region,
		);
	}

	public override startBattle() {
		producer.addBattle(this.id, this.region);

		this.setupPlayers(true);

		this.stopMovementOfTeams();

		for (const [name, team] of this.teams) {
			const players = new Set<string>();

			for (const [player] of team) {
				players.add(player.id);
			}

			producer.addBattleTeam(this.id, name, players);
		}

		super.startBattle();
	}

	public override stopBattle() {
		this.setupPlayers(false);

		this.startMovementOfTeams();

		producer.removeBattle(this.id);

		super.stopBattle();
	}

	public getTeam(teamName: Teams) {
		return this.teams.get(teamName);
	}

	public addTeam(teamName: Teams, team: BattleTeam) {
		this.teams.set(teamName, team);
	}

	public removeTeam(teamName: Teams) {
		this.teams.delete(teamName);
	}

	public getCombatantPosition(team: Teams, player: BasePlayer, index: number) {
		const origin = Workspace.battlegrounds[this.region][team].CFrame;
		const combatantAmount = this.teams.get(team)!.get(player)!.size();
		const firstPosition = origin.mul(new CFrame(-Globals.COMBATANT_SPACING * ((combatantAmount - 1) / 2), 0, 0));

		return firstPosition.mul(new CFrame(Globals.COMBATANT_SPACING * index, 0, 0));
	}

	public nextTurn() {
		producer.nextBattleTurn(this.id);

		for (const [, team] of this.teams) {
			for (const [player] of team) {
				producer.clearSkillsCasted(player.id);
			}
		}
	}

	protected setupPlayers(inBattle: boolean) {
		for (const [teamName, team] of this.teams) {
			for (const [player] of team) {
				const { combatants } = producer.getState((state) => state.players[player.id]);

				if (inBattle) {
					producer.setStatus(player.id, LotlPlayerStatus.IN_BATTLE);
					producer.setSelectedCombatant(player.id, 0);
					producer.setPlayerBattleId(player.id, this.id);

					combatants.forEach((combatant, index) => {
						combatant.character.PivotTo(this.getCombatantPosition(teamName, player, index));
						combatant.character.AddTag(this.id);
					});
				} else {
					producer.setStatus(player.id, LotlPlayerStatus.IDLE);
					producer.setPlayerBattleId(player.id, undefined);
					producer.clearSelectedCombatant(player.id);
				}
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
