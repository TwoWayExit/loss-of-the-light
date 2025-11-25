import { Service, OnInit } from "@flamework/core";
import { produce } from "@rbxts/better-immut";
import { Events } from "server/network";
import { battlesAtom } from "shared/atoms/battles";
import { playersAtom } from "shared/atoms/players";

@Service({})
export class FinishTurn implements OnInit {
	onInit() {
		Events.lotl.finishTurn.connect((player) => {
			const battleId = playersAtom()[tostring(player.UserId)].battleId;

			if (!battleId) {
				return;
			}

			if (battlesAtom()[battleId].playerInfo[tostring(player.UserId)].turnFinished) {
				return;
			}

			battlesAtom((state) =>
				produce(state, (draft) => {
					draft[battleId].playerInfo[tostring(player.UserId)].turnFinished = true;
				}),
			);
		});
	}
}
