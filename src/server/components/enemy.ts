import { Component } from "@flamework/components";
import { BasePlayer } from "shared/models/player";
import { UuidComponent } from "shared/components/uuid-component";
import { CharacterRigR6 } from "@rbxts/promise-character";

interface Attributes {
	combatants: string;
}

@Component({
	tag: "Enemy",
})
export class Enemy<A extends Attributes = Attributes, I extends CharacterRigR6 = CharacterRigR6> extends UuidComponent<
	A,
	I
> {
	protected player = new BasePlayer(this.instance, undefined, this.id);

	public constructor() {
		super();

		this.janitor.Add(this.player, "destroy");

		this.instance.AddTag("battle-trigger");
	}

	/**
	 * @returns The `BasePlayer` associated with this enemy
	 */
	public getPlayer() {
		return this.player;
	}
}
