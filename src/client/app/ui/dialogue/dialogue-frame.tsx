import React, { useEffect } from "@rbxts/react";
import { DialogueBuilder } from "shared/lib/dialogue";
import DialogueBlinker from "./dialogue-blinker";
import DialogueName from "./dialogue-name";
import DialogueText from "./dialogue-text";
import DialogueBar from "./dialogue-bar";
import DialogueIcon from "./dialogue-icon";
import DialogueChoiceList from "./dialogue-choice-list";
import { usePx } from "client/app/hooks/use-px";

export default function DialogueFrame() {
	const px = usePx();

	// useEventListener(DialogueBuilder.dialogueStarted, () => dialogueIsActive(true));
	// useEventListener(DialogueBuilder.dialogueEnded, () => dialogueIsActive(false));

	return (
		<frame
			BorderSizePixel={0}
			Position={new UDim2(0.5, 0, 1, -70)}
			AnchorPoint={new Vector2(0.5, 1)}
			BackgroundTransparency={1}
			Size={UDim2.fromOffset(px(935), px(278))}
		>
			<DialogueIcon />
			<DialogueBar />
			<DialogueName />
			<DialogueText />
			<DialogueBlinker />
			<DialogueChoiceList />
		</frame>
	);
}
