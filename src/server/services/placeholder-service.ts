import { OnStart, Service } from "@flamework/core";
import { ReplicatedStorage, Workspace } from "@rbxts/services";
import { producer } from "server/producer";
import { LotlPlayer } from "shared/models/lotl_player";

@Service({})
export class PlaceholderService implements OnStart {
	onStart() {
		LotlPlayer.playerAdded.Connect(async (player) => {
			if (!(player.id in producer.getState((state) => state.players))) {
				await producer.wait(
					(state) => state.players,
					(state) => player.id in state,
				);
			}

			for (let i = 0; i < 3; i++) {
				const character = ReplicatedStorage.combatants.MaleMC.Clone();

				// We need to parent this to something that isn't nil to be able to replicate it to the client
				character.Parent = Workspace.combatants;

				producer.addPlayerCombatant(player.id, {
					character,
					health: 100,
				});
			}
		});
	}
}
