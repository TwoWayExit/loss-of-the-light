import { DialogueFrame } from "./dialogue-frame";
import React from "@rbxts/react";

export function Dialogue() {
	return (
		<screengui key={"Dialogue"} IgnoreGuiInset={true} ResetOnSpawn={false}>
			<DialogueFrame />
		</screengui>
	);
}
