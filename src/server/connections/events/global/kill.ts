import { Service, OnInit } from "@flamework/core";
import { Events } from "server/network";
import { isHighAuthority } from "shared/atoms/players";
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
				isHighAuthority(tostring(player.UserId)) ? target : player.Character,
			)?.setHealth(0);
		});
	}
}
