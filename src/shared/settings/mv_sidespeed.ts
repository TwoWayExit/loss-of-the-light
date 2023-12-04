import { RunService } from "@rbxts/services";
import { Setting } from "@twowayexit/dev-con";
import { globalReplicas } from "shared/replicas";

export const mv_sidespeed: Setting<number> = {
	value: 34,
	config: {
		shouldUpdate: async () => {
			if (RunService.IsServer()) {
				return true;
			}

			if (globalReplicas.client.authorized.GetValue()) {
				return true;
			}

			print("! | You must be authorized to set this value.");
			return false;
		},
	},
};
