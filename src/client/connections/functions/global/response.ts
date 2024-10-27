import { Controller, OnStart, OnInit } from "@flamework/core";
import { Functions } from "client/network";
import { extensions } from "client/controllers/dev-con/extensions";

@Controller()
export class Response implements OnStart, OnInit {
	private timeout = 10;
	private checkInterval = 1;
	private lastResponse = -1;

	private isTimedOut = false;

	async onStart() {
		for (;;) {
			if (this.lastResponse !== -1) {
				if (time() - this.lastResponse >= this.timeout) {
					try {
						this.isTimedOut = true;

						await extensions.startConnectionProblem();
					} catch (e) {
						this.isTimedOut = false;

						print("! | Regained connection");
					}
				}
			}

			task.wait(this.checkInterval);
		}
	}

	onInit() {
		Functions.response.setCallback((key) => {
			this.lastResponse = time();

			if (this.isTimedOut) {
				extensions.stopConnectionProblem();
			}

			return key;
		});
	}
}
