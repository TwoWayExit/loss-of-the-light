import { Service, OnInit } from "@flamework/core";
import { Functions } from "server/network";
import { PlayerNetworked } from "shared/models/player-networked";

@Service({})
export class Ping implements OnInit {
	onInit() {
		Functions.devCon.ping.setCallback(() => {
			const pings: { [player: string]: number } = {};

			for (const player of PlayerNetworked.getPlayers()) {
				if (!player.getLocalPlayer()) {
					continue;
				}

				pings[player.getLocalPlayer().Name] = player.getPing();
			}

			return pings;
		});
	}
}
