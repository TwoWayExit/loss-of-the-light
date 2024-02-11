import { Setting } from "@twowayexit/dev-con";
import { Functions } from "client/network/global";

const sv_password: Setting<string> = {
	value: "",
	config: {
		shouldUpdate: async (newValue) => {
			try {
				const result = await Functions.devCon.sv_password(newValue);

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
