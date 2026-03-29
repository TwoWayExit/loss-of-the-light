import { Players, RunService, Workspace } from "@rbxts/services";
import { OnStart, OnTick } from "@flamework/core";
import { Component, Components } from "@flamework/components";
import { promiseChildOfClass } from "@rbxts/promise-child";
import { PlayerCollidable } from "shared/models/player-collidable";
import { CharacterRigR15, CharacterRigR6 } from "@rbxts/promise-character";
import { LotlMovement } from "shared/components/lotl_movement";
import { Actions } from "shared/modules/actions";
import { $env } from "rbxts-transform-env";
import { atom, subscribe } from "@rbxts/charm";
import { DisposableComponent } from "./disposable-component";
import assetInstances from "shared/asset-instances";

interface Attributes {}

@Component({
	tag: "PlayerAnimate",
	predicate: (instance) => instance.IsDescendantOf(Workspace),
})
export class PlayerAnimate extends DisposableComponent<Attributes, Model> implements OnStart, OnTick {
	protected player!: PlayerCollidable<Player | undefined>;
	protected character!: CharacterRigR6 | CharacterRigR15;

	protected action = atom<Actions>(Actions.IDLE);

	/** @virtual */
	protected tree = {
		$className: "Folder",
	} as const;

	public constructor(protected readonly components: Components) {
		super();
	}

	public getAction() {
		return this.action();
	}

	protected evaluateAction() {
		const character = this.player.getCharacter();

		if (!character) {
			return Actions.IDLE;
		}

		const movement = this.components.getComponents<LotlMovement>(character)[0];

		if (!movement) {
			return Actions.IDLE;
		}

		const velocity = movement.getVelocity();

		// Just in case the velocity hasn't loaded in yet
		if (!velocity) {
			return Actions.IDLE;
		}

		if (velocity.Magnitude > 0) {
			return Actions.WALK;
		}

		return Actions.IDLE;
	}

	protected animatePlayer(action: Actions) {
		if (!this.player.isAlive()) {
			return;
		}

		const animationHandler = this.player.getAnimationHandler();

		if (!animationHandler) {
			return;
		}

		animationHandler.stopAllAnimations();

		switch (action) {
			case Actions.IDLE:
				animationHandler.playAnimation(assetInstances.animations["general/idle"]);
				break;
		}
	}

	async onStart() {
		// Wait for the Humanoid to load first, else GetPlayerFromCharacter will always return undefined
		await promiseChildOfClass(this.instance, "Humanoid");

		const rbxPlayer = Players.GetPlayerFromCharacter(this.instance);

		let player;

		// If the player is not an NPC
		if (rbxPlayer) {
			// Animations should be played on the client in lieu of the server as a network player
			// We also don't want this component to attach to another player if we are on the client
			if (RunService.IsServer() || (RunService.IsClient() && rbxPlayer !== Players.LocalPlayer)) {
				this.instance.RemoveTag("player-animate");
				return;
			}

			player = PlayerCollidable.getPlayerFromRbxPlayer(rbxPlayer);
		} else {
			if ($env.boolean("SINGLE_PLAYER_TESTING")) {
				// Exclude this check
			} else {
				// We don't want this component to attach to an NPC on the client if it's not singleplayer
				if (RunService.IsClient() && Players.MaxPlayers > 1) {
					this.instance.RemoveTag("player-animate");
					return;
				}
			}

			player = PlayerCollidable.getPlayerFromCharacter(this.instance);
		}

		assert(player, `Could not find a player from this character (${this.instance})`);

		this.player = player;
		this.character = player.getCharacter() ?? player.characterLoaded.Wait()[0];

		this.janitor.Add(
			subscribe(this.action, (action) => {
				this.animatePlayer(action);
			}),
		);

		// Start animating the default action
		this.animatePlayer(this.action());
	}

	onTick() {
		if (!this.player) {
			return;
		}

		this.action(this.evaluateAction());
	}
}
