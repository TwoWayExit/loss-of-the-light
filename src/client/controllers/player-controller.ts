import { Controller, OnStart } from "@flamework/core";
import { StarterGui } from "@rbxts/services";
import "shared/models/lotl_client";

const MAX_RESET_BUTTON_TRIES = 15;

@Controller({})
export class PlayerController implements OnStart {
	private disableResetButton() {
		let i = 0;

		return Promise.retryWithDelay(
			async () => {
				i++;

				try {
					StarterGui.SetCore("ResetButtonCallback", false);
				} catch {
					return Promise.reject("");
				}
			},
			MAX_RESET_BUTTON_TRIES,
			0.5,
		).finally(() => i - 1);
	}

	onStart() {
		this.disableResetButton().then(
			(tries) => print(`Disable ResetButtonCallback success after ${tries} retries`),
			(tries) => warn(`Disable ResetButtonCallback failed after ${tries} retries`),
		);
	}
}
