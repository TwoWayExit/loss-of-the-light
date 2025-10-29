import React from "@rbxts/react";
import { usePx } from "client/app/hooks/use-px";

export default function Turns() {
	const px = usePx();

	return (
		<frame
			key="Turns"
			BorderSizePixel={0}
			Position={UDim2.fromOffset(px(27), px(95))}
			BackgroundTransparency={1}
			Size={UDim2.fromOffset(px(340), px(16))}
		>
			<frame
				key="Line"
				BorderSizePixel={0}
				BackgroundColor3={Color3.fromRGB(209, 209, 209)}
				Position={new UDim2(0, 0, -0.8125, 0)}
				Size={UDim2.fromScale(0.0055, 14.75)}
			>
				<uigradient
					key="UIGradient"
					Rotation={90}
					Transparency={
						new NumberSequence([
							new NumberSequenceKeypoint(0, 1, 0),
							new NumberSequenceKeypoint(0.1988, 0, 0),
							new NumberSequenceKeypoint(0.5, 0, 0),
							new NumberSequenceKeypoint(0.799, 0, 0),
							new NumberSequenceKeypoint(1, 1, 0),
						])
					}
				/>
			</frame>
			<frame
				key="Holder"
				BorderSizePixel={0}
				Position={UDim2.fromScale(0.0522, 0.0099)}
				BackgroundTransparency={1}
				Size={UDim2.fromScale(0.2747, 5.25)}
			>
				<uilistlayout key="UIListLayout" SortOrder={Enum.SortOrder.LayoutOrder} Padding={new UDim(0.1, 0)} />
				<frame
					key="PlayerTurn"
					BorderSizePixel={0}
					BackgroundColor3={Color3.fromRGB(72, 72, 72)}
					Position={UDim2.fromScale(0.98, 0.0357)}
					BackgroundTransparency={0.3}
					Size={UDim2.fromScale(0.91, 0.4286)}
				>
					<uicorner key="UICorner" CornerRadius={new UDim(0.1, 0)} />
					<frame
						key="Frame"
						BorderSizePixel={0}
						BackgroundColor3={Color3.fromRGB(213, 213, 213)}
						Position={UDim2.fromScale(-0.2, 0.4167)}
						Size={UDim2.fromScale(0.1209, 0.1111)}
					/>
					<frame
						key="Followup"
						BorderSizePixel={0}
						AnchorPoint={new Vector2(0, 0.5)}
						Position={UDim2.fromScale(1.1429, 0.5)}
						BackgroundTransparency={1}
						Size={UDim2.fromScale(0.6108, 1)}
					>
						<uilistlayout key="UIListLayout" SortOrder={Enum.SortOrder.LayoutOrder} />
						<frame
							key="Frame"
							BorderSizePixel={0}
							BackgroundColor3={Color3.fromRGB(20, 20, 20)}
							BackgroundTransparency={0.3}
							Size={UDim2.fromScale(0.4138, 1)}
						>
							<uicorner key="UICorner" CornerRadius={new UDim(0.1, 0)} />
							<imagelabel
								key="UnitImage"
								ZIndex={0}
								BorderSizePixel={0}
								ScaleType={Enum.ScaleType.Crop}
								Position={UDim2.fromScale(0.024, -0.598)}
								BackgroundTransparency={1}
								Image={"rbxassetid://15479811423"}
								ImageColor3={Color3.fromRGB(220, 220, 220)}
								Size={UDim2.fromScale(0.9752, 1.598)}
							>
								<uigradient
									key="UIGradient"
									Rotation={90}
									Transparency={
										new NumberSequence([
											new NumberSequenceKeypoint(0, 0, 0),
											new NumberSequenceKeypoint(0.7735, 0, 0),
											new NumberSequenceKeypoint(1, 1, 0),
										])
									}
								/>
							</imagelabel>
						</frame>
					</frame>
					<imagelabel
						key="Tilt"
						ZIndex={2}
						BorderSizePixel={0}
						Position={new UDim2(0, 0, -0.3655, 0)}
						BackgroundTransparency={1}
						Image={"rbxassetid://123598416693288"}
						ImageColor3={Color3.fromRGB(99, 148, 255)}
						Size={UDim2.fromScale(1, 1.3655)}
					/>
					<imagelabel
						key="UnitImage"
						ZIndex={0}
						BorderSizePixel={0}
						ScaleType={Enum.ScaleType.Crop}
						Position={UDim2.fromScale(0.024, -0.598)}
						BackgroundTransparency={1}
						Image={"rbxassetid://15479811423"}
						ImageColor3={Color3.fromRGB(220, 220, 220)}
						Size={UDim2.fromScale(0.9752, 1.598)}
					>
						<uigradient
							key="UIGradient"
							Rotation={90}
							Transparency={
								new NumberSequence([
									new NumberSequenceKeypoint(0, 0, 0),
									new NumberSequenceKeypoint(0.7735, 0, 0),
									new NumberSequenceKeypoint(1, 1, 0),
								])
							}
						/>
					</imagelabel>
				</frame>
				<frame
					key="EnemyTurn"
					BorderSizePixel={0}
					BackgroundColor3={Color3.fromRGB(20, 20, 20)}
					Position={UDim2.fromScale(0.98, 0.0357)}
					BackgroundTransparency={0.3}
					Size={UDim2.fromScale(0.91, 0.4286)}
				>
					<uicorner key="UICorner" CornerRadius={new UDim(0.1, 0)} />
					<frame
						key="Frame"
						BorderSizePixel={0}
						BackgroundColor3={Color3.fromRGB(213, 213, 213)}
						Position={UDim2.fromScale(-0.2, 0.4167)}
						Size={UDim2.fromScale(0.1209, 0.1111)}
					/>
					<frame
						key="Followup"
						BorderSizePixel={0}
						AnchorPoint={new Vector2(0, 0.5)}
						Position={UDim2.fromScale(1.1429, 0.5)}
						BackgroundTransparency={1}
						Size={UDim2.fromScale(0.6108, 1)}
					>
						<uilistlayout key="UIListLayout" SortOrder={Enum.SortOrder.LayoutOrder} />
					</frame>
					<imagelabel
						key="ImageLabel"
						ZIndex={2}
						BorderSizePixel={0}
						Position={new UDim2(0, 0, -0.3655, 0)}
						BackgroundTransparency={1}
						Image={"rbxassetid://123598416693288"}
						ImageColor3={Color3.fromRGB(179, 25, 25)}
						Size={UDim2.fromScale(1, 1.3655)}
					/>
					<imagelabel
						key="EnemyImage"
						ZIndex={0}
						BorderSizePixel={0}
						ScaleType={Enum.ScaleType.Crop}
						Position={UDim2.fromScale(0.024, 0.0)}
						BackgroundTransparency={1}
						Image={"rbxassetid://15479811423"}
						ImageColor3={Color3.fromRGB(220, 220, 220)}
						Size={UDim2.fromScale(0.9752, 1.3485)}
					>
						<uigradient
							key="UIGradient"
							Rotation={90}
							Transparency={
								new NumberSequence([
									new NumberSequenceKeypoint(0, 0, 0),
									new NumberSequenceKeypoint(0.4918, 0, 0),
									new NumberSequenceKeypoint(0.7683, 1, 0),
									new NumberSequenceKeypoint(1, 1, 0),
								])
							}
						/>
					</imagelabel>
				</frame>
			</frame>
		</frame>
	);
}
