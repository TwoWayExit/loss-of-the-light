import React from "@rbxts/react";
import { usePx } from "client/app/hooks/use-px";
import { Stamina } from "./stamina";

export function StaminaFrame() {
	const px = usePx();

	return (
		<frame
			BackgroundTransparency={1}
			Position={UDim2.fromOffset(px(1418), px(684))}
			Size={UDim2.fromOffset(px(230), px(29))}
		>
			<uilistlayout HorizontalAlignment={Enum.HorizontalAlignment.Left} Padding={new UDim(0, px(35))} />

			<Stamina used={true} />
		</frame>
	);
}
