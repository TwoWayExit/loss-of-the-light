import { BaseSettings, Setting } from "@twowayexit/dev-con";
import { Functions } from "client/network/global";
import { Replicas } from "client/replicas";
import settingsList from "./settings-list";

type MovementVars = Writable<{ [i in keyof ReturnType<typeof Replicas.movement.GetValue>]: Setting<number> }>;

const movementVars: Partial<MovementVars> = {};

for (const [i, v] of pairs(Replicas.movement.GetValue())) {
	movementVars[i] = {
		value: v,
		config: {
			shouldUpdate: async (value) => {
				if (value !== value) {
					print("! | Unexpected NaN value");
					return false;
				}

				const result = await Functions.setMovementVar(i, value);

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
