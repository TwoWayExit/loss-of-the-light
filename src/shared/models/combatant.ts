import { Skillset } from "shared/utils/skills";
import { BaseCharacter } from "./character";

export class Combatant extends BaseCharacter<undefined> {
	protected health = 100;
	protected maxHealth = 100;

	public constructor(
		public readonly name: string,
		character: Model,
		public readonly skillset: Skillset,
	) {
		super(character);
	}

	public getHealth() {
		return this.health;
	}

	public setHealth(health: number) {
		this.health = math.clamp(health, 0, this.maxHealth);

		return this.health;
	}

	public getMaxHealth() {
		return this.maxHealth;
	}

	public setMaxHealth(maxHealth: number) {
		this.maxHealth = maxHealth;

		this.setHealth(this.health);
	}
}
