import { OnInit } from "@flamework/core";
import { produce } from "@rbxts/better-immut";
import { Events } from "server/network";
import { battlesAtom } from "shared/atoms/battles";
import { playersAtom } from "shared/atoms/players";

export class SelectCombatant implements OnInit {
	onInit() {
		Events.lotl.selectCombatant.connect((player, selected) => {
			const { combatants, battleId } = playersAtom()[tostring(player.UserId)];

			if (selected < 0 || selected >= combatants.size()) {
				return;
			}

			if (battleId === undefined) {
				return;
			}

			battlesAtom((state) =>
				produce(state, (draft) => {
					draft[battleId].playerInfo[tostring(player.UserId)].selectedCombatant = selected;
				}),
			);
		});
	}
}
