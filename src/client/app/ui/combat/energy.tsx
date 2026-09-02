import { useMotion } from "@rbxts/pretty-react-hooks";
import React, { useEffect } from "@rbxts/react";
import { useComponentLifetime } from "@rbxts/react-lifetime-component";
import { usePx } from "client/app/hooks/use-px";

export default function Energy(props: { index: number; energy: number; maxEnergy: number }) {
	const { index, energy, maxEnergy } = props;
	const [colorAlpha, colorMotion] = useMotion(0);
	const [sizeMul, sizeMotion] = useMotion(0);
	const px = usePx();

	useEffect(() => {
		if (index + 1 <= energy) {
			colorMotion.tween(1, {
				time: 0.2,
			});
		} else {
			colorMotion.tween(0, {
				time: 0.2,
			});
		}
	}, [energy]);

	useEffect(() => {
		if (index + 1 > maxEnergy) {
			sizeMotion.tween(0, {
				time: 0.2,
			});
		} else {
			sizeMotion.tween(1, {
				time: 0.2,
			});
		}
	}, [maxEnergy]);

	useComponentLifetime(props, 0.2);

	return (
		<imagelabel
			key="Energy"
			BorderSizePixel={0}
			Position={new UDim2(0.328, 0, 0, 0)}
			BackgroundTransparency={1}
			ImageColor3={colorAlpha.map((alpha) =>
				Color3.fromRGB(73, 68, 89).Lerp(Color3.fromRGB(227, 158, 61), alpha),
			)}
			Image={"rbxassetid://14502433595"}
			Size={sizeMul.map((size) => UDim2.fromOffset(px(32) * size, px(32) * size))}
			LayoutOrder={-index}
		>
			<uiaspectratioconstraint key="UIAspectRatioConstraint" />
		</imagelabel>
	);
}
