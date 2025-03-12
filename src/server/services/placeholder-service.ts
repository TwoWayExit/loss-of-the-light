import { OnStart, Service } from "@flamework/core";
import { ReplicatedStorage } from "@rbxts/services";
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

			producer.addPlayerCombatant(player.id, {
				character: ReplicatedStorage.combatants.MaleMC.Clone(),
				health: 100,
			});
		});
	}
}
