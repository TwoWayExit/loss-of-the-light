import React from "@rbxts/react";
import { usePx } from "client/app/hooks/use-px";
import { CombatantInfo } from "server/models/combatant";

export default function Combatant({
	index,
	info,
	icon = "rbxassetid://15479811423",
}: {
	index: number;
	info: CombatantInfo;
	icon?: string;
}) {
	const scale = 1 - 0.15 * index;

	const px = usePx();

	return (
		<frame key={index} BorderSizePixel={0} BackgroundTransparency={1} Size={UDim2.fromOffset(px(207), px(216))}>
			<uiscale Scale={scale} />
			<imagelabel
				key="UnitImage"
				BorderSizePixel={0}
				ScaleType={Enum.ScaleType.Crop}
				Position={UDim2.fromOffset(px(4), px(17))}
				BackgroundTransparency={1}
				Image={icon}
				ImageColor3={Color3.fromRGB(220, 220, 220)}
				Size={UDim2.fromOffset(px(201), px(171))}
			/>
			<frame
				key="UltimateBar"
				ZIndex={2}
				BorderSizePixel={0}
				BackgroundColor3={Color3.fromRGB(21, 21, 21)}
				Position={UDim2.fromOffset(px(198), px(17))}
				Size={UDim2.fromOffset(px(8), px(162))}
			>
				<frame
					key="Bar"
					BorderSizePixel={0}
					BackgroundColor3={Color3.fromRGB(214, 164, 49)}
					AnchorPoint={new Vector2(0.5, 0)}
					Position={new UDim2(0.5, 0, 0, 0)}
					Size={UDim2.fromScale(1, 1)}
				/>
				<uistroke
					key="UIStroke"
					Color={Color3.fromRGB(76, 76, 76)}
					Thickness={2.4}
					ApplyStrokeMode={Enum.ApplyStrokeMode.Border}
				/>
			</frame>
			<frame
				key="Health"
				BorderSizePixel={0}
				BackgroundColor3={Color3.fromRGB(21, 21, 21)}
				Position={new UDim2(0, 0, 0, px(196))}
				Size={UDim2.fromOffset(px(206), px(-7))}
			>
				<frame
					key="Bar"
					BorderSizePixel={0}
					BackgroundColor3={Color3.fromRGB(255, 255, 255)}
					Position={new UDim2(-0.0, 0, -0, 0)}
					Size={UDim2.fromScale(1.0, 1)}
				>
					<uigradient
						key="UIGradient"
						Color={
							new ColorSequence([
								new ColorSequenceKeypoint(0, Color3.fromRGB(59, 173, 39)),
								new ColorSequenceKeypoint(0.6107, Color3.fromRGB(147, 255, 101)),
								new ColorSequenceKeypoint(1, Color3.fromRGB(159, 255, 56)),
							])
						}
					/>
				</frame>
				<uistroke
					key="UIStroke"
					Color={Color3.fromRGB(76, 76, 76)}
					Thickness={2.4}
					ApplyStrokeMode={Enum.ApplyStrokeMode.Border}
				/>
			</frame>
			<uiaspectratioconstraint key="UIAspectRatioConstraint" AspectRatio={0.9585} />
			<textlabel
				key="Number"
				TextWrapped={true}
				BorderSizePixel={0}
				BackgroundTransparency={0.2}
				FontFace={
					new Font("rbxasset://fonts/families/TitilliumWeb.json", Enum.FontWeight.Bold, Enum.FontStyle.Normal)
				}
				Text={tostring(index + 1)}
				TextScaled={true}
				BackgroundColor3={Color3.fromRGB(42, 42, 42)}
				TextColor3={Color3.fromRGB(255, 184, 69)}
				Position={UDim2.fromOffset(px(151), px(145))}
				TextSize={14}
				Size={UDim2.fromOffset(px(35), px(35))}
			>
				<uiaspectratioconstraint key="UIAspectRatioConstraint" />
				<uicorner key="UICorner" CornerRadius={new UDim(1, 0)} />
				<uistroke
					key="UIStroke"
					Color={Color3.fromRGB(168, 168, 168)}
					Thickness={px(3)}
					ApplyStrokeMode={Enum.ApplyStrokeMode.Border}
				/>
			</textlabel>
			<textlabel
				key="Health1"
				TextWrapped={true}
				TextStrokeTransparency={0.35}
				BorderSizePixel={0}
				TextXAlignment={Enum.TextXAlignment.Left}
				BackgroundTransparency={1}
				FontFace={
					new Font("rbxasset://fonts/families/Nunito.json", Enum.FontWeight.Bold, Enum.FontStyle.Normal)
				}
				Text={tostring(info.health)}
				TextScaled={true}
				TextColor3={Color3.fromRGB(255, 255, 255)}
				Position={UDim2.fromOffset(px(4), px(162))}
				TextSize={14}
				Size={UDim2.fromOffset(px(169), px(19))}
			/>
		</frame>
	);
}
