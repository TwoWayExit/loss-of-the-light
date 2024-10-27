import { useEventListener, useMotion } from "@rbxts/pretty-react-hooks";
import { useProducer, useSelector } from "@rbxts/react-reflex";
import { config, spring } from "@rbxts/ripple";
import { RootProducer, RootState } from "../../../producer";
import { DialogueBuilder } from "shared/utils/dialogue";
import { DialogueName } from "./dialogue-name";
import { DialogueText } from "./dialogue-text";
import { DialogueBlinker } from "./dialogue-blinker";
import React, { useEffect } from "@rbxts/react";

export function DialogueFrame() {
	const [scale, motion] = useMotion(1);

	const isActive = useSelector((state: RootState) => state.dialogue.isActive);

	const producer = useProducer<RootProducer>();

	useEventListener(DialogueBuilder.dialogueStarted, () => producer.setDialogueActive(true));
	useEventListener(DialogueBuilder.dialogueEnded, () => producer.setDialogueActive(false));

	useEffect(() => {
		if (isActive) {
			motion.to(spring(0, config.spring.gentle));
		} else {
			motion.to(spring(1, config.spring.gentle));
		}
	}, [isActive]);

	return (
		<frame
			BackgroundColor3={Color3.fromRGB(59, 55, 53)}
			BackgroundTransparency={0}
			BorderColor3={Color3.fromRGB(85, 79, 77)}
			BorderSizePixel={4}
			Position={scale.map((scale) => UDim2.fromScale(0.159, 0.593).Lerp(UDim2.fromScale(0.159, 1.04), scale))}
			Size={UDim2.fromScale(0.652, 0.319)}
		>
			<DialogueName />
			<DialogueText />
			<DialogueBlinker />
		</frame>
	);
}
