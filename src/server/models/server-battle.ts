import { HttpService } from "@rbxts/services";
import { producer } from "server/producer";
import { Battle, Teams } from "shared/models/battle";
import { Combatant } from "server/models/combatant";
import { LotlPlayer, LotlPlayerStatus } from "shared/models/lotl_player";

export type BattleTeam = Map<LotlPlayer, Combatant[]>;

export class ServerBattle extends Battle {
	public constructor(protected teams: Map<Teams, BattleTeam>) {
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

	public static async createQuickBattle(player1: LotlPlayer, player2: LotlPlayer) {
		return new ServerBattle(
			new Map([
				[Teams.TEAM1, new Map([[player1, await Combatant.createCombatants(player1)]])],
				[Teams.TEAM2, new Map([[player2, await Combatant.createCombatants(player2)]])],
			]),
		);
	}

	public override startBattle() {
		this.setStatusOfTeams(LotlPlayerStatus.IN_BATTLE);
		this.stopMovementOfTeams();

		producer.addBattle(this.id);
		producer.setBattleOrigin(this.id, this.getBattleOrigin());

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
		this.setStatusOfTeams(LotlPlayerStatus.IDLE);
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

	public getCombatantPosition(team: Teams) {
		const origin = producer.getState((state) => state.battles.battles[this.id].origin);

		switch (team) {
			case Teams.TEAM1:
				return origin.mul(new CFrame(0, 0, 6));

			case Teams.TEAM2:
				return origin.mul(new CFrame(0, 0, -6));
		}
	}

	protected getBattleOrigin() {
		let total = Vector3.zero;
		let count = 0;

		let target;

		for (const [, team] of this.teams) {
			for (const [player] of team) {
				const character = player.getCharacter();

				assert(character, `Player ${player.id} does not have a character`);

				if (!target) {
					target = player;
				}

				total = total.add(character.GetPivot().Position);
				count++;
			}
		}

		return CFrame.lookAt(total.div(count), target!.getCharacter()!.GetPivot().Position);
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
