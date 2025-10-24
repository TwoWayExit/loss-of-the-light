import { Service, OnInit } from "@flamework/core";
import { Events } from "server/network";
import { createBroadcaster } from "@rbxts/reflex";
import { slices } from "shared/slices";
import { producer } from "server/producer";

@Service()
export class NetworkService implements OnInit {
	private setupBroadcaster() {
		const broadcaster = createBroadcaster({
			producers: slices,

			dispatch: (player, actions) => {
				Events.dispatch(player, actions);
			},
		});

		Events.start.connect((player) => broadcaster.start(player));

		producer.applyMiddleware(broadcaster.middleware);
	}

	onInit() {
		this.setupBroadcaster();
	}
}
