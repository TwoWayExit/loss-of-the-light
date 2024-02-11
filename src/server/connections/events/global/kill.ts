import { Service, OnInit } from "@flamework/core";
import { Events } from "server/network/global";
import { Replicas } from "server/replicas";
import { Character } from "shared/models/character";
import { LotlPlayer } from "shared/models/lotl_player";

@Service({})
export class Kill implements OnInit {
	onInit() {
		Events.devCon.kill.connect((player, target = player.Character as Character) => {
			if (!player.Character) {
				return;
			}

			LotlPlayer.getPlayerFromCharacter(
				Replicas.authorized.GetValue(player) ? target : player.Character,
			)?.setHealth(0);
		});
	}
}
