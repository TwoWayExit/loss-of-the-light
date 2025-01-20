import { Component } from "@flamework/components";
import { UuidComponent } from "./uuid-component";
import { LotlPlayer } from "shared/models/lotl_player";
import { CharacterRigR6 } from "@rbxts/promise-character";

interface Attributes {
	combatants: string;
}

@Component({
	tag: "enemy",
})
export class Enemy<A extends Attributes = Attributes, I extends CharacterRigR6 = CharacterRigR6> extends UuidComponent<
	A,
	I
> {
	protected player = new LotlPlayer(this.instance, undefined, this.id);

	public constructor() {
		super();

		this.janitor.Add(this.player, "destroy");

		this.instance.AddTag("battle-trigger");
	}

	/**
	 * Gets the player associated with this enemy, may return `undefined` on the client if the id of this instance hasn't loaded yet
	 * @returns The player associated with this enemy
	 */
	public getPlayer() {
		return this.player;
	}
}
