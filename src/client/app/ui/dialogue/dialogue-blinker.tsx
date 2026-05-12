import { useInterval, useMotion } from "@rbxts/pretty-react-hooks";
import React, { useEffect } from "@rbxts/react";
import { useAtom } from "@rbxts/react-charm";
import { dialogueIsActive } from "client/atoms/dialogue";
import { usePx } from "client/app/hooks/use-px";

const BLINK_INTERVAL = 0.35;

export default function DialogueBlinker() {
	const [alpha, alphaMotion] = useMotion(0);
	const [transparency, transparencyMotion] = useMotion(1);

	const px = usePx();
	const isActive = useAtom(dialogueIsActive);

	useEffect(() => {
		if (isActive) {
			transparencyMotion.tween(0, {
				time: 0.5,
				style: Enum.EasingStyle.Exponential,
				direction: Enum.EasingDirection.Out,
			});
		} else {
			transparencyMotion.tween(1, {
				time: 0.5,
				style: Enum.EasingStyle.Exponential,
				direction: Enum.EasingDirection.Out,
			});
		}
	}, [isActive]);

	useInterval(
		() => alphaMotion.linear(alpha.getValue() === 1 ? 0 : 1, { speed: 5 }),
		isActive ? BLINK_INTERVAL : undefined,
		{ immediate: true },
	);

	// The blinker should have two states: one where the text still goes through and one where it is visible you can
	// skip the typewritter effect or to skip directly to the next dialogue.

	// See Honkai: Star Rail's dialogue for a much better explanation.
	// I'll leave it to LapisFloof to figure it out as a refactor of the dialogue.ts is a story.

	// If skippable, use "› › ›" | If not yet skippable (i.e, delay or in a dialogue decision tree), use ". . ."

	return (
		<textlabel
			key="TextLabel"
			BorderSizePixel={0}
			BackgroundTransparency={1}
			RichText={true}
			FontFace={new Font("rbxasset://fonts/families/GothamSSm.json", Enum.FontWeight.Bold, Enum.FontStyle.Normal)}
			Text={"› › ›"}
			TextColor3={alpha.map((alpha) => Color3.fromRGB(255, 165, 55).Lerp(Color3.fromRGB(194, 126, 42), alpha))}
			TextSize={px(34)}
			TextTransparency={transparency}
			Size={UDim2.fromOffset(px(57), px(37))}
			Position={UDim2.fromScale(0.723, 0.798)}
		/>
	);
}
