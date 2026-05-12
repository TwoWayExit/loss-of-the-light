import React, { useEffect } from "@rbxts/react";
import { useMotion } from "@rbxts/pretty-react-hooks";
import { useAtom } from "@rbxts/react-charm";
import { dialogueIsActive } from "client/atoms/dialogue";
import { usePx } from "client/app/hooks/use-px";

export default function DialogueIcon() {
	const [xPosition, xPositionMotion] = useMotion(2);
	const [transparency, transparencyMotion] = useMotion(1);
	const isActive = useAtom(dialogueIsActive);
	const px = usePx();

	useEffect(() => {
		if (isActive) {
			xPositionMotion.set(2);
			xPositionMotion.tween(1, {
				time: 0.5,
				style: Enum.EasingStyle.Exponential,
				direction: Enum.EasingDirection.Out,
			});

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

	return (
		<imagelabel
			key="Icon"
			ZIndex={2}
			BorderSizePixel={0}
			Position={xPosition.map((xPositionMulti) => UDim2.fromScale(0.108 * xPositionMulti, 0.008))}
			BackgroundTransparency={1}
			ImageTransparency={transparency}
			Image={"rbxassetid://134488366773164"} // since we don't have a modular thing yet for combatants and stuff
			Size={UDim2.fromOffset(px(206), px(275))}
			ScaleType={Enum.ScaleType.Fit}
		>
			<uigradient
				key="UIGradient"
				Rotation={45}
				Transparency={
					new NumberSequence([
						new NumberSequenceKeypoint(0, 1, 0),
						new NumberSequenceKeypoint(0.1024, 0, 0),
						new NumberSequenceKeypoint(0.4993, 0, 0),
						new NumberSequenceKeypoint(0.8267, 1, 0),
						new NumberSequenceKeypoint(1, 1, 0),
					])
				}
			/>
		</imagelabel>
	);
}
