import { Service, OnInit } from "@flamework/core";
import { Players } from "@rbxts/services";
import { Functions } from "server/network";

@Service({})
export class Ping implements OnInit {
	onInit() {
		Functions.devCon.ping.setCallback(() => {
			const pings: { [player: string]: number } = {};

			for (const player of Players.GetPlayers()) {
				pings[player.Name] = player.GetNetworkPing();
			}

			return pings;
		});
	}
}
