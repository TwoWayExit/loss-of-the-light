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
		setActive: (state, isActive: boolean) => ({ ...state, isActive }),
		setName: (state, name: string) => ({ ...state, name }),
		setText: (state, text: string) => ({ ...state, text }),
		setCurrentDialogue: (state, currentDialogue?: Dialogue) => ({ ...state, currentDialogue }),
	},
);
