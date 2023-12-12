import { DialogueFrame } from "./dialogue-frame";
import Roact from "@rbxts/roact";

export function Dialogue() {
	return (
		<screengui Key={"Dialogue"} IgnoreGuiInset={true} ResetOnSpawn={false}>
			<DialogueFrame />
		</screengui>
	);
}
