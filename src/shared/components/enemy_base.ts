import { OnStart } from "@flamework/core";
import { Component } from "@flamework/components";
import { Uuid } from "./uuid";
import { LotlPlayer } from "shared/models/lotl_player";
import { CharacterRigR6 } from "@rbxts/promise-character";

interface Attributes {}

@Component({})
export class Enemy<A extends Attributes, I extends CharacterRigR6> extends Uuid<A, I> implements OnStart {
	/** @virtual */
	protected player!: LotlPlayer<undefined>;

	public constructor() {
		super();

		if (this.id) {
			this.player = new LotlPlayer(undefined, this.instance, this.id);

			this.janitor.Add(this.player);
		}
	}

	/**
	 * Gets the player associated with this enemy, may return `undefined` on the client if the id of this instance hasn't loaded yet
	 * @returns The player associated with this enemy
	 */
	public getPlayer() {
		return this.player;
	}

	protected override onIdLoaded(id: string) {
		this.player = new LotlPlayer(undefined, this.instance, id);

		this.janitor.Add(this.player);
	}

	onStart() {}
}
