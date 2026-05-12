import { useMotion } from "@rbxts/pretty-react-hooks";
import { TextService } from "@rbxts/services";
import React from "@rbxts/react";
import { usePx } from "client/app/hooks/use-px";

export default function DialogueChoice({ text, icon, onClick }: { text: string; icon: string; onClick: () => void }) {
	const px = usePx();
	const [hoverColor, hoverMotion] = useMotion(Color3.fromRGB(93, 72, 43));

	const maxTextWidth = px(265);
	const textBounds = TextService.GetTextSize(text, px(18), Enum.Font.AmaticSC, new Vector2(maxTextWidth, math.huge));
	const buttonHeight = math.max(px(35), textBounds.Y + px(20));

	return (
		<textbutton
			key="TextButton"
			AutomaticSize={Enum.AutomaticSize.Y}
			BorderSizePixel={0}
			Size={UDim2.fromOffset(px(313), buttonHeight)}
			BackgroundTransparency={1}
			TextColor3={Color3.fromRGB(0, 0, 0)}
			Event={{
				MouseButton1Click: onClick,
				MouseEnter: () => {
					hoverMotion.tween(Color3.fromRGB(235, 180, 109), {
						time: 0.5,
					});
				},
				MouseLeave: () => {
					hoverMotion.tween(Color3.fromRGB(93, 72, 43), {
						time: 0.5,
					});
				},
			}}
		>
			<imagelabel
				key="Grain"
				LayoutOrder={-1}
				ZIndex={-1}
				BorderSizePixel={0}
				BackgroundColor3={Color3.fromRGB(55, 42, 35)}
				ImageTransparency={0.23}
				ImageColor3={Color3.fromRGB(93, 72, 43)}
				Image={"rbxassetid://112838237609706"}
				Size={UDim2.fromScale(1, 1)}
				ScaleType={Enum.ScaleType.Crop}
			>
				<uicorner key="UICorner" CornerRadius={new UDim(0.1, 0)} />
			</imagelabel>

			<uicorner key="UICorner" CornerRadius={new UDim(0.07, 0)} />

			<uistroke key="UIStroke" Color={hoverColor} Thickness={2} ApplyStrokeMode={Enum.ApplyStrokeMode.Border}>
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

			<textlabel
				key="ChoiceText"
				BorderSizePixel={0}
				TextWrapped={true}
				TextYAlignment={Enum.TextYAlignment.Center}
				TextXAlignment={Enum.TextXAlignment.Left}
				BackgroundTransparency={1}
				AutomaticSize={Enum.AutomaticSize.Y}
				FontFace={
					new Font(
						"rbxasset://fonts/families/AccanthisADFStd.json",
						Enum.FontWeight.Bold,
						Enum.FontStyle.Normal,
					)
				}
				Text={text}
				TextColor3={Color3.fromRGB(255, 255, 255)}
				AnchorPoint={new Vector2(0, 0.5)}
				TextSize={px(18)}
				Size={UDim2.fromOffset(maxTextWidth, textBounds.Y)}
				Position={UDim2.fromScale(0.135, 0.5)}
			/>

			<imagelabel
				key="ChoiceIcon"
				BorderSizePixel={0}
				AnchorPoint={new Vector2(0, 0.5)}
				Position={UDim2.fromScale(0.0192, 0.5)}
				BackgroundTransparency={1}
				Image={icon}
				Size={UDim2.fromOffset(px(30), px(30))}
			/>
		</textbutton>
	);
}
