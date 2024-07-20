import { Components } from "@flamework/components";
import { Controller, OnStart, OnRender } from "@flamework/core";
import { LotlMovement } from "shared/components/lotl_movement";
import { Input } from "client/modules/input";
import { PlayerNetworked } from "shared/models/player-networked";

@Controller({
	loadOrder: 0,
})
export class InputController implements OnStart, OnRender {
	public static input?: Input;

	public constructor(private components: Components) {}

	protected onPlayerAdded(player: PlayerNetworked) {
		if (player.isLocalClient()) {
			InputController.input = new Input(player);

			player.destroying.Once(() => {
				InputController.input = undefined;
			});
		}
	}

	private updateMovement() {
		const player = PlayerNetworked.getLocalClient();

		if (!player) {
			return;
		}

		const character = player.getCharacter();

		if (!character) {
			return;
		}

		const movement = this.components.getComponents<LotlMovement>(character)[0];

		if (movement && movement.move) {
			InputController.input?.getUserCommand().copy(player.command);

			movement.move.buttons = player.command.buttons;
			movement.move.forwardMove = player.command.forwardMove;
			movement.move.sideMove = player.command.sideMove;
		}
	}

	onStart() {
		const player = PlayerNetworked.getLocalClient();

		if (player) {
			this.onPlayerAdded(player);
		}
	}

	onRender() {
		this.updateMovement();
	}
}
