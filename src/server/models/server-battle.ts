import { HttpService, Workspace } from "@rbxts/services";
import { Battle, Teams } from "shared/models/battle";
import { Combatant } from "server/models/combatant";
import { BasePlayer } from "shared/models/player";
import { Globals, Region } from "shared/modules/global-types";
import { LotlPlayerStatus, playersAtom } from "shared/atoms/players";
import { createBattle, battlesAtom, removeBattle } from "shared/atoms/battles";
import { clear, produce } from "@rbxts/better-immut";
import { subscribe } from "@rbxts/charm";
import { Events } from "server/network";
import { BattlePhase, Action, ActionType, ActionPlan } from "shared/modules/battle-types";

export type BattleTeam = Map<BasePlayer, Combatant[]>;

export class ServerBattle extends Battle {
	private constructor(
		protected teams: Map<Teams, BattleTeam>,
		public readonly region: Region,
		first: Teams,
	) {
		super(HttpService.GenerateGUID(false), first);

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

	public static createBattle(player1: BasePlayer, player2: BasePlayer, region: Region, first: Teams) {
		return new ServerBattle(
			new Map([
				[Teams.TEAM1, new Map([[player1, Combatant.createCombatants(player1)]])],
				[Teams.TEAM2, new Map([[player2, Combatant.createCombatants(player2)]])],
			]),
			region,
			first,
		);
	}

	public override startBattle() {
		battlesAtom((state) => createBattle(state, this.id, this.region, this.first));

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

		this.subscribeAtoms();

		super.startBattle();
	}

	public override stopBattle() {
		this.setupPlayers(false);

		this.startMovementOfTeams();

		battlesAtom((state) => removeBattle(state, this.id));

		super.stopBattle();
	}

	public async startAction() {
		const plan = this.getActionPlan();

		// Send action plan to clients
		for (const [, team] of this.teams) {
			for (const [player] of team) {
				const rbxPlayer = player.getRbxPlayer();

				if (!rbxPlayer) {
					continue;
				}

				Events.lotl.startAction(rbxPlayer, plan);
			}
		}

		// TODO: Implement appropriate skill cast timing based on animation and clash durations
		// Perhaps using recursion to create a chain of promises iterating through the action plan?
		print(plan);
	}

	public getTeam(teamName: Teams) {
		return this.teams.get(teamName);
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
				draft[this.id].phase = BattlePhase.DECIDE;

				clear(draft[this.id].skillsCasted);

				// Let's index manually instead of using the value element of the iterator, just to ensure that immut does its job as intended
				for (const [playerId] of pairs(draft[this.id].playerInfo)) {
					draft[this.id].playerInfo[playerId].turnFinished = false;
				}
			}),
		);
	}

	public nextPhase() {
		battlesAtom((state) =>
			produce(state, (draft) => {
				draft[this.id].phase++;
				draft[this.id].phase %= 2;
			}),
		);

		if (battlesAtom()[this.id].phase === BattlePhase.ACTION) {
			this.startAction();
		} else {
			this.nextTurn();
		}
	}

	protected getActionPlan() {
		const casted = [...battlesAtom()[this.id].skillsCasted];
		const plan: ActionPlan = [];

		for (let i = 0; i < casted.size(); i++) {
			let corresponding: number | undefined;

			for (let j = i + 1; casted.size(); j++) {
				if (
					casted[i].targetPlayer === casted[j].casterPlayer &&
					casted[i].targetCombatant === casted[j].casterCombatant &&
					casted[j].targetPlayer === casted[i].casterPlayer &&
					casted[j].targetCombatant === casted[i].casterCombatant
				) {
					corresponding = j;
					break;
				}
			}

			if (corresponding) {
				plan.push(
					identity<Action<ActionType.CLASH>>({
						type: ActionType.CLASH,
						cast: [casted[i], casted[corresponding]],
					}),
				);
				casted.remove(corresponding);
			} else {
				plan.push(
					identity<Action<ActionType.SINGLE>>({
						type: ActionType.SINGLE,
						cast: casted[i],
					}),
				);
			}
		}

		return plan;
	}

	protected setupPlayers(inBattle: boolean) {
		for (const [teamName, team] of this.teams) {
			for (const [player] of team) {
				const { combatants } = playersAtom()[player.id];

				if (inBattle) {
					playersAtom((state) =>
						produce(state, (draft) => {
							draft[player.id].status = LotlPlayerStatus.IN_BATTLE;
							draft[player.id].battleId = this.id;
						}),
					);

					battlesAtom((state) =>
						produce(state, (draft) => {
							draft[this.id].playerInfo[player.id] = {
								selectedCombatant: -1,
								energy: new Map(combatants.map((_, index) => [index, 5])),
								turnFinished: false,
							};
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

	protected subscribeAtoms() {
		// Next phase when all players have finished their turns
		subscribe(
			() => battlesAtom()[this.id].playerInfo,
			(players) => {
				if (battlesAtom()[this.id].phase !== BattlePhase.DECIDE) {
					return;
				}

				for (const [, player] of pairs(players)) {
					if (!player.turnFinished) {
						return;
					}
				}

				this.nextPhase();
			},
		);
	}
}
