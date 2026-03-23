import { Service, OnInit } from "@flamework/core";
import { Functions } from "server/network";
import { $env } from "rbxts-transform-env";
import { isHighAuthority, PlayerAuthorityFlag, playersAtom } from "shared/atoms/players";
import { produce } from "@rbxts/better-immut";

const SV_PASSWORD = $env.string("SV_PASSWORD");

@Service({})
export class SvPassword implements OnInit {
	public onInit() {
		Functions.devCon.sv_password.setCallback((player, password) => {
			if (SV_PASSWORD !== undefined && password !== SV_PASSWORD) {
				return "Incorrect password";
			}

			if (!isHighAuthority(tostring(player.UserId))) {
				playersAtom((state) =>
					produce(state, (draft) => {
						draft[tostring(player.UserId)].authorityFlags |= PlayerAuthorityFlag.MODERATOR;
					}),
				);
				return "Authorized";
			} else {
				return "Already authorized";
			}
		});
	}
}
