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
		this.battleStarted.Fire();
	}

	/** @virtual */
	public stopBattle() {
		Battle.battles.delete(this.id);

		this.janitor.Destroy();

		this.battleEnded.Fire();
	}
}
