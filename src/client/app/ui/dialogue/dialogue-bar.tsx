import React, { useEffect } from "@rbxts/react";
import { useMotion } from "@rbxts/pretty-react-hooks";
import { useAtom } from "@rbxts/react-charm";
import { dialogueIsActive } from "client/atoms/dialogue";
import { usePx } from "client/app/hooks/use-px";

export default function DialogueBar() {
	const [width, widthMotion] = useMotion(0);
	const isActive = useAtom(dialogueIsActive);
	const px = usePx();

	useEffect(() => {
		if (isActive) {
			widthMotion.tween(1, {
				time: 0.5,
				style: Enum.EasingStyle.Exponential,
				direction: Enum.EasingDirection.Out,
			});
		} else {
			widthMotion.tween(0, {
				time: 0.5,
				style: Enum.EasingStyle.Exponential,
				direction: Enum.EasingDirection.Out,
			});
		}
	}, [isActive]);

	return (
		<frame
			key="SeperatedBar"
			BorderSizePixel={0}
			BackgroundColor3={Color3.fromRGB(255, 165, 55)}
			Position={UDim2.fromScale(0.3417, 0.4572)}
			Size={width.map((widthMul) => UDim2.fromOffset(px(424) * widthMul, px(3)))}
		/>
	);
}
