import { HttpService, Workspace } from "@rbxts/services";
import { Battle, Teams } from "shared/models/battle";
import { BasePlayer } from "shared/models/player";
import { Region } from "shared/modules/global-types";
import { PlayerStatus, playersAtom } from "shared/atoms/players";
import { createBattle, battlesAtom, removeBattle, BattleInfo } from "shared/atoms/battles";
import { clear, produce } from "@rbxts/better-immut";
import { batch, subscribe } from "@rbxts/charm";
import { Events } from "server/network";
import { BattlePhase, Action, ActionType, ActionPlan } from "shared/modules/battle-types";
import combatantList from "shared/modules/combatant-list";
import { AutoControl } from "shared/models/auto-control";
import assetInstances from "shared/asset-instances";
import { getAnimationLength } from "shared/lib/util";

// NOTE: Server-sided battle logic is handled here
export class ServerBattle extends Battle {
	private autoControls = {
		[Teams.TEAM1]: new Array<AutoControl>(),
		[Teams.TEAM2]: new Array<AutoControl>(),
	} as const satisfies Record<Teams, AutoControl[]>;

	private constructor(
		id: string,
		/** This member is only used for the initialization phase, when the `battlesAtom` battle instance has not been set up */
		private teams: Record<Teams, string[]>,
		public readonly region: Region,
		first: Teams,
	) {
		super(id, first);
	}

	public static createBattle(team1: BasePlayer[], team2: BasePlayer[], region: Region, first: Teams) {
		assert(team1.size() > 0 && team2.size() > 0, "Both teams must have at least 1 player");

		const assertion = (player: BasePlayer) => {
			// NPCs can be in as many battles as needed, but not players
			assert(
				!player.getRbxPlayer() || playersAtom()[player.id].battleId === undefined,
				`${player.getNickname()} (${player.id}) already in battle`,
			);
		};

		for (const player of team1) {
			assertion(player);
		}

		for (const player of team2) {
			assertion(player);
		}

		const id = HttpService.GenerateGUID(false);

		return new ServerBattle(
			id,
			{
				[Teams.TEAM1]: team1.map((player) => player.id),
				[Teams.TEAM2]: team2.map((player) => player.id),
			},
			region,
			first,
		);
	}

	public override async startBattle() {
		this.setupPlayersAtom(true);

		const allPlayers = new Array<BasePlayer>();

		for (const [, team] of pairs(this.teams)) {
			team.mapFiltered((playerId) => BasePlayer.getPlayerFromId(playerId)).forEach((player) => {
				allPlayers.push(player);
			});
		}

		// TODO: Uncomment this once StreamingEnabled is enabled again
		// await this.streamBattleground(allPlayers);

		this.setupBattlesAtom();
		this.stopMovementOfTeams();
		this.initAutoControls();
		this.subscribeAtoms();

		super.startBattle();
	}

	public override stopBattle() {
		this.setupPlayersAtom(false);

		this.startMovementOfTeams();

		removeBattle(this.id);

		super.stopBattle();
	}

	public override async startAction(plan = this.getActionPlan()) {
		// Send action plan to clients
		for (const [, team] of pairs(battlesAtom()[this.id].teams)) {
			for (const playerId of team) {
				const player = BasePlayer.getPlayerFromId(playerId);

				assert(player);

				const rbxPlayer = player.getRbxPlayer();

				if (!rbxPlayer) {
					continue;
				}

				Events.lotl.startAction(rbxPlayer, plan);
			}
		}

		return super.startAction(plan);
	}

	public nextTurn() {
		battlesAtom((state) =>
			produce(state, (draft) => {
				draft[this.id].turn++;
				draft[this.id].phase = BattlePhase.DECIDE;

				clear(draft[this.id].skillCastQueue);

				// Let's index manually instead of using the value element of the iterator, just to ensure that immut does its job as intended
				for (const [playerId] of pairs(state[this.id].playerInfo)) {
					draft[this.id].playerInfo[playerId].turnFinished = false;
				}
			}),
		);
	}

	public getActionPlan() {
		const casted = [...battlesAtom()[this.id].skillCastQueue];
		const plan: ActionPlan = [];

		// TODO: Create a special action plan exclusively for first hits

		for (let i = 0; i < casted.size(); i++) {
			let corresponding: number | undefined;

			for (let j = i + 1; j < casted.size(); j++) {
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

			if (corresponding !== undefined) {
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

	private setupBattlesAtom() {
		// Wrap this as a batch so clients receive only the final state after all changes
		batch(() => {
			createBattle(this.id, this.region, this.first);

			for (const [teamName, team] of pairs(this.teams)) {
				battlesAtom((state) =>
					produce(state, (draft) => {
						draft[this.id].teams[teamName] = team;
					}),
				);

				for (const playerId of team) {
					const { combatants } = playersAtom()[playerId];

					battlesAtom((state) =>
						produce(state, (draft) => {
							draft[this.id].playerInfo[playerId] = {
								selectedCombatant: -1,
								combatants: combatants.map((name) => {
									const { energy, health } = combatantList[name];

									return {
										name,
										character: undefined!,
										animationHandler: undefined!,
										energy,
										health,
									};
								}),
								turnFinished: false,
							};
						}),
					);
				}
			}
		});
	}

	private setupPlayersAtom(inBattle: boolean) {
		for (const [, team] of pairs(this.teams)) {
			for (const playerId of team) {
				if (inBattle) {
					playersAtom((state) =>
						produce(state, (draft) => {
							draft[playerId].status = PlayerStatus.IN_BATTLE;
							draft[playerId].battleId = this.id;
						}),
					);
				} else {
					playersAtom((state) =>
						produce(state, (draft) => {
							draft[playerId].status = PlayerStatus.IDLE;

							delete draft[playerId].battleId;
						}),
					);
				}
			}
		}
	}

	private async streamBattleground(players: BasePlayer[]) {
		return await Promise.all(
			players.map((player) =>
				Promise.try(() => {
					const rbxPlayer = player.getRbxPlayer();

					if (rbxPlayer) {
						rbxPlayer.RequestStreamAroundAsync(Workspace.battlegrounds[this.region].origin.Position);
						rbxPlayer.ReplicationFocus = Workspace.battlegrounds[this.region].origin;
					}
				}),
			),
		);
	}

	private initAutoControls() {
		for (const [teamName, team] of pairs(battlesAtom()[this.id].teams)) {
			for (let i = 0; i < team.size(); i++) {
				const playerId = team[i];
				const player = BasePlayer.getPlayerFromId(playerId);

				assert(player);

				if (player.getRbxPlayer()) {
					continue;
				}

				const { combatants } = playersAtom()[playerId];

				for (const combatant of combatants) {
					const { autoControlCtor } = combatantList[combatant];

					this.autoControls[teamName].push(new autoControlCtor(this.id, playerId));
				}
			}
		}
	}

	private stopMovementOfTeams() {
		for (const [, team] of pairs(battlesAtom()[this.id].teams)) {
			for (const playerId of team) {
				const player = BasePlayer.getPlayerFromId(playerId);

				assert(player);

				if (player.getRbxPlayer()) {
					player.getCharacter()?.RemoveTag("lotl_movement");
				}
			}
		}
	}

	private startMovementOfTeams() {
		for (const [, team] of pairs(battlesAtom()[this.id].teams)) {
			for (const playerId of team) {
				const player = BasePlayer.getPlayerFromId(playerId);

				assert(player);

				if (player.getRbxPlayer()) {
					player.getCharacter()?.AddTag("lotl_movement");
				}
			}
		}
	}

	private onPlayerInfoChange(players: BattleInfo["playerInfo"]) {
		if (battlesAtom()[this.id].phase !== BattlePhase.DECIDE) {
			return;
		}

		// Transition from DECIDE to ACTION when all players have finished their turns
		for (const [, player] of pairs(players)) {
			if (!player.turnFinished) {
				return;
			}
		}

		battlesAtom((state) =>
			produce(state, (draft) => {
				draft[this.id].phase = BattlePhase.ACTION;
			}),
		);

		this.startAction().then(() => {
			this.nextTurn();
		});
	}

	private onPhaseChange(phase: BattlePhase) {
		if (phase !== BattlePhase.DECIDE) {
			return;
		}

		// Run all NPC decision trees during the DECIDE phase
		for (const [, team] of pairs(this.autoControls)) {
			for (const autoControl of team) {
				autoControl.runDecision();
			}
		}
	}

	private onCombatantHurt(player: string, combatant: number) {
		const { name } = battlesAtom()[this.id].playerInfo[player].combatants[combatant];

		this.queue.insert(this.getQueuePosition() + 1, () =>
			getAnimationLength(assetInstances.animations[`${name}/hurt`].AnimationId).then((length) =>
				Promise.delay(length),
			),
		);
	}

	private subscribeAtoms() {
		this.janitor.Add(
			subscribe(
				() => battlesAtom()[this.id].playerInfo,
				(players) => {
					this.onPlayerInfoChange(players);
				},
			),
		);

		this.janitor.Add(
			subscribe(
				() => battlesAtom()[this.id].phase,
				(phase) => {
					this.onPhaseChange(phase);
				},
			),
		);

		for (const [playerId, player] of pairs(battlesAtom()[this.id].playerInfo)) {
			for (let i = 0; i < player.combatants.size(); i++) {
				this.janitor.Add(
					subscribe(
						() => battlesAtom()[this.id].playerInfo[playerId].combatants[i].health,
						(health, prev) => {
							if (health < prev) {
								this.onCombatantHurt(playerId as string, i);
							}
						},
					),
				);
			}
		}

		// Immediately run these despite no change to start the battle
		this.onPlayerInfoChange(battlesAtom()[this.id].playerInfo);
		this.onPhaseChange(battlesAtom()[this.id].phase);
	}
}
