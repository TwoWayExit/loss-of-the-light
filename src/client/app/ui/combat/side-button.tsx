import { useMotion } from "@rbxts/pretty-react-hooks";
import React from "@rbxts/react";
import { usePx } from "client/app/hooks/use-px";

export default function SideButton({
	text,
	icon,
	iconSize,
	color,
	onClick,
	height,
	width,
}: {
	text: string;
	icon: string;
	iconSize: number;
	color: Color3;
	onClick: () => void;
	height?: number;
	width?: number;
}) {
	height ??= 58;
	width ??= 265;

	const [h, s] = color.ToHSV();
	const secondaryColor = Color3.fromHSV(h, s - 0.2, 1);

	const [widthAnimated, widthMotion] = useMotion(1);

	const px = usePx();

	return (
		<textbutton
			key={text}
			BorderSizePixel={0}
			BackgroundColor3={color}
			Size={widthAnimated.map((widthMul) => UDim2.fromOffset(px(width) * widthMul, px(height)))}
			AutoButtonColor={false}
			FontFace={
				new Font("rbxasset://fonts/families/SourceSansPro.json", Enum.FontWeight.Regular, Enum.FontStyle.Normal)
			}
			TextColor3={Color3.fromRGB(0, 0, 0)}
			Text={""}
			TextSize={px(14)}
			Event={{
				MouseButton1Click: onClick,
				MouseEnter: () => {
					widthMotion.tween(1.05, {
						time: 0.5,
						style: Enum.EasingStyle.Exponential,
						direction: Enum.EasingDirection.Out,
					});
				},
				MouseLeave: () => {
					widthMotion.tween(1, {
						time: 0.5,
						style: Enum.EasingStyle.Exponential,
						direction: Enum.EasingDirection.Out,
					});
				},
			}}
		>
			<imagelabel
				key="Grain"
				BorderSizePixel={0}
				BackgroundColor3={color}
				ImageTransparency={0.23}
				ImageColor3={Color3.fromRGB(83, 83, 83)}
				Image={"rbxassetid://112838237609706"}
				Size={UDim2.fromScale(1, 1)}
				ScaleType={Enum.ScaleType.Crop}
			>
				<uicorner key="UICorner" CornerRadius={new UDim(0.1, 0)} />
			</imagelabel>
			<textlabel
				key="TextLabel"
				TextWrapped={true}
				BorderSizePixel={0}
				TextXAlignment={Enum.TextXAlignment.Right}
				BackgroundTransparency={1}
				FontFace={
					new Font(
						"rbxasset://fonts/families/AccanthisADFStd.json",
						Enum.FontWeight.Regular,
						Enum.FontStyle.Normal,
					)
				}
				Text={text.upper()}
				TextScaled={true}
				TextColor3={secondaryColor}
				AnchorPoint={new Vector2(1, 0.5)}
				TextSize={px(14)}
				Size={UDim2.fromOffset(167, 29)}
				Position={new UDim2(1, px(-35), 0.5, 0)}
			/>
			<imagelabel
				key="ImageLabel"
				BorderSizePixel={0}
				Position={new UDim2(0, 40, 0.5, 0)}
				BackgroundTransparency={1}
				ImageColor3={secondaryColor}
				AnchorPoint={new Vector2(0, 0.5)}
				Image={icon}
				Size={UDim2.fromOffset(px(iconSize), px(iconSize))}
			>
				<uiaspectratioconstraint key="UIAspectRatioConstraint" />
			</imagelabel>
			<frame
				key="Frame"
				BorderSizePixel={0}
				Position={UDim2.fromScale(0.5, 0.5)}
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				Size={new UDim2(1, px(-12), 1, px(-12))}
			>
				<uistroke key="UIStroke" Color={color} Thickness={px(2)} ApplyStrokeMode={Enum.ApplyStrokeMode.Border}>
					<uigradient
						key="UIGradient"
						Color={
							new ColorSequence([
								new ColorSequenceKeypoint(0, Color3.fromRGB(129, 129, 129)),
								new ColorSequenceKeypoint(0.5, Color3.fromRGB(186, 186, 186)),
								new ColorSequenceKeypoint(1, Color3.fromRGB(129, 129, 129)),
							])
						}
					/>
				</uistroke>
				<uicorner key="UICorner" CornerRadius={new UDim(0.1, 0)} />
			</frame>
			<uistroke key="UIStroke" Color={color} Thickness={2} ApplyStrokeMode={Enum.ApplyStrokeMode.Border}>
				<uigradient
					key="UIGradient"
					Color={
						new ColorSequence([
							new ColorSequenceKeypoint(0, Color3.fromRGB(129, 129, 129)),
							new ColorSequenceKeypoint(0.5, Color3.fromRGB(186, 186, 186)),
							new ColorSequenceKeypoint(1, Color3.fromRGB(129, 129, 129)),
						])
					}
				/>
			</uistroke>
			<uicorner key="UICorner" CornerRadius={new UDim(0.1, 0)} />
		</textbutton>
	);
}
