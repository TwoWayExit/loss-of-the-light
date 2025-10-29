import React from "@rbxts/react";
import { usePx } from "client/app/hooks/use-px";

export default function EnergyUnit({ available, index }: { available: boolean; index: number }) {
	const px = usePx();

	return (
		<frame
			key="Frame"
			BorderSizePixel={0}
			BackgroundColor3={Color3.fromRGB(239, 239, 239)}
			Position={new UDim2(-0.0, 0, 0, 0)}
			Size={UDim2.fromOffset(px(5), px(28))}
		>
			<uistroke key="UIStroke" Color={Color3.fromRGB(76, 76, 76)} ApplyStrokeMode={Enum.ApplyStrokeMode.Border} />
		</frame>
	);
}
