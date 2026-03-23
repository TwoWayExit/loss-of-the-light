import { BaseSettings, Setting } from "@twowayexit/dev-con";
import { Functions } from "client/network";
import settingsList from "./settings-list";
import { svVarsAtom } from "shared/atoms/sv-vars";
import { StateOf } from "@rbxts/charm";

type MovementVars = { [i in keyof StateOf<typeof svVarsAtom>]: Setting<number> };

const movementVars: Partial<MovementVars> = {};

for (const [i, v] of pairs(svVarsAtom())) {
	movementVars[i] = {
		value: v,
		config: {
			shouldUpdate: async (value) => {
				if (value !== value) {
					print("! | Unexpected NaN value");
					return false;
				}

				const result = await Functions.setSvVar(i, value);

				print(`! | ${result}`);

				if (result.lower().find("not authorized")[0] !== undefined) {
					return false;
				}

				return true;
			},
		},
	};
}

export const settings = new BaseSettings({
	...(movementVars as MovementVars),
	...settingsList,
});
