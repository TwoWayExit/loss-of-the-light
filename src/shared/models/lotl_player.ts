import { Dependency } from "@flamework/core";
import { Components } from "@flamework/components";
import { PlayerAnimate } from "shared/components/lotl_player-animate";
import { BasePlayer } from "./player";
import { Networked } from "shared/utils/network";

@Networked()
export class LotlPlayer<P extends Player | undefined = Player | undefined> extends BasePlayer<P> {
	// Make localPlayer the first parameter in order for Networked to automatically pass in the player
	public constructor(localPlayer?: P, character?: Model | Promise<Model>, id?: string) {
		super(character, localPlayer, id);
	}

	protected override onDied() {
		if (!this.character) {
			return;
		}

		const components = Dependency<Components>();
		const animate = components.getComponents<PlayerAnimate>(this.character)[0];
		const animations = animate?.getAnimations();

		if (animations) {
			//this.playAnimation(animations.death);
		}

		this.janitor.AddPromise(Promise.delay(4)).then(() => {
			this.respawn();
		});
	}
}
