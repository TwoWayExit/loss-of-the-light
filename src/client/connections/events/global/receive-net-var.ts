import { Controller, OnInit } from "@flamework/core";
import { Events } from "client/network/global";
import { NetworkVar } from "shared/utils/network";

@Controller({})
export class ReceiveNetVar implements OnInit {
	onInit() {
		Events.receiveNetVar.connect((client, uuid, value) => {
			const netVar = NetworkVar.getVarFromId(client, uuid);

			if (!netVar) {
				print(`No connection found to NetworkVar ${client.UserId}~${uuid}`);
				return;
			}

			if (netVar.isValid(value)) {
				netVar.set(value);
			}
		});
	}
}
