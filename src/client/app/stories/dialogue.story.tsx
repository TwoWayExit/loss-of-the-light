import DialogueFrame from "../ui/dialogue/dialogue-frame";
import React, { useEffect, useMemo } from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { DialogueBuilder } from "shared/lib/dialogue";
import { currentDialogue, dialogueIsActive, dialogueText } from "client/atoms/dialogue";
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
		const dialogue = useMemo(() => new DialogueBuilder().setName(controls.name), [controls.name]);

		useEffect(() => {
			batch(() => {
				dialogueIsActive(controls.isActive);
				dialogueText(controls.text);
				currentDialogue(dialogue.start());
			});
		}, [controls.isActive, controls.text]);

		return <DialogueFrame />;
	},
};
