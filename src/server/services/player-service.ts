import { Players, RunService } from "@rbxts/services";
import { Service, OnInit } from "@flamework/core";
import { Events } from "server/network";
import { config } from "shared/config";
import { Replicas } from "server/replicas";
import { LotlPlayer } from "shared/models/lotl_player";
import { producer } from "server/producer";
import "shared/models/lotl_client";

@Service({})
export class PlayerService implements OnInit {
	onInit() {
		Players.PlayerAdded.Connect((player) => {
			Events.updateSharedConfig.fire(player, config);

			if (RunService.IsStudio() || (game.PrivateServerId === "" && game.PrivateServerOwnerId !== 0)) {
				Replicas.authorized.SetValue(player, true);
			}

			Replicas.movement.SetValue(player, Replicas.movement.GetValue(player)); // Update vars on join
		});

		LotlPlayer.playerAdded.Connect((player) => producer.addPlayer(player.id));
	}
}
