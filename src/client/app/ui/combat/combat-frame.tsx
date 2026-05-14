import React, { useEffect } from "@rbxts/react";
import SideButtonList from "./side-button-list";
import MenuButton from "./menu-button";
import CombatantList from "./combatant-list";
import { useAtom } from "@rbxts/react-charm";
import { playersAtom } from "shared/atoms/players";
import { Players } from "@rbxts/services";
import CombatantDetails from "./combatant-details";

export default function CombatFrame(props: { active?: boolean }) {
	const battleId = useAtom(() => playersAtom()[tostring(Players.LocalPlayer.UserId)]?.battleId);

	// Page animation
	useEffect(() => {
		if (props.active) {
			print("COMBAT FRAME | active menu");
		} else {
			print("COMBAT FRAME | goodbye!");
		}
	}, [props.active]);

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
			<CombatantDetails />
			<MenuButton />
		</frame>
	);
}
