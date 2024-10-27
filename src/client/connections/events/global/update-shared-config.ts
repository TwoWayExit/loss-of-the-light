import { Controller, OnInit } from "@flamework/core";
import { Events } from "client/network";
import { config } from "shared/config";

@Controller({})
export class UpdateSharedConfig implements OnInit {
	onInit() {
		Events.updateSharedConfig.connect((update) => {
			for (const [i, v] of pairs(update)) {
				config[i] = v;
			}
		});
	}
}
