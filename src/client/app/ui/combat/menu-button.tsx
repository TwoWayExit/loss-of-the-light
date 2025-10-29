import React from "@rbxts/react";
import { usePx } from "client/app/hooks/use-px";

export default function MenuButton() {
	const px = usePx();

	return (
		<textbutton
			key="Menu"
			BorderSizePixel={0}
			BackgroundColor3={Color3.fromRGB(30, 30, 30)}
			Size={UDim2.fromOffset(px(65), px(65))}
			Position={new UDim2(1, px(-111), 0, px(28))}
			FontFace={
				new Font("rbxasset://fonts/families/SourceSansPro.json", Enum.FontWeight.Regular, Enum.FontStyle.Normal)
			}
			TextSize={14}
			BackgroundTransparency={0.35}
			TextColor3={Color3.fromRGB(0, 0, 0)}
			Text={""}
		>
			<uiaspectratioconstraint key="UIAspectRatioConstraint" />
			<uicorner key="UICorner" CornerRadius={new UDim(1, 0)} />
			<uistroke
				key="UIStroke"
				Color={Color3.fromRGB(76, 76, 76)}
				Thickness={2.4}
				ApplyStrokeMode={Enum.ApplyStrokeMode.Border}
			/>
			<frame
				key="Frame"
				BorderSizePixel={0}
				BackgroundColor3={Color3.fromRGB(30, 30, 30)}
				AnchorPoint={new Vector2(0.5, 0.5)}
				Position={UDim2.fromScale(0.5, 0.5)}
				BackgroundTransparency={0.35}
				Size={UDim2.fromScale(0.9048, 0.9048)}
			>
				<uicorner key="UICorner" CornerRadius={new UDim(1, 0)} />
				<uiaspectratioconstraint key="UIAspectRatioConstraint" />
				<imagelabel
					key="ImageLabel"
					BorderSizePixel={0}
					Position={UDim2.fromScale(0.5, 0.5)}
					BackgroundTransparency={1}
					AnchorPoint={new Vector2(0.5, 0.5)}
					Image={"rbxassetid://3926305904"}
					ImageRectSize={new Vector2(36, 36)}
					Size={UDim2.fromScale(0.6, 0.6)}
					ImageRectOffset={new Vector2(604, 684)}
				/>
			</frame>
		</textbutton>
	);
}
