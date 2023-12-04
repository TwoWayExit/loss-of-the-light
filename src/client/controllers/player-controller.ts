import { Controller, OnStart } from "@flamework/core";
import { StarterGui } from "@rbxts/services";
import "client/models/lotl_player";

const MAX_RESET_BUTTON_TRIES = 15;

@Controller({})
export class PlayerController implements OnStart {
	private async disableResetButton() {
		let i = 0;

		return await Promise.retryWithDelay(
			async () => {
				i++;

				StarterGui.SetCore("ResetButtonCallback", false);
			},
			MAX_RESET_BUTTON_TRIES,
			0.5,
		).finallyReturn(i - 1);
	}

	onStart() {
		this.disableResetButton().then(
			(tries) => print(`Disable ResetButtonCallback success after ${tries} retries`),
			(tries) => warn(`Disable ResetButtonCallback failed after ${tries} retries`),
		);
	}
}
