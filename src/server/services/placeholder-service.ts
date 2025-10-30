import { OnStart, Service } from "@flamework/core";
import { batch, observe } from "@rbxts/charm";
import { Players, ReplicatedStorage, Workspace } from "@rbxts/services";
import { addCombatant, playersAtom } from "shared/atoms/players";

@Service({})
export class PlaceholderService implements OnStart {
	onStart() {
		observe(playersAtom, (player, playerId) => {
			const numId = tonumber(playerId);

			if (!numId || !Players.GetPlayerByUserId(numId) || player.combatants.size() > 0) {
				return;
			}

			batch(() => {
				for (let i = 0; i < 3; i++) {
					const character = ReplicatedStorage.combatants.MaleMC.Clone();

					// We need to parent this to something that isn't nil to be able to replicate it to the client
					character.Parent = Workspace.combatants;

					playersAtom((state) =>
						addCombatant(state, playerId as string, {
							character,
							health: 100,
						}),
					);
				}
			});
		});
	}
}
