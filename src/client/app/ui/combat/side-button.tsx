import React from "@rbxts/react";
import { usePx } from "client/app/hooks/use-px";

export default function SideButton({
	text,
	icon,
	color,
	onClick,
	height,
}: {
	text: string;
	icon: string;
	color: Color3;
	onClick: () => void;
	height?: number;
}) {
	height ??= 66;

	const [h, s] = color.ToHSV();

	const px = usePx();

	return (
		<textbutton
			BorderSizePixel={0}
			BackgroundColor3={color}
			Size={UDim2.fromOffset(px(337), px(height))}
			ClipsDescendants={true}
			AutoButtonColor={false}
			FontFace={
				new Font("rbxasset://fonts/families/SourceSansPro.json", Enum.FontWeight.Regular, Enum.FontStyle.Normal)
			}
			TextSize={px(14)}
			BackgroundTransparency={0.15}
			TextColor3={Color3.fromRGB(0, 0, 0)}
			Text={""}
			Event={{
				MouseButton1Click: onClick,
			}}
		>
			<uigradient
				key="UIGradient"
				Transparency={
					new NumberSequence([
						new NumberSequenceKeypoint(0, 1, 0),
						new NumberSequenceKeypoint(0.6001, 0, 0),
						new NumberSequenceKeypoint(1, 0, 0),
					])
				}
			/>
			<uistroke
				key="UIStroke"
				Color={Color3.fromHSV(h, s, 0.8)}
				Thickness={2.4}
				ApplyStrokeMode={Enum.ApplyStrokeMode.Border}
			>
				<uigradient
					key="UIGradient"
					Transparency={
						new NumberSequence([
							new NumberSequenceKeypoint(0, 1, 0),
							new NumberSequenceKeypoint(0.3019, 0, 0),
							new NumberSequenceKeypoint(1, 0, 0),
						])
					}
				/>
			</uistroke>
			<frame BackgroundTransparency={1} Size={UDim2.fromScale(1, 1)}>
				<uipadding PaddingRight={new UDim(0, px(12))} />
				<uilistlayout
					FillDirection={Enum.FillDirection.Horizontal}
					HorizontalAlignment={Enum.HorizontalAlignment.Right}
					VerticalAlignment={Enum.VerticalAlignment.Center}
					Padding={new UDim(0, px(8))}
				/>
				<imagelabel
					key="ImageLabel"
					BorderSizePixel={0}
					BackgroundTransparency={1}
					AnchorPoint={new Vector2(0, 0.5)}
					Image={icon}
					Size={UDim2.fromOffset(px(57), px(57))}
				>
					<uiaspectratioconstraint key="UIAspectRatioConstraint" />
				</imagelabel>
				<textlabel
					key="TextLabel"
					TextWrapped={true}
					BorderSizePixel={0}
					TextXAlignment={Enum.TextXAlignment.Right}
					BackgroundTransparency={1}
					FontFace={
						new Font(
							"rbxasset://fonts/families/GothamSSm.json",
							Enum.FontWeight.Bold,
							Enum.FontStyle.Normal,
						)
					}
					Text={text.upper()}
					TextScaled={true}
					TextColor3={Color3.fromRGB(255, 255, 255)}
					AnchorPoint={new Vector2(0, 0.5)}
					TextSize={px(14)}
					Size={UDim2.fromOffset(px(172), px(33))}
				/>
			</frame>
			<imagelabel
				key="ImageLabel1"
				BorderSizePixel={0}
				Position={UDim2.fromOffset(px(18), px(37))}
				BackgroundTransparency={1}
				ImageTransparency={0.95}
				AnchorPoint={new Vector2(0, 0.5)}
				Image={icon}
				Size={UDim2.fromOffset(px(124), px(124))}
			>
				<uiaspectratioconstraint key="UIAspectRatioConstraint" />
			</imagelabel>

			<uicorner key="UICorner" CornerRadius={new UDim(0.1, 0)} />
		</textbutton>
	);
}
