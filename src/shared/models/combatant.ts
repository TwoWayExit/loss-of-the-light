import { Skillset } from "shared/utils/skills";
import { BaseCharacter } from "./character";
import { networkVar } from "shared/utils/network";

export class Combatant extends BaseCharacter<undefined> {
	protected health = networkVar<number>(100);
	protected maxHealth = networkVar<number>(100);

	public constructor(
		public readonly name: string,
		character: Model,
		public readonly skillset: Skillset,
		public readonly id: string,
	) {
		super(character);

		this.health.network(id);
		this.maxHealth.network(id);
	}

	public getHealth() {
		return this.health.get();
	}

	public setHealth(health: number) {
		this.health.set(math.clamp(health, 0, this.maxHealth.get()));

		return this.health.get();
	}

	public getMaxHealth() {
		return this.maxHealth.get();
	}

	public setMaxHealth(maxHealth: number) {
		this.maxHealth.set(maxHealth);

		this.setHealth(this.health.get());
	}
}
