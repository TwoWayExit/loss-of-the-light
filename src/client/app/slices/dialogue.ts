import { createProducer } from "@rbxts/reflex";
import { Dialogue } from "shared/utils/dialogue";

export const dialogue = createProducer(
	{
		isActive: false,
		name: "",
		text: "",
		currentDialogue: undefined as Dialogue | undefined,
	},
	{
		setDialogueActive: (state, isActive: boolean) => ({ ...state, isActive }),
		setDialogueName: (state, name: string) => ({ ...state, name }),
		setDialogueText: (state, text: string) => ({ ...state, text }),
		setCurrentDialogue: (state, currentDialogue?: Dialogue) => ({ ...state, currentDialogue }),
	},
);
