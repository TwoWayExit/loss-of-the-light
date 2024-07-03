import { HttpService, RunService } from "@rbxts/services";
import { Janitor } from "@rbxts/janitor";
import { Signal } from "@rbxts/beacon";
import { Combatant } from "shared/models/combatant";
import { NetworkClass, networkVar } from "./network";
import { LotlPlayer, LotlPlayerStatus } from "shared/models/lotl_player";

interface LotlPlayerNetworkInfo {
	name: string;
	character: Model;
	skillset: string;
	id: string;
}

export type BattleTeam = Map<LotlPlayer, Combatant[]>;
export type NetworkBattleTeam = Map<string, LotlPlayerNetworkInfo[]>;

export const enum Teams {
	TEAM1 = "Team1",
	TEAM2 = "Team2",
}

export class BattleInfo {
	public turn = 0;

	public origin = CFrame.identity;
}

export class Battle {
	public readonly battleStarted = new Signal<void>();
	public readonly battleEnded = new Signal<void>();

	public readonly battleInfo = networkVar<NetworkClass<BattleInfo>>(new BattleInfo());

	protected static battles = new Map<string, Battle>();

	protected janitor = new Janitor();

	/** @remarks The `id` parameter must be provided on the client */
	public constructor(
		protected teams: Map<Teams, BattleTeam> = new Map(),
		public readonly id = HttpService.GenerateGUID(false),
	) {
		this.battleInfo.network(id);

		// Add combatants for cleanup
		for (const [, team] of this.teams) {
			for (const [, combatants] of team) {
				this.janitor.Add(() => {
					combatants.forEach((combatant) => combatant.destroy());
					combatants.clear();
				});
			}
		}

		Battle.battles.set(id, this);
	}

	public static async createQuickBattle(player1: LotlPlayer, player2: LotlPlayer) {
		return new Battle(
			new Map([
				[Teams.TEAM1, new Map([[player1, await player1.createCombatants()]])],
				[Teams.TEAM2, new Map([[player2, await player2.createCombatants()]])],
			]),
		);
	}

	public static getBattleFromId(id: string) {
		return Battle.battles.get(id);
	}

	/** @server @virtual */
	public startBattle() {
		if (!RunService.IsServer()) {
			return;
		}

		this.setStatusOfTeams(LotlPlayerStatus.IN_BATTLE);
		this.stopMovementOfTeams();

		this.setBattleOfTeams(true);
		this.setFirstCombatantOfTeams(true);

		// Unsafe to write without set(), but startClientBattles() says otherwise
		this.battleInfo.get().origin = this.getBattleOrigin();

		this.startClientBattles();

		this.battleStarted.Fire();
	}

	/** @server @virtual */
	public stopBattle() {
		if (!RunService.IsServer()) {
			return;
		}

		this.setStatusOfTeams(LotlPlayerStatus.IDLE);
		this.startMovementOfTeams();

		this.setBattleOfTeams(false);
		this.setFirstCombatantOfTeams(false);

		Battle.battles.delete(this.id);

		this.janitor.Cleanup();

		this.battleEnded.Fire();
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
		const origin = this.battleInfo.get().origin;

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

	// Boilerplate code blah blah blah
	protected setBattleOfTeams(inBattle: boolean) {
		for (const [, team] of this.teams) {
			for (const [player] of team) {
				if (inBattle) {
					player.localData.battle = this;
				} else {
					player.localData.battle = undefined;
				}
			}
		}
	}

	protected setFirstCombatantOfTeams(inBattle: boolean) {
		for (const [, team] of this.teams) {
			for (const [player] of team) {
				if (inBattle) {
					player.localData.activeCombatant = player.getCombatants()[0];
				} else {
					player.localData.activeCombatant = undefined;
				}
			}
		}
	}

	/** @server */
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

	/** @server */
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

	/** @server */
	protected packTeamData(teams: Map<Teams, BattleTeam>) {
		const data = new Map<Teams, NetworkBattleTeam>();

		for (const [name, team] of teams) {
			const map: NetworkBattleTeam = new Map();

			data.set(name, map);

			for (const [player, combatants] of team) {
				map.set(
					player.id,
					combatants.map((combatant) => ({
						name: combatant.name,
						character: combatant.getCharacter()!,
						skillset: combatant.skillset.name,
						id: combatant.id,
					})),
				);
			}
		}

		return data;
	}

	/** @server */
	protected async startClientBattles() {
		const { Events } = await import("server/network/global");

		for (const [, team] of this.teams) {
			for (const [player] of team) {
				const localPlayer = player.getLocalPlayer();

				if (localPlayer) {
					Events.lotl.startBattle(localPlayer, this.packTeamData(this.teams), this.id, this.battleInfo.get());
				}
			}
		}
	}
}
