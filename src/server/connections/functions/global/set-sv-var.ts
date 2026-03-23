import { Service, OnInit } from "@flamework/core";
import { Functions } from "server/network";
import { isHighAuthority } from "shared/atoms/players";
import { svVarsAtom } from "shared/atoms/sv-vars";

@Service({})
export class SetSvVar implements OnInit {
	onInit() {
		Functions.setSvVar.setCallback((player, varName, value) => {
			if (!isHighAuthority(tostring(player.UserId))) {
				return "Not authorized";
			}

			svVarsAtom((state) => ({
				...state,
				[varName]: value,
			}));

			return "OK";
		});
	}
}
