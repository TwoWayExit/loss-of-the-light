import { Controller, OnInit } from "@flamework/core";
import { createBroadcastReceiver } from "@rbxts/reflex";
import { Events } from "client/network/global";
import { producer } from "client/producer";

@Controller({})
export class NetworkController implements OnInit {
	private setupBroadcasterReceiver() {
		const receiver = createBroadcastReceiver({
			start: () => Events.start(),
		});

		Events.dispatch.connect((actions) => receiver.dispatch(actions));

		producer.applyMiddleware(receiver.middleware);
	}

	onInit() {
		this.setupBroadcasterReceiver();
	}
}
