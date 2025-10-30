import { HttpService, Workspace } from "@rbxts/services";
import { Battle, Teams } from "shared/models/battle";
import { Combatant } from "server/models/combatant";
import { BasePlayer } from "shared/models/player";
import { Globals, Region } from "shared/modules/globals";
import { LotlPlayerStatus, playersAtom } from "shared/atoms/players";
import { createBattle, battlesAtom, removeBattle } from "shared/atoms/battles";
import { clear, produce } from "@rbxts/better-immut";

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
		battlesAtom((state) => createBattle(state, this.id, this.region));

		this.setupPlayers(true);

		this.stopMovementOfTeams();

		for (const [name, team] of this.teams) {
			const players = new Set<string>();

			for (const [player] of team) {
				players.add(player.id);
			}

			battlesAtom((state) =>
				produce(state, (draft) => {
					draft[this.id].teams[name] = players;
				}),
			);
		}

		super.startBattle();
	}

	public override stopBattle() {
		this.setupPlayers(false);

		this.startMovementOfTeams();

		battlesAtom((state) => removeBattle(state, this.id));

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
		battlesAtom((state) =>
			produce(state, (draft) => {
				draft[this.id].turn++;
			}),
		);

		for (const [, team] of this.teams) {
			for (const [player] of team) {
				playersAtom((state) =>
					produce(state, (draft) => {
						clear(draft[player.id].skillsCasted);
					}),
				);
			}
		}
	}

	protected setupPlayers(inBattle: boolean) {
		for (const [teamName, team] of this.teams) {
			for (const [player] of team) {
				const { combatants } = playersAtom()[player.id];

				if (inBattle) {
					playersAtom((state) =>
						produce(state, (draft) => {
							draft[player.id].status = LotlPlayerStatus.IN_BATTLE;
							draft[player.id].selectedCombatant = 0;
							draft[player.id].battleId = this.id;
						}),
					);

					combatants.forEach((combatant, index) => {
						combatant.character.PivotTo(this.getCombatantPosition(teamName, player, index));
						combatant.character.AddTag(this.id);
					});
				} else {
					playersAtom((state) =>
						produce(state, (draft) => {
							draft[player.id].status = LotlPlayerStatus.IDLE;
							draft[player.id].selectedCombatant = -1;

							delete draft[player.id].battleId;
						}),
					);
				}
			}
		}
	}

	protected stopMovementOfTeams() {
		for (const [, team] of this.teams) {
			for (const [player] of team) {
				const rbxPlayer = player.getRbxPlayer();

				if (rbxPlayer) {
					player.getCharacter()?.RemoveTag("lotl_movement");
				}
			}
		}
	}

	protected startMovementOfTeams() {
		for (const [, team] of this.teams) {
			for (const [player] of team) {
				const rbxPlayer = player.getRbxPlayer();

				if (rbxPlayer) {
					player.getCharacter()?.AddTag("lotl_movement");
				}
			}
		}
	}
}
