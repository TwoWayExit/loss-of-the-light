import { useInterval, useMotion } from "@rbxts/pretty-react-hooks";
import { useSelector } from "@rbxts/react-reflex";
import { linear } from "@rbxts/ripple";
import { RootState } from "client/producer";
import React from "@rbxts/react";

const BLINK_INTERVAL = 0.35;

export function DialogueBlinker() {
	const [alpha, motion] = useMotion(0);

	const isActive = useSelector((state: RootState) => state.dialogue.isActive);

	useInterval(
		() => motion.to(linear(alpha.getValue() === 1 ? 0 : 1, { speed: 5 })),
		isActive ? BLINK_INTERVAL : undefined,
		{ immediate: true },
	);

	return (
		<textlabel
			key={"MakeThisThingBlink"}
			BackgroundTransparency={1}
			Font={Enum.Font.Unknown}
			FontFace={new Font("rbxassetid://12187367362", Enum.FontWeight.Regular, Enum.FontStyle.Normal)}
			Position={new UDim2(0.899, 0, 0.782, 0)}
			RichText={true}
			SelectionOrder={1}
			Size={new UDim2(0.08700000000000001, 0, 0.163, 0)}
			Text={">>>"}
			TextColor3={alpha.map((alpha) => Color3.fromRGB(255, 255, 255).Lerp(Color3.fromRGB(140, 140, 140), alpha))}
			TextSize={40}
			TextStrokeTransparency={0}
			TextWrapped={true}
		/>
	);
}
