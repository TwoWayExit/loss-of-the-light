import { Players, RunService } from "@rbxts/services";
import { Service, OnInit } from "@flamework/core";
import { batch } from "@rbxts/charm";
import { Events } from "server/network";
import { config } from "shared/config";
import { BasePlayer } from "shared/models/player";
import { addCombatant, createPlayer, PlayerAuthorityFlag, playersAtom } from "shared/atoms/players";
import "shared/models/lotl_client";
import { produce } from "@rbxts/better-immut";

@Service({})
export class PlayerService implements OnInit {
	onInit() {
		Players.PlayerAdded.Connect((player) => {
			Events.updateSharedConfig.fire(player, config);

			if (RunService.IsStudio() || (game.PrivateServerId === "" && game.PrivateServerOwnerId !== 0)) {
				playersAtom((state) =>
					produce(state, (draft) => {
						draft[tostring(player.UserId)].authorityFlags |= PlayerAuthorityFlag.MODERATOR;
					}),
				);
			}
		});

		BasePlayer.playerAdded.Connect((player) => {
			createPlayer(player.id);

			// TODO: Remove this placeholder when data loading is implemented
			if (player.getRbxPlayer()) {
				batch(() => {
					for (let i = 0; i < 3; i++) {
						addCombatant(player.id, "MaleMC");
					}
				});
			}
		});
	}
}
