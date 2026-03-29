import { Janitor } from "@rbxts/janitor";
import { Signal } from "@rbxts/beacon";
import { ActionPlan, ActionType, SkillCast } from "shared/modules/battle-types";
import { $NODE_ENV } from "rbxts-transform-env";
import { playersAtom } from "shared/atoms/players";
import { Skillset } from "./skills";

export const enum Teams {
	TEAM1 = "0",
	TEAM2 = "1",
}

export abstract class Battle {
	public readonly battleStarted = new Signal<void>();
	public readonly battleEnded = new Signal<void>();

	protected static battles = new Map<string, Battle>();

	/** Destroyed on battle ended */
	protected janitor = new Janitor();

	/**
	 * A queue of callbacks to be sequentially run using `runQueue()`
	 * This is to allow delaying of the overlying promise further by simply pushing to the queue
	 * */
	protected queue = new Array<() => Promise<unknown>>();

	private runningPromises = new Array<Promise<unknown>>();
	private queuePosition = -1;

	public constructor(
		public readonly id: string,
		public readonly first: Teams,
	) {
		Battle.battles.set(id, this);

		this.janitor.Add(() => this.clearQueue());
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

	public async startAction(plan: ActionPlan) {
		print(plan);

		for (const action of plan) {
			if (action.type === ActionType.SINGLE) {
				// TypeScript is unable to infer a union type-generic member's true type, shame
				const cast = action.cast as SkillCast;
				const casterCombatant = playersAtom()[cast.casterPlayer].combatants[cast.casterCombatant];

				const skill = Skillset.getSkillset(casterCombatant).skills[cast.skill];

				this.queue.push(() =>
					skill
						.cast(cast.casterPlayer, cast.casterCombatant, cast.targetPlayer, cast.targetCombatant)
						.then((success) => {
							if (success) {
								if ($NODE_ENV === "development") {
									print(`Finished cast of skill '${skill.name}'`);
									print(cast);
								}
							} else {
								warn(`[WARN] Ignored skill cast '${skill.name}'`);
								warn(cast);
							}
						}),
				);
			} else {
				// TODO: Implement clashing
				this.queue.push(() => Promise.try(() => {}));
			}
		}

		return this.runQueue().then(() => this.clearQueue());
	}

	/** @returns The current index in a queue iteration; Returns -1 if the queue is not currently being iterated through */
	protected getQueuePosition() {
		return this.queuePosition;
	}

	protected async runQueue() {
		// Do a recursive promise iteration through the action plan to allow a smooth cancellation if needed
		const recurse = (i = 0): Promise<void> => {
			if (i === this.queue.size()) {
				this.queuePosition = -1;
				return Promise.resolve();
			}

			if ($NODE_ENV === "development") {
				print(`Got ${i + 1} in battle (${this.id}) queue...`);
			}

			this.queuePosition = i;

			return this.queue[i]().then(() => recurse(i + 1));
		};

		return recurse();
	}

	protected clearQueue() {
		for (const p of this.runningPromises) {
			p.cancel();
		}

		this.runningPromises.clear();
		this.queue.clear();
	}
}
