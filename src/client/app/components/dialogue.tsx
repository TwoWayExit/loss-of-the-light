import { DialogueFrame } from "./dialogue-frame";
import React from "@rbxts/react";

export function Dialogue() {
	return (
		<screengui Key={"Dialogue"} IgnoreGuiInset={true} ResetOnSpawn={false}>
			<DialogueFrame />
		</screengui>
	);
}
