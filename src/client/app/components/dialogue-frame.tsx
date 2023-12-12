import { Spring, useEventListener, useMotor } from "@rbxts/pretty-roact-hooks";
import { useProducer, useSelector } from "@rbxts/roact-reflex";
import { useEffect } from "@rbxts/roact-hooked";
import { RootProducer, RootState } from "../producer";
import { DialogueBuilder } from "shared/utils/dialogue";
import { DialogueName } from "./dialogue-name";
import { DialogueText } from "./dialogue-text";
import { DialogueBlinker } from "./dialogue-blinker";
import Roact from "@rbxts/roact";

export function DialogueFrame() {
	const [scale, setScale, api] = useMotor(0);

	const isActive = useSelector((state: RootState) => state.dialogue.isActive);

	const producer = useProducer<RootProducer>();

	useEventListener(DialogueBuilder.dialogueStarted, () => producer.setActive(true));
	useEventListener(DialogueBuilder.dialogueEnded, () => producer.setActive(false));

	useEffect(() => {
		if (isActive) {
			api.setState({ value: 1 }); // Need to include this, the value resets to 0 immediately on render for some reason

			setScale(new Spring(0, { frequency: 4 }));
		} else {
			setScale(new Spring(1, { frequency: 4 }));
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
