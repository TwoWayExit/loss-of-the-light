import { Players, RunService, Workspace } from "@rbxts/services";
import { OnStart, OnTick } from "@flamework/core";
import { Component, BaseComponent, Components } from "@flamework/components";
import { promiseChildOfClass } from "@rbxts/promise-child";
import { PlayerCollidable } from "shared/models/player-collidable";
import { CharacterRigR15, CharacterRigR6 } from "@rbxts/promise-character";
import { validateTree, EvaluateInstanceTree } from "@rbxts/validate-tree";
import { LotlMovement } from "shared/components/lotl_movement";
import { Actions } from "shared/modules/actions";
import { $env } from "rbxts-transform-env";

interface Attributes {}

@Component({
	tag: "lotl_player-animate",
	predicate: (instance) => instance.IsDescendantOf(Workspace),
})
export class PlayerAnimate extends BaseComponent<Attributes, Model> implements OnStart, OnTick {
	protected player!: PlayerCollidable<Player | undefined>;
	protected character!: CharacterRigR6 | CharacterRigR15;

	/** @virtual */
	protected tree = {
		$className: "Folder",
	} as const;

	/** This property is only defined if the player character exists and is fully loaded */
	protected animations?: EvaluateInstanceTree<typeof this.tree>;

	public constructor(protected readonly components: Components) {
		super();
	}

	public getAnimations() {
		return this.animations as Readonly<typeof this.animations>;
	}

	public getAction() {
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

	protected animatePlayer() {
		if (!this.player.isAlive()) {
			return;
		}

		if (!this.animations) {
			return;
		}

		switch (this.getAction()) {
			case Actions.IDLE:
				this.player.stopAnimations(this.animations.GetChildren() as Animation[]);
				break;
		}
	}

	protected async verifyAnimations(character: Model) {
		const animFolder = character.FindFirstChild("anim");

		if (!animFolder || !validateTree(animFolder, this.tree)) {
			return Promise.reject(
				`Character anim folder type check fail on model '${character.GetFullName()}' (${character})`,
			);
		}

		this.animations = animFolder;

		this.player.characterDestroyed.Once(() => {
			this.animations = undefined;
		});
	}

	async onStart() {
		// Wait for the Humanoid to load first, else GetPlayerFromCharacter will always return undefined
		await promiseChildOfClass(this.instance, "Humanoid");

		const localPlayer = Players.GetPlayerFromCharacter(this.instance);

		let player;

		// If the player is not an NPC
		if (localPlayer) {
			// Animations should be played on the client in lieu of the server as a network player
			// We also don't want this component to attach to another player if we are on the client
			if (RunService.IsServer() || (RunService.IsClient() && localPlayer !== Players.LocalPlayer)) {
				this.instance.RemoveTag("lotl_player-animate");
				return;
			}

			player = PlayerCollidable.getPlayerFromLocalPlayer(localPlayer);
		} else {
			if ($env.boolean("SINGLE_PLAYER_TESTING")) {
				// Exclude this check
			} else {
				// We don't want this component to attach to an NPC on the client if it's not singleplayer
				if (RunService.IsClient() && Players.MaxPlayers > 1) {
					this.instance.RemoveTag("lotl_player-animate");
					return;
				}
			}

			player = PlayerCollidable.getPlayerFromCharacter(this.instance);
		}

		assert(player, `Could not find a player from this character (${this.instance})`);

		this.player = player;
		this.character = player.getCharacter() ?? player.characterLoaded.Wait()[0];

		this.verifyAnimations(this.character).catch((e) => warn(`[WARN] ${e}`));
	}

	onTick() {
		if (!this.player) {
			return;
		}

		this.animatePlayer();
	}
}
