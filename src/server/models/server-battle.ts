import { HttpService, Workspace } from "@rbxts/services";
import { producer } from "server/producer";
import { Battle, Teams } from "shared/models/battle";
import { Combatant } from "server/models/combatant";
import { LotlPlayer, LotlPlayerStatus } from "shared/models/lotl_player";
import { Region } from "shared/modules/globals";

export type BattleTeam = Map<LotlPlayer, Combatant[]>;

export class ServerBattle extends Battle {
	public constructor(
		protected teams: Map<Teams, BattleTeam>,
		protected readonly region: Region,
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

	public static createQuickBattle(player1: LotlPlayer, player2: LotlPlayer, region: Region) {
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

		this.setupTeams(true);

		this.stopMovementOfTeams();

		const players = new Set<string>();

		for (const [name, team] of this.teams) {
			for (const [player] of team) {
				players.add(player.id);
			}

			producer.addBattleTeam(this.id, name, new Set([...players])); // Cloning the set on the producer itself doesn't work???

			players.clear();
		}

		super.startBattle();
	}

	public override stopBattle() {
		this.setupTeams(false);

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

	public getCombatantPosition(team: Teams, player: LotlPlayer, index: number) {
		const origin = Workspace.battlegrounds[this.region][team].CFrame;
		const firstPosition = origin.mul(new CFrame(-1 * (this.teams.get(team)!.get(player)!.size() - 1), 0, 0));

		return firstPosition.mul(new CFrame(2 * index, 0, 0));
	}

	public nextTurn() {
		producer.nextBattleTurn(this.id);

		for (const [, team] of this.teams) {
			for (const [player] of team) {
				producer.clearSkillsCasted(player.id);
			}
		}
	}

	protected setupTeams(inBattle: boolean) {
		for (const [teamName, team] of this.teams) {
			for (const [player] of team) {
				const { combatants, combatantsOrder } = producer.getState((state) => state.players[player.id]);

				if (inBattle) {
					player.setStatus(LotlPlayerStatus.IN_BATTLE);

					producer.setPlayerBattleId(player.id, this.id);

					combatantsOrder.forEach((name, index) => {
						combatants[name]!.character.PivotTo(this.getCombatantPosition(teamName, player, index));
						combatants[name]!.character.AddTag(this.id);
					});
				} else {
					player.setStatus(LotlPlayerStatus.IDLE);

					producer.setPlayerBattleId(player.id, undefined);
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
