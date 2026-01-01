import React from "@rbxts/react";
import { usePx } from "client/app/hooks/use-px";
import SideButtonList from "./side-button-list";
import Turns from "./turns";
import MenuButton from "./menu-button";
import CombatantList from "./combatant-list";
import { useAtom } from "@rbxts/react-charm";
import { playersAtom } from "shared/atoms/players";
import { Players } from "@rbxts/services";
import { clSelectedCombatant } from "client/atoms/client-info";
import { battlesAtom } from "shared/atoms/battles";

function EnergyUnit({ energy, index }: { energy: number; index: number }) {
	const px = usePx();

	return (
		<frame
			BorderSizePixel={0}
			BackgroundColor3={energy > index ? Color3.fromRGB(239, 239, 239) : Color3.fromRGB(47, 47, 47)}
			Size={UDim2.fromOffset(px(5), px(28))}
		>
			<uistroke key="UIStroke" Color={Color3.fromRGB(76, 76, 76)} ApplyStrokeMode={Enum.ApplyStrokeMode.Border} />
		</frame>
	);
}

export default function CombatFrame() {
	const px = usePx();

	const battleId = useAtom(() => playersAtom()[tostring(Players.LocalPlayer.UserId)]?.battleId) ?? "";
	const energy =
		useAtom(
			() =>
				battlesAtom()[battleId]?.playerInfo[tostring(Players.LocalPlayer.UserId)]?.energy[
					clSelectedCombatant()
				],
		) ?? 0;

	return (
		<frame
			key={"CombatFrame"}
			BorderSizePixel={0}
			BackgroundTransparency={1}
			Size={UDim2.fromScale(1, 1)}
			Visible={battleId !== ""}
		>
			<SideButtonList />
			<CombatantList />
			<Turns />
			<MenuButton />

			<frame
				key="Energy"
				BorderSizePixel={0}
				Position={new UDim2(1, px(-440), 1, px(-68))}
				BackgroundTransparency={1}
				Size={UDim2.fromOffset(px(42), px(28))}
			>
				<uilistlayout
					key="UIListLayout"
					HorizontalAlignment={Enum.HorizontalAlignment.Center}
					HorizontalFlex={Enum.UIFlexAlignment.SpaceBetween}
					VerticalAlignment={Enum.VerticalAlignment.Bottom}
					Padding={new UDim(0.1, 0)}
				/>

				{[0, 1, 2, 3, 4].map((index) => (
					<EnergyUnit key={index} energy={energy} index={index} />
				))}
			</frame>
			<textlabel
				key="CurrentTurn"
				TextWrapped={true}
				BorderSizePixel={0}
				RichText={true}
				TextXAlignment={Enum.TextXAlignment.Left}
				BackgroundTransparency={1}
				FontFace={
					new Font("rbxasset://fonts/families/GothamSSm.json", Enum.FontWeight.Regular, Enum.FontStyle.Normal)
				}
				Text={"TURN <b> 5</b>"}
				TextScaled={true}
				TextColor3={Color3.fromRGB(255, 255, 255)}
				Position={UDim2.fromOffset(px(25), px(351))}
				TextSize={px(14)}
				Size={UDim2.fromOffset(px(187), px(27))}
			/>
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
				Position={new UDim2(1, px(-475), 1, px(-89))}
				TextSize={px(14)}
				Size={UDim2.fromOffset(px(16), px(51))}
				TextTransparency={0.01}
			/>
		</frame>
	);
}
