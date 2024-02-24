import { CombatFrame } from "./combat-frame";
import React from "@rbxts/react";

export function Combat() {
	return (
		<screengui Key={"Combat"} IgnoreGuiInset={true} ResetOnSpawn={false}>
			<CombatFrame />
		</screengui>
	);
}
