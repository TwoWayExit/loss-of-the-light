import React, { useEffect } from "@rbxts/react";
import { useMotion } from "@rbxts/pretty-react-hooks";
import { useAtom } from "@rbxts/react-charm";
import { dialogueIsActive } from "client/atoms/dialogue";
import { dialogueText } from "client/atoms/dialogue";
import { usePx } from "client/app/hooks/use-px";

export default function DialogueText() {
	const isActive = useAtom(dialogueIsActive);
	const [textTransparency, textTransparencyMotion] = useMotion(0);
	const [visibleGraphemes, visibleGraphemesMotion] = useMotion(0);

	const text = useAtom(dialogueText);
	const textLength = text.size();
	const textTime = textLength * 0.03;
	const px = usePx();

	useEffect(() => {
		if (isActive) {
			textTransparencyMotion.tween(0, {
				time: 0, // weird fix for text not rendering
				//(if you have a much better solution, feel free to update),
			});
		} else {
			textTransparencyMotion.tween(1, {
				time: 0.5,
				style: Enum.EasingStyle.Exponential,
				direction: Enum.EasingDirection.Out,
			});
		}
	}, [isActive]);

	useEffect(() => {
		visibleGraphemesMotion.set(0);
		visibleGraphemesMotion.tween(textLength, { time: textTime });
	}, [text]);

	return (
		<textlabel
			key="TextLabel"
			TextWrapped={true}
			RichText={true}
			BorderSizePixel={0}
			TextXAlignment={Enum.TextXAlignment.Left}
			BackgroundTransparency={1}
			FontFace={
				new Font(
					"rbxasset://fonts/families/AccanthisADFStd.json",
					Enum.FontWeight.Regular,
					Enum.FontStyle.Normal,
				)
			}
			Text={text}
			TextTransparency={textTransparency}
			TextYAlignment={Enum.TextYAlignment.Top}
			TextColor3={Color3.fromRGB(255, 255, 255)}
			TextSize={px(21)}
			MaxVisibleGraphemes={visibleGraphemes}
			Size={UDim2.fromOffset(px(423), px(127))}
			Position={UDim2.fromScale(0.3417, 0.5041)}
		/>
	);
}
