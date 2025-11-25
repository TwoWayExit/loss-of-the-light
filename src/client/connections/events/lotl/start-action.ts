import { OnInit, Service } from "@flamework/core";
import { Events } from "client/network";

@Service({})
export class StartAction implements OnInit {
	onInit() {
		Events.lotl.startAction.connect((actionPlan) => {});
	}
}
