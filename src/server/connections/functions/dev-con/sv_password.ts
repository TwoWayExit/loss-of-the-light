import { Service, OnInit } from "@flamework/core";
import { Functions } from "server/network/dev-con";
import { Replicas } from "server/replicas";
import { $env } from "rbxts-transform-env";

const SV_PASSWORD = $env.string("SV_PASSWORD");

@Service({})
export class SvPassword implements OnInit {
	public onInit() {
		Functions.sv_password.setCallback((player, password) => {
			if (SV_PASSWORD && password !== SV_PASSWORD) {
				return "Incorrect password";
			}

			if (!Replicas.authorized.GetValue(player)) {
				Replicas.authorized.SetValue(player, true);
				return "Authorized";
			} else {
				return "Already authorized";
			}
		});
	}
}
