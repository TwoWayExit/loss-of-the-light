import { RunService } from "@rbxts/services";
import { Setting } from "@twowayexit/dev-con";
import { DevConFunctions } from "shared/network/dev-con";

const sv_password: Setting<string> = {
	value: "",
	config: {
		shouldUpdate: async (newValue) => {
			if (RunService.IsServer()) {
				return false;
			}

			try {
				const result = await DevConFunctions.client.sv_password(newValue);

				print(`! | ${result}`);

				if (result.lower().find("incorrect")[0] !== undefined) {
					return false;
				}

				return true;
			} catch (e) {
				warn(`! | You are being rate limited`);
				return false;
			}
		},
	},
};

export { sv_password };
