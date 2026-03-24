import { AutoControl } from "./auto-control";
import { GenericAutoControl } from "./generic-auto-control";
import { CombatantList } from "shared/modules/combatant-list";
import { ReplicatedStorage } from "@rbxts/services";

type AutoControlCtor<T extends AutoControl = AutoControl> = new (battleId: string, playerId: string) => T;

export interface Combatant {
	readonly baseCharacter: CombatantList[keyof CombatantList];

	readonly health: number;
	readonly energy: number;

	readonly autoControlCtor: AutoControlCtor;
}

export class CombatantBuilder {
	private baseCharacter: CombatantList[keyof CombatantList] = ReplicatedStorage.combatants.malemc;

	private health = 100;
	private energy = 5;

	private autoControlCtor: AutoControlCtor = GenericAutoControl;

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

	public setAutoControl(autoControlCtor: AutoControlCtor) {
		this.autoControlCtor = autoControlCtor;

		return this;
	}
}
