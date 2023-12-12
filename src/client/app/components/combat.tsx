import { CombatFrame } from "./combat-frame";
import Roact from "@rbxts/roact";

export function Combat() {
	return (
		<screengui Key={"Combat"} IgnoreGuiInset={true} ResetOnSpawn={false}>
			<CombatFrame />
		</screengui>
	);
}
