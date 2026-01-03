import type { Constructor } from "shared/lib/util";
import { AutoControl } from "./auto-control";
import { GenericAutoControl } from "./generic-auto-control";
import { CombatantList } from "shared/modules/combatant-list";
import { ReplicatedStorage } from "@rbxts/services";

export interface Combatant {
	readonly baseCharacter: CombatantList[keyof CombatantList];
	readonly health: number;
	readonly energy: number;

	readonly autoControlCtor: Constructor<AutoControl>;
}

export class CombatantBuilder {
	private baseCharacter: CombatantList[keyof CombatantList] = ReplicatedStorage.combatants.MaleMC;
	private health = 100;
	private energy = 5;
	private autoControlCtor: Constructor<AutoControl> = GenericAutoControl;

	public getFinal(): Combatant {
		return {
			baseCharacter: this.baseCharacter,
			health: this.health,
			energy: this.energy,
			autoControlCtor: this.autoControlCtor,
		};
	}

	public setBaseCharacter(baseCharacter: CombatantList[keyof CombatantList]) {
		this.baseCharacter = baseCharacter;

		return this;
	}

	public setHealth(health: number) {
		this.health = health;

		return this;
	}

	public setEnergy(energy: number) {
		this.energy = energy;

		return this;
	}

	public setAutoControl(autoControlCtor: Constructor<AutoControl>) {
		this.autoControlCtor = autoControlCtor;

		return this;
	}
}
