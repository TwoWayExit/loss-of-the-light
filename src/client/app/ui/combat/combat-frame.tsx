import { useSelector } from "@rbxts/react-reflex";
import { createSelector } from "@rbxts/reflex";
import { RootState } from "client/producer";
import React from "@rbxts/react";
import { usePx } from "client/app/hooks/use-px";
import SideButtonList from "./side-button-list";
import EnergyList from "./energy-list";
import Turns from "./turns";
import MenuButton from "./menu-button";
import CombatantList from "./combatant-list";
import { Players } from "@rbxts/services";

export default function CombatFrame() {
	const selectPlayer = (state: RootState) => state.players[tostring(Players.LocalPlayer.UserId)];
	const selectInBattle = createSelector(selectPlayer, (player) => player?.battleId !== undefined);

	const inBattle = useSelector(selectInBattle);

	const px = usePx();

	return (
		<frame
			key={"CombatFrame"}
			BorderSizePixel={0}
			BackgroundTransparency={1}
			Size={UDim2.fromScale(1, 1)}
			Visible={inBattle}
		>
			<SideButtonList />
			<EnergyList />
			<CombatantList />
			<Turns />
			<MenuButton />

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
