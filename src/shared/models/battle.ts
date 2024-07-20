import { Janitor } from "@rbxts/janitor";
import { Signal } from "@rbxts/beacon";

export const enum Teams {
	TEAM1 = "Team1",
	TEAM2 = "Team2",
}

export class Battle {
	public readonly battleStarted = new Signal<void>();
	public readonly battleEnded = new Signal<void>();

	protected static battles = new Map<string, Battle>();

	protected janitor = new Janitor();

	public constructor(public readonly id: string) {
		Battle.battles.set(id, this);
	}

	public static getBattleFromId(id: string) {
		return Battle.battles.get(id);
	}

	/** @virtual */
	public startBattle() {
		// this.setFirstCombatantOfTeams(true);

		this.battleStarted.Fire();
	}

	/** @virtual */
	public stopBattle() {
		// this.setFirstCombatantOfTeams(false);

		Battle.battles.delete(this.id);

		this.janitor.Destroy();

		this.battleEnded.Fire();
	}

	// protected setFirstCombatantOfTeams(inBattle: boolean) {
	// 	for (const [, team] of this.teams) {
	// 		for (const [player] of team) {
	// 			if (inBattle) {
	// 				player.localData.activeCombatant = player.getCombatants()[0];
	// 			} else {
	// 				player.localData.activeCombatant = undefined;
	// 			}
	// 		}
	// 	}
	// }
}
