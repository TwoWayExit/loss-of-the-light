import React from "@rbxts/react";
import { usePx } from "client/app/hooks/use-px";
import EnergyUnit from "./energy-unit";

export default function EnergyList() {
	const px = usePx();

	return (
		<frame
			key="Energy"
			BorderSizePixel={0}
			Position={new UDim2(1, px(-440), 1, px(-68))}
			BackgroundTransparency={1}
			Size={UDim2.fromOffset(px(42), px(28))}
		>
			<uilistlayout
				key="UIListLayout"
				HorizontalAlignment={Enum.HorizontalAlignment.Center}
				HorizontalFlex={Enum.UIFlexAlignment.SpaceBetween}
				VerticalAlignment={Enum.VerticalAlignment.Bottom}
				Padding={new UDim(0.1, 0)}
			/>

			{[0, 1, 2, 3, 4].map((index) => (
				<EnergyUnit available={true} index={index} />
			))}
		</frame>
	);
}
