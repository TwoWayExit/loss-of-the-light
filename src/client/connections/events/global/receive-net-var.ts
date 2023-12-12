import { Controller, OnInit } from "@flamework/core";
import { Events } from "client/network/global";
import { NetworkVar } from "shared/utils/network";

@Controller({})
export class ReceiveNetVar implements OnInit {
	onInit() {
		Events.receiveNetVar.connect((uuid, value, client) => {
			const netVar = NetworkVar.getVarFromId(uuid, client);

			if (!netVar) {
				warn(`[WARN] No connection found to NetworkVar ${uuid}`);
				return;
			}

			if (netVar.isValid(value)) {
				netVar.set(value);
			}
		});
	}
}
