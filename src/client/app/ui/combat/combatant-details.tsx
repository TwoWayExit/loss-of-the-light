import React from "@rbxts/react";
import EnergyList from "./energy-list";
import { usePx } from "client/app/hooks/use-px";
import { useAtom } from "@rbxts/react-charm";
import { Players } from "@rbxts/services";
import { selectedCombatant } from "client/atoms/battle";
import { battlesAtom } from "shared/atoms/battles";
import { playersAtom } from "shared/atoms/players";
import combatantList, { CombatantList } from "shared/modules/combatant-list";

export default function CombatantDetails() {
	const battles = useAtom(battlesAtom);
	const combatant = useAtom(selectedCombatant);
	const battleId = useAtom(() => playersAtom()[tostring(Players.LocalPlayer.UserId)]?.battleId);
	const energy = useAtom(() => {
		if (battleId === undefined) {
			return 0;
		}

		return battles[battleId].playerInfo[tostring(Players.LocalPlayer.UserId)].combatants[combatant].energy;
	}, [battles, combatant, battleId]);
	const maxEnergy = useAtom(() => {
		if (battleId === undefined) {
			return 0;
		}

		return combatantList[
			battles[battleId].playerInfo[tostring(Players.LocalPlayer.UserId)].combatants[combatant]
				.name as keyof CombatantList
		].energy;
	}, [battles, combatant, battleId]);

	const px = usePx();

	return (
		<frame
			key="CombatantDetails"
			BorderSizePixel={0}
			Position={new UDim2(1, px(-20), 1, px(-343))}
			AnchorPoint={new Vector2(1, 1)}
			BackgroundTransparency={1}
			Size={UDim2.fromOffset(px(295), px(280))}
		>
			<EnergyList energy={energy} maxEnergy={maxEnergy} />
			<imagelabel
				key="CombatantIcon"
				BorderSizePixel={0}
				Position={new UDim2(0, 0, 1, 0)}
				BackgroundTransparency={1}
				AnchorPoint={new Vector2(0, 1)}
				Image={"rbxassetid://134488366773164"}
				ImageRectSize={new Vector2(px(425), px(425))}
				Size={UDim2.fromOffset(px(244), px(230))}
				ImageRectOffset={new Vector2(px(85), 0)}
				ScaleType={Enum.ScaleType.Crop}
			>
				<uiaspectratioconstraint key="UIAspectRatioConstraint" />
				<uigradient
					key="UIGradient"
					Rotation={90}
					Transparency={
						new NumberSequence([
							new NumberSequenceKeypoint(0, 0, 0),
							new NumberSequenceKeypoint(0.8969, 0, 0),
							new NumberSequenceKeypoint(1, 1, 0),
						])
					}
				/>
			</imagelabel>
			<frame
				key="Frame"
				BorderSizePixel={0}
				BackgroundColor3={Color3.fromRGB(122, 118, 88)}
				Position={new UDim2(1, px(-48), 1, 0)}
				AnchorPoint={new Vector2(1, 1)}
				Size={UDim2.fromOffset(px(2), px(230))}
			/>
			<textlabel
				key="EnergyCounter"
				TextWrapped={true}
				ZIndex={2}
				BorderSizePixel={0}
				TextXAlignment={Enum.TextXAlignment.Right}
				BackgroundTransparency={1}
				RichText={true}
				FontFace={
					new Font(
						"rbxasset://fonts/families/AccanthisADFStd.json",
						Enum.FontWeight.Bold,
						Enum.FontStyle.Normal,
					)
				}
				Text={tostring(energy)}
				TextScaled={true}
				TextColor3={Color3.fromRGB(255, 215, 53)}
				AnchorPoint={new Vector2(1, 1)}
				TextSize={14}
				Size={UDim2.fromOffset(px(58), px(31))}
				Position={new UDim2(1, px(-67), 1, 0)}
			/>
			<frame
				key="Gradient"
				BorderSizePixel={0}
				BackgroundColor3={Color3.fromRGB(255, 255, 255)}
				Position={new UDim2(1, px(-51), 1, 0)}
				AnchorPoint={new Vector2(1, 1)}
				Size={UDim2.fromOffset(px(49), px(97))}
				Visible={false}
			>
				<uigradient
					key="GainGradient"
					Enabled={false}
					Rotation={-90}
					Transparency={
						new NumberSequence([
							new NumberSequenceKeypoint(0, 0.3687, 0),
							new NumberSequenceKeypoint(1, 1, 0),
						])
					}
					Color={
						new ColorSequence([
							new ColorSequenceKeypoint(0, Color3.fromRGB(115, 141, 255)),
							new ColorSequenceKeypoint(1, Color3.fromRGB(115, 141, 255)),
						])
					}
				/>
				<uigradient
					key="LoseGradient"
					Enabled={false}
					Rotation={-90}
					Transparency={
						new NumberSequence([
							new NumberSequenceKeypoint(0, 0.3687, 0),
							new NumberSequenceKeypoint(1, 1, 0),
						])
					}
					Color={
						new ColorSequence([
							new ColorSequenceKeypoint(0, Color3.fromRGB(255, 89, 89)),
							new ColorSequenceKeypoint(1, Color3.fromRGB(255, 89, 89)),
						])
					}
				/>
			</frame>
		</frame>
	);
}
