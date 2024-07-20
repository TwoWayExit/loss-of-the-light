import { Controller, OnStart } from "@flamework/core";
import { StarterGui } from "@rbxts/services";
import "shared/models/lotl_client";

const MAX_RESET_BUTTON_TRIES = 15;

@Controller({})
export class PlayerController implements OnStart {
	private async disableResetButton() {
		let i = 0;

		return Promise.retryWithDelay(
			async () => {
				i++;

				StarterGui.SetCore("ResetButtonCallback", false);

				return i - 1;
			},
			MAX_RESET_BUTTON_TRIES,
			0.5,
		);
	}

	onStart() {
		this.disableResetButton().then(
			(tries) => print(`Disable ResetButtonCallback success after ${tries} retries`),
			() => warn(`Disable ResetButtonCallback failed after ${MAX_RESET_BUTTON_TRIES} retries`),
		);
	}
}
