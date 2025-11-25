import { Players, ReplicatedStorage, RunService, Workspace } from "@rbxts/services";
import { Service, OnInit } from "@flamework/core";
import { batch } from "@rbxts/charm";
import { Events } from "server/network";
import { config } from "shared/config";
import { Replicas } from "server/replicas";
import { BasePlayer } from "shared/models/player";
import { addCombatant, createPlayer, playersAtom } from "shared/atoms/players";
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

		BasePlayer.playerAdded.Connect((player) => {
			playersAtom((state) => createPlayer(state, player.id));

			// TODO: Remove this placeholder when data loading is implemented
			if (player.getRbxPlayer()) {
				batch(() => {
					for (let i = 0; i < 3; i++) {
						const character = ReplicatedStorage.combatants.MaleMC.Clone();

						// We need to parent this to something that isn't nil to be able to replicate it to the client
						character.Parent = Workspace.combatants;

						playersAtom((state) =>
							addCombatant(state, player.id, {
								character,
								health: 100,
							}),
						);
					}
				});
			}
		});
	}
}
