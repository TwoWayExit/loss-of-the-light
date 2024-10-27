import { Service, OnInit } from "@flamework/core";
import { Functions } from "server/network";
import { Replicas } from "server/replicas";

@Service({})
export class SetMovementVar implements OnInit {
	onInit() {
		Functions.setMovementVar.setCallback((player, varName, value) => {
			if (!Replicas.authorized.GetValue(player)) {
				return "Not authorized";
			}

			Replicas.movement.SetValue("All", {
				...Replicas.movement.GetValue(player),
				[varName]: value,
			});

			return "OK";
		});
	}
}
