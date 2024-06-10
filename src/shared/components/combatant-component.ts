import { Reflect } from "@flamework/core";
import { Component } from "@flamework/components";
import { Workspace } from "@rbxts/services";
import { DisposableComponent } from "./disposable-component";
import { Combatant } from "shared/models/combatant";
import { Character } from "shared/models/character";

interface Attributes {
	combatant: string;
}

@Component({
	ancestorWhitelist: [Workspace],
})
export abstract class CombatantComponent<A extends {} = {}> extends DisposableComponent<A & Attributes, Character> {
	/** @virtual */
	protected combatant!: Combatant;

	/**
	 * This must be called in the overriden constructor with the overriden combatant property
	 * @param combatant - The overriden combatant property
	 */
	protected init(combatant: Combatant) {
		Reflect.defineMetadata(this.instance, "combatant", combatant);
	}
}
