import React from "@rbxts/react";
import { Players } from "@rbxts/services";
import { clSelectedCombatant } from "client/app/atoms/client-info";
import { battlesAtom } from "shared/atoms/battles";
import { playersAtom } from "shared/atoms/players";
import AbilityButton from "./ability-button";
import { Skillset } from "shared/models/skills";
import { useAtom } from "@rbxts/react-charm";

function EnergyUnit({ key, energy }: { key: number; energy: number }) {
	return (
		<frame
			key={key}
			BorderSizePixel={0}
			BackgroundColor3={energy > key ? Color3.fromRGB(195, 195, 195) : Color3.fromRGB(47, 47, 47)}
			Size={UDim2.fromOffset(70, 10)}
		>
			<uistroke key="UIStroke" Color={Color3.fromRGB(76, 76, 76)} ApplyStrokeMode={Enum.ApplyStrokeMode.Border} />
		</frame>
	);
}

const buttonPositions = [
	[new Vector2(), new UDim2()],
	[new Vector2(1, 0), UDim2.fromScale(1, 0)],
	[new Vector2(0, 1), UDim2.fromScale(0, 1)],
	[new Vector2(1, 1), UDim2.fromScale(1, 1)],
] as const satisfies [anchorPoint: Vector2, position: UDim2][];

export default function AttackFrame() {
	const battleId = useAtom(() => playersAtom()[tostring(Players.LocalPlayer.UserId)].battleId);

	if (!battleId) {
		return;
	}

	const energy = useAtom(() =>
		battlesAtom()[battleId].playerInfo[tostring(Players.LocalPlayer.UserId)]?.energy.get(clSelectedCombatant()),
	);

	if (energy === undefined) {
		return;
	}

	const combatantName = useAtom(
		() => playersAtom()[tostring(Players.LocalPlayer.UserId)]?.combatants[clSelectedCombatant()].character.Name,
	);

	const skillset = Skillset.getSkillset(combatantName);

	if (!skillset) {
		return;
	}

	return (
		<frame
			key="AttackUI"
			BorderSizePixel={0}
			AnchorPoint={new Vector2(0.5, 0.5)}
			Position={UDim2.fromScale(0.5, 0.5)}
			BackgroundTransparency={1}
			Size={UDim2.fromScale(1, 1)}
		>
			<frame
				key="Energy"
				BorderSizePixel={0}
				AnchorPoint={new Vector2(0.5, 0)}
				Position={new UDim2(0.5, 0, 1, -25)}
				BackgroundTransparency={1}
				Size={UDim2.fromOffset(93, 10)}
			>
				<uilistlayout
					key="UIListLayout"
					HorizontalAlignment={Enum.HorizontalAlignment.Center}
					HorizontalFlex={Enum.UIFlexAlignment.SpaceAround}
					FillDirection={Enum.FillDirection.Horizontal}
					VerticalAlignment={Enum.VerticalAlignment.Center}
					SortOrder={Enum.SortOrder.LayoutOrder}
					Padding={new UDim(0.1, 0)}
				/>

				{[0, 1, 2, 3].map((key) => (
					<EnergyUnit key={key} energy={energy} />
				))}
			</frame>
			<textlabel
				key="EnergyNumber"
				TextWrapped={true}
				TextStrokeTransparency={0.34}
				BorderSizePixel={0}
				BackgroundTransparency={1}
				FontFace={
					new Font("rbxasset://fonts/families/GothamSSm.json", Enum.FontWeight.Bold, Enum.FontStyle.Normal)
				}
				Text={"5"}
				TextScaled={true}
				TextColor3={Color3.fromRGB(255, 255, 255)}
				TextStrokeColor3={Color3.fromRGB(52, 52, 52)}
				AnchorPoint={new Vector2(0.5, 0)}
				Position={new UDim2(0.5, 0, 1, -69)}
				TextSize={14}
				Size={UDim2.fromOffset(16, 35)}
				TextTransparency={0.01}
			/>
			<textbutton
				key="Return"
				BorderSizePixel={0}
				Size={UDim2.fromOffset(65, 65)}
				Position={UDim2.fromOffset(1166, 686)}
				FontFace={
					new Font(
						"rbxasset://fonts/families/SourceSansPro.json",
						Enum.FontWeight.Regular,
						Enum.FontStyle.Normal,
					)
				}
				TextSize={14}
				BackgroundTransparency={1}
				TextColor3={Color3.fromRGB(0, 0, 0)}
				Text={""}
			>
				<uicorner key="UICorner" CornerRadius={new UDim(1, 0)} />
				<uistroke
					key="UIStroke"
					Color={Color3.fromRGB(198, 40, 40)}
					Thickness={2.4}
					ApplyStrokeMode={Enum.ApplyStrokeMode.Border}
				/>
				<uiaspectratioconstraint key="UIAspectRatioConstraint" />
				<frame
					key="Frame"
					BorderSizePixel={0}
					BackgroundColor3={Color3.fromRGB(126, 65, 65)}
					AnchorPoint={new Vector2(0.5, 0.5)}
					Position={UDim2.fromOffset(32, 32)}
					BackgroundTransparency={0.35}
					Size={UDim2.fromOffset(58, 58)}
				>
					<uicorner key="UICorner" CornerRadius={new UDim(1, 0)} />
					<uiaspectratioconstraint key="UIAspectRatioConstraint" />
					<imagelabel
						key="ImageLabel"
						BorderSizePixel={0}
						Position={UDim2.fromOffset(29, 29)}
						BackgroundTransparency={1}
						AnchorPoint={new Vector2(0.5, 0.5)}
						Image={"rbxassetid://3926307971"}
						ImageRectSize={new Vector2(36, 36)}
						Size={UDim2.fromOffset(34, 34)}
						ImageRectOffset={new Vector2(564, 284)}
					/>
				</frame>
			</textbutton>
			<frame
				key="Abilities"
				BorderSizePixel={0}
				AnchorPoint={new Vector2(0.5, 0)}
				Position={new UDim2(0.5, 0, 1, -337)}
				BackgroundTransparency={1}
				Size={UDim2.fromOffset(747, 292)}
			>
				<imagebutton
					key="Ultimate"
					ImageColor3={Color3.fromRGB(53, 53, 53)}
					Position={UDim2.fromScale(0.5, 0.5)}
					BorderSizePixel={0}
					ScaleType={Enum.ScaleType.Fit}
					BackgroundColor3={Color3.fromRGB(125, 255, 246)}
					AnchorPoint={new Vector2(0.5, 0.5)}
					Size={UDim2.fromScale(0.1673, 0.4281)}
					BackgroundTransparency={0.3}
				>
					<uiaspectratioconstraint key="UIAspectRatioConstraint" />
					<uicorner key="UICorner" CornerRadius={new UDim(1, 0)} />
					<uistroke key="UIStroke" Color={Color3.fromRGB(86, 255, 244)} Thickness={7.4} Transparency={0.38}>
						<uigradient
							key="UIGradient"
							Rotation={90}
							Color={
								new ColorSequence([
									new ColorSequenceKeypoint(0, Color3.fromRGB(0, 0, 0)),
									new ColorSequenceKeypoint(0.2595, Color3.fromRGB(0, 0, 0)),
									new ColorSequenceKeypoint(0.2682, Color3.fromRGB(255, 255, 255)),
									new ColorSequenceKeypoint(1, Color3.fromRGB(255, 255, 255)),
								])
							}
						/>
					</uistroke>
				</imagebutton>

				{buttonPositions.mapFiltered(([anchorPoint, position], index) => {
					const skill = skillset.skills[index];

					if (!skill) {
						return;
					}

					return <AbilityButton key={index} anchorPoint={anchorPoint} position={position} skill={skill} />;
				})}
			</frame>
		</frame>
	);
}
