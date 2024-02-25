import { CombatFrame } from "./combat-frame";
import React from "@rbxts/react";

export function Combat() {
	return (
		<screengui key={"Combat"} IgnoreGuiInset={true} ResetOnSpawn={false}>
			<CombatFrame />
		</screengui>
	);
}
