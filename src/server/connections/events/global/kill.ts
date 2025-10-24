import { Service, OnInit } from "@flamework/core";
import { Events } from "server/network";
import { Replicas } from "server/replicas";
import { Character } from "shared/models/character";
import { BasePlayer } from "shared/models/player";

@Service({})
export class Kill implements OnInit {
	onInit() {
		Events.devCon.kill.connect((player, target = player.Character as Character) => {
			if (!player.Character) {
				return;
			}

			BasePlayer.getPlayerFromCharacter(
				Replicas.authorized.GetValue(player) ? target : player.Character,
			)?.setHealth(0);
		});
	}
}
