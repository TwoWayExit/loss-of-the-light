import { Players, RunService } from "@rbxts/services";
import { Setting } from "@twowayexit/dev-con";
import { isHighAuthority } from "shared/atoms/players";

export const mv_sidespeed: Setting<number> = {
	value: 34,
	config: {
		shouldUpdate: async () => {
			if (RunService.IsServer()) {
				return true;
			}

			if (isHighAuthority(tostring(Players.LocalPlayer.UserId))) {
				return true;
			}

			print("! | You must be authorized to set this value.");
			return false;
		},
	},
};
