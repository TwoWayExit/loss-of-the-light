import React, { useRef } from "@rbxts/react";
import SideButton from "./side-button";
import { usePx } from "client/app/hooks/use-px";
import { Events } from "client/network";
import { useAtom } from "@rbxts/react-charm";
import { computed } from "@rbxts/charm";
import { playersAtom } from "shared/atoms/players";
import { Players } from "@rbxts/services";
import { battlesAtom } from "shared/atoms/battles";
import { selectedEnemy, selectedSkill } from "client/atoms/battle";
import { currentMenu, Menu } from "client/atoms/combat-ui";

export default function SideButtonList() {
	const visibleAtom = useRef(
		computed(() => {
			// Call these atoms to mark them as dependencies
			const players = playersAtom();
			const battles = battlesAtom();

			const battleId = players[tostring(Players.LocalPlayer.UserId)]?.battleId;

			if (battleId === undefined) {
				return false;
			}

			return battles[battleId].playerInfo[tostring(Players.LocalPlayer.UserId)].turnFinished === false;
		}),
	);
	const isVisible = useAtom(visibleAtom.current);
	const px = usePx();

	return (
		<frame
			key="Buttons"
			AnchorPoint={new Vector2(1, 1)}
			BorderSizePixel={0}
			Position={new UDim2(1, px(-20), 1, px(-20))}
			BackgroundTransparency={1}
			Size={UDim2.fromOffset(px(483), px(288))}
			Visible={isVisible}
		>
			<uilistlayout
				key="UIListLayout"
				HorizontalAlignment={Enum.HorizontalAlignment.Right}
				VerticalAlignment={Enum.VerticalAlignment.Bottom}
				SortOrder={Enum.SortOrder.LayoutOrder}
				Padding={new UDim(0.04, 0)}
			/>

			<SideButton
				text="finish turn"
				icon="rbxassetid://12690727184"
				iconSize={33}
				color={Color3.fromRGB(51, 77, 50)}
				onClick={() => {
					Events.lotl.finishTurn();
				}}
				height={87}
				width={296}
			/>
			<SideButton
				text="attack"
				icon="rbxassetid://7485051715"
				iconSize={43}
				color={Color3.fromRGB(77, 21, 21)}
				onClick={() => {
					currentMenu(Menu.ATTACK);

					selectedEnemy([0, 0]);
					selectedSkill(0);
				}}
			/>
			<SideButton
				text="defend"
				icon="rbxassetid://79951232517290"
				iconSize={33}
				color={Color3.fromRGB(56, 35, 77)}
				onClick={() => {}}
			/>
			<SideButton
				text="wait"
				icon="rbxassetid://7072707248"
				iconSize={33}
				color={Color3.fromRGB(74, 77, 43)}
				onClick={() => {}}
			/>
		</frame>
	);
}
