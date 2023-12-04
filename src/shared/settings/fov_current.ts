import { RunService, Workspace } from "@rbxts/services";
import { Setting } from "@twowayexit/dev-con";

export const fov_current: Setting<number> = {
	value: 72,
	config: {
		min: 70,
		max: 75,

		onUpdate: (newValue) => {
			if (!RunService.IsClient()) {
				return;
			}

			Workspace.CurrentCamera!.FieldOfView = newValue;
		},
	},
};
