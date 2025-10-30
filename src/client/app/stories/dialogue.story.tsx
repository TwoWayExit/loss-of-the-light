import DialogueFrame from "../ui/dialogue/dialogue-frame";
import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { DialogueBuilder } from "shared/utils/dialogue";
import { currentDialogue, dialogueIsActive, dialogueText } from "../atoms/dialogue";
import { batch } from "@rbxts/charm";

interface Controls {
	isActive: boolean;
	name: string;
	text: string;
}

export = {
	react: React,
	reactRoblox: ReactRoblox,

	controls: identity<Controls>({
		isActive: true,
		name: "",
		text: "",
	}),

	story: ({ controls }: { controls: Controls }) => {
		const dialogue = new DialogueBuilder().setName(controls.name);

		batch(() => {
			dialogueIsActive(controls.isActive);
			dialogueText(controls.text);
			currentDialogue(dialogue.start());
		});

		return <DialogueFrame />;
	},
};
