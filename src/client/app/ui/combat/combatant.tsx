import { useMotion } from "@rbxts/pretty-react-hooks";
import React, { useEffect } from "@rbxts/react";
import { useAtom } from "@rbxts/react-charm";
import { usePx } from "client/app/hooks/use-px";
import { selectedCombatant } from "client/atoms/battle";
import { CombatantInfo } from "shared/modules/battle-types";

export default function Combatant({
	index,
	info,
	icon = "rbxassetid://134488366773164",
}: {
	index: number;
	info: CombatantInfo;
	icon?: string;
}) {
	const combatant = useAtom(selectedCombatant);

	const [colorAlpha, colorMotion] = useMotion(0);
	const [scale, scaleMotion] = useMotion(1);

	const px = usePx();

	useEffect(() => {
		if (index === combatant) {
			colorMotion.tween(1, {
				time: 0.5,
				style: Enum.EasingStyle.Exponential,
				direction: Enum.EasingDirection.Out,
			});
			scaleMotion.tween(1.3, {
				time: 0.3,
				style: Enum.EasingStyle.Exponential,
				direction: Enum.EasingDirection.Out,
			});
		} else {
			colorMotion.tween(0, {
				time: 0.5,
				style: Enum.EasingStyle.Exponential,
				direction: Enum.EasingDirection.Out,
			});
			scaleMotion.tween(1, {
				time: 0.3,
				style: Enum.EasingStyle.Exponential,
				direction: Enum.EasingDirection.Out,
			});
		}
	}, [combatant]);

	return (
		<frame key="Template" BorderSizePixel={0} BackgroundTransparency={1} Size={UDim2.fromOffset(px(158), px(100))}>
			<frame
				key="Healthbar"
				ZIndex={3}
				BorderSizePixel={0}
				BackgroundColor3={Color3.fromRGB(43, 40, 33)}
				Position={new UDim2(0, 0, 0, px(83))}
				Size={UDim2.fromOffset(px(172), px(7))}
				LayoutOrder={index}
			>
				<uistroke key="UIStroke" Color={Color3.fromRGB(95, 88, 73)} />
				<frame
					key="Frame"
					BorderSizePixel={0}
					BackgroundColor3={Color3.fromRGB(120, 120, 255)}
					Size={UDim2.fromScale(info.health / 100, 1)}
				/>
			</frame>
			<textlabel
				key="Health"
				TextWrapped={true}
				TextStrokeTransparency={0}
				ZIndex={3}
				BorderSizePixel={0}
				TextXAlignment={Enum.TextXAlignment.Left}
				BackgroundTransparency={1}
				RichText={true}
				FontFace={
					new Font("rbxasset://fonts/families/GothamSSm.json", Enum.FontWeight.Regular, Enum.FontStyle.Normal)
				}
				Text={tostring(info.health)}
				TextScaled={true}
				TextColor3={Color3.fromRGB(255, 255, 255)}
				TextSize={px(14)}
				Size={UDim2.fromOffset(px(122), px(15))}
				Position={new UDim2(0, 0, 0, px(60))}
			/>
			<frame
				key="Attributes"
				BorderSizePixel={0}
				Position={new UDim2(0, 0, 0, px(99))}
				BackgroundTransparency={1}
				Size={UDim2.fromOffset(px(171), px(21))}
			>
				<uilistlayout
					key="UIListLayout"
					FillDirection={Enum.FillDirection.Horizontal}
					SortOrder={Enum.SortOrder.LayoutOrder}
					Padding={new UDim(0.03, 0)}
				/>
				<imagelabel
					key="ImageLabel"
					BorderSizePixel={0}
					BackgroundTransparency={0.5}
					BackgroundColor3={Color3.fromRGB(0, 0, 0)}
					Image={"rbxassetid://484395923"}
					Size={UDim2.fromOffset(px(23), px(23))}
				>
					<uistroke
						key="UIStroke"
						LineJoinMode={Enum.LineJoinMode.Bevel}
						Color={Color3.fromRGB(63, 63, 63)}
						Thickness={px(2)}
						ApplyStrokeMode={Enum.ApplyStrokeMode.Border}
					/>
				</imagelabel>
				<imagelabel
					key="ImageLabel1"
					BorderSizePixel={0}
					BackgroundTransparency={0.5}
					BackgroundColor3={Color3.fromRGB(0, 0, 0)}
					Image={"rbxassetid://484395923"}
					Size={UDim2.fromOffset(px(23), px(23))}
				>
					<uistroke
						key="UIStroke"
						LineJoinMode={Enum.LineJoinMode.Bevel}
						Color={Color3.fromRGB(63, 63, 63)}
						Thickness={px(2)}
						ApplyStrokeMode={Enum.ApplyStrokeMode.Border}
					/>
				</imagelabel>
				<imagelabel
					key="ImageLabel2"
					BorderSizePixel={0}
					BackgroundTransparency={0.5}
					BackgroundColor3={Color3.fromRGB(0, 0, 0)}
					Image={"rbxassetid://484395923"}
					Size={UDim2.fromOffset(px(23), px(23))}
				>
					<uistroke
						key="UIStroke"
						LineJoinMode={Enum.LineJoinMode.Bevel}
						Color={Color3.fromRGB(63, 63, 63)}
						Thickness={px(2)}
						ApplyStrokeMode={Enum.ApplyStrokeMode.Border}
					/>
				</imagelabel>
				<imagelabel
					key="ImageLabel3"
					BorderSizePixel={0}
					BackgroundTransparency={0.5}
					BackgroundColor3={Color3.fromRGB(0, 0, 0)}
					Image={"rbxassetid://484395923"}
					Size={UDim2.fromOffset(px(23), px(23))}
				>
					<uistroke
						key="UIStroke"
						LineJoinMode={Enum.LineJoinMode.Bevel}
						Color={Color3.fromRGB(63, 63, 63)}
						Thickness={px(2)}
						ApplyStrokeMode={Enum.ApplyStrokeMode.Border}
					/>
				</imagelabel>
				<imagelabel
					key="ImageLabel4"
					BorderSizePixel={0}
					BackgroundTransparency={0.5}
					BackgroundColor3={Color3.fromRGB(0, 0, 0)}
					Image={"rbxassetid://484395923"}
					Size={UDim2.fromOffset(px(23), px(23))}
				>
					<uistroke
						key="UIStroke"
						LineJoinMode={Enum.LineJoinMode.Bevel}
						Color={Color3.fromRGB(63, 63, 63)}
						Thickness={px(2)}
						ApplyStrokeMode={Enum.ApplyStrokeMode.Border}
					/>
				</imagelabel>
				<imagelabel
					key="ImageLabel5"
					BorderSizePixel={0}
					BackgroundTransparency={0.5}
					BackgroundColor3={Color3.fromRGB(0, 0, 0)}
					Image={"rbxassetid://484395923"}
					Size={UDim2.fromOffset(px(23), px(23))}
				>
					<uistroke
						key="UIStroke"
						LineJoinMode={Enum.LineJoinMode.Bevel}
						Color={Color3.fromRGB(63, 63, 63)}
						Thickness={px(2)}
						ApplyStrokeMode={Enum.ApplyStrokeMode.Border}
					/>
				</imagelabel>
			</frame>
			<frame
				key="Lantern"
				BorderSizePixel={0}
				Position={UDim2.fromOffset(px(83), px(-104))}
				BackgroundTransparency={1}
				Size={UDim2.fromOffset(px(101), px(194))}
			>
				<imagelabel
					key="LanternGray"
					ZIndex={-2}
					BorderSizePixel={0}
					Position={UDim2.fromOffset(px(-16), px(12))}
					BackgroundTransparency={1}
					ImageColor3={Color3.fromRGB(0, 0, 0)}
					Image={"rbxassetid://104139114736098"}
					Size={UDim2.fromOffset(px(131), px(175))}
					ScaleType={Enum.ScaleType.Fit}
				/>
				<imagelabel
					key="LanternCharge"
					ZIndex={-2}
					BorderSizePixel={0}
					Position={UDim2.fromOffset(px(-16), px(10))}
					BackgroundTransparency={1}
					ImageColor3={Color3.fromRGB(255, 183, 58)}
					Image={"rbxassetid://104139114736098"}
					Size={UDim2.fromOffset(px(131), px(178))}
					ScaleType={Enum.ScaleType.Fit}
				>
					<uigradient
						key="Gradient"
						Rotation={-90}
						Transparency={
							new NumberSequence([
								new NumberSequenceKeypoint(0, 0, 0),
								new NumberSequenceKeypoint(0.4, 0, 0),
								new NumberSequenceKeypoint(0.5, 1, 0),
								new NumberSequenceKeypoint(1, 1, 0),
							])
						}
					/>
				</imagelabel>
				<folder key="Ignition">
					<imagelabel
						key="Aura"
						ZIndex={2}
						BorderSizePixel={0}
						Position={UDim2.fromScale(0.4851, 0.6082)}
						BackgroundTransparency={1}
						ImageColor3={Color3.fromRGB(255, 174, 74)}
						AnchorPoint={new Vector2(0.5, 0.5)}
						Image={"rbxassetid://13576215137"}
						Size={UDim2.fromOffset(px(350), px(350))}
						Visible={false}
					/>
					<imagelabel
						key="Flicker"
						ZIndex={2}
						BorderSizePixel={0}
						Position={UDim2.fromScale(0.4851, 0.6082)}
						BackgroundTransparency={1}
						ImageColor3={Color3.fromRGB(255, 174, 74)}
						AnchorPoint={new Vector2(0.5, 0.5)}
						Image={"rbxassetid://15176583272"}
						Size={UDim2.fromOffset(px(700), px(700))}
						Visible={false}
					/>
					<imagelabel
						key="StarGlare"
						BorderSizePixel={0}
						Position={UDim2.fromScale(0.4851, 0.6082)}
						BackgroundTransparency={1}
						ImageColor3={Color3.fromRGB(255, 174, 74)}
						AnchorPoint={new Vector2(0.5, 0.5)}
						Image={"rbxassetid://8801278557"}
						Size={UDim2.fromOffset(px(600), px(600))}
						Visible={false}
					/>
					<imagelabel
						key="Glare"
						BorderSizePixel={0}
						Position={UDim2.fromScale(0.4851, 0.6082)}
						BackgroundTransparency={1}
						ImageTransparency={0.92}
						ImageColor3={Color3.fromRGB(255, 174, 74)}
						AnchorPoint={new Vector2(0.5, 0.5)}
						Image={"rbxassetid://7185003058"}
					/>
					<imagelabel
						key="Beam"
						ZIndex={2}
						BorderSizePixel={0}
						Position={UDim2.fromScale(0.4851, 0.6082)}
						BackgroundTransparency={1}
						ImageColor3={Color3.fromRGB(255, 174, 74)}
						AnchorPoint={new Vector2(0.5, 0.5)}
						Image={"rbxassetid://71771860114662"}
						Size={new UDim2(0, 0, 0, px(200))}
					/>
				</folder>
			</frame>
			<imagelabel
				key="CombatantIcon"
				ZIndex={2}
				AnchorPoint={new Vector2(0.5, 1)}
				BorderSizePixel={0}
				Position={new UDim2(0, px(65), 1, px(-18))}
				BackgroundTransparency={1}
				Image={icon}
				Size={scale.map((scale) => UDim2.fromOffset(px(130) * scale, px(140) * scale))}
				ScaleType={Enum.ScaleType.Fit}
			>
				<uigradient
					key="UIGradient"
					Rotation={45}
					Transparency={
						new NumberSequence([
							new NumberSequenceKeypoint(0, 1, 0),
							new NumberSequenceKeypoint(0.1024, 0, 0),
							new NumberSequenceKeypoint(0.4993, 0, 0),
							new NumberSequenceKeypoint(0.8154, 1, 0),
							new NumberSequenceKeypoint(0.9006, 1, 0),
							new NumberSequenceKeypoint(1, 1, 0),
						])
					}
				/>
			</imagelabel>
			<frame
				key="Indicator"
				ZIndex={-2}
				BorderSizePixel={0}
				BackgroundColor3={colorAlpha.map((alpha) =>
					Color3.fromRGB(35, 35, 35).Lerp(Color3.fromRGB(167, 122, 199), alpha),
				)}
				Position={new UDim2(0, 0, 0, px(100))}
				BackgroundTransparency={0.3}
				Size={UDim2.fromOffset(px(172), px(50))}
			>
				<uigradient
					key="UIGradient"
					Rotation={90}
					Transparency={
						new NumberSequence([
							new NumberSequenceKeypoint(0, 1, 0),
							new NumberSequenceKeypoint(0.5635, 1, 0),
							new NumberSequenceKeypoint(1, 0, 0),
						])
					}
				/>
			</frame>
			<frame
				key="StateNextTurn"
				BorderSizePixel={0}
				Position={UDim2.fromOffset(px(44), px(-176))}
				BackgroundTransparency={1}
				Size={UDim2.fromOffset(px(100), px(100))}
			>
				<textlabel
					key="State"
					TextWrapped={true}
					TextStrokeTransparency={0}
					ZIndex={2}
					BorderSizePixel={0}
					BackgroundTransparency={1}
					FontFace={
						new Font(
							"rbxasset://fonts/families/AccanthisADFStd.json",
							Enum.FontWeight.Regular,
							Enum.FontStyle.Normal,
						)
					}
					Text={"ATTACK"}
					TextScaled={true}
					TextColor3={Color3.fromRGB(255, 255, 255)}
					AnchorPoint={new Vector2(0.5, 0.5)}
					TextSize={px(14)}
					Size={UDim2.fromOffset(px(163), px(25))}
					Position={UDim2.fromScale(0.5, 0.5)}
				/>
				<imagelabel
					key="StateImage"
					BorderSizePixel={0}
					Position={UDim2.fromScale(0.5, 0.5)}
					BackgroundTransparency={1}
					ImageTransparency={0.83}
					AnchorPoint={new Vector2(0.5, 0.5)}
					Image={"rbxassetid://7485051715"}
					Size={UDim2.fromOffset(px(91), px(91))}
				>
					<uiaspectratioconstraint key="UIAspectRatioConstraint" />
				</imagelabel>
			</frame>
		</frame>
	);
}
