import React, { useRef } from "@rbxts/react";
import SideButton from "./side-button";
import { usePx } from "client/app/hooks/use-px";
import { Events } from "client/network";
import { useAtom } from "@rbxts/react-charm";
import { atom, computed } from "@rbxts/charm";
import { playersAtom } from "shared/atoms/players";
import { Players } from "@rbxts/services";
import { battlesAtom } from "shared/atoms/battles";
import { selectedEnemy, selectedSkill } from "client/atoms/client-info";

export namespace Combat {
	export const enum Menu {
		MAIN,
		ATTACK,
	}

	export const currentMenu = atom<Menu>(Menu.MAIN);
}

export default function SideButtonList() {
	const visibleAtom = useRef(
		computed(() => {
			const battleId = playersAtom()[tostring(Players.LocalPlayer.UserId)]?.battleId;

			if (battleId === undefined) {
				return false;
			}

			// NOTE: Battle may not be loaded in yet despite battleId being assigned, so do an optional chain (?.) here
			return battlesAtom()[battleId]?.playerInfo[tostring(Players.LocalPlayer.UserId)].turnFinished === false;
		}),
	);
	const isVisible = useAtom(visibleAtom.current);
	const px = usePx();

	return (
		<frame
			key="Buttons"
			BorderSizePixel={0}
			Position={new UDim2(1, px(-122), 1, px(-141))}
			BackgroundTransparency={1}
			Size={UDim2.fromOffset(px(93), px(103))}
			Visible={isVisible}
		>
			<uilistlayout
				key="UIListLayout"
				HorizontalAlignment={Enum.HorizontalAlignment.Right}
				VerticalAlignment={Enum.VerticalAlignment.Bottom}
				SortOrder={Enum.SortOrder.LayoutOrder}
				Padding={new UDim(0.1, 0)}
			/>

			<SideButton
				text="finish turn"
				icon="rbxassetid://12690727184"
				color={Color3.fromRGB(49, 131, 44)}
				onClick={() => {
					Events.lotl.finishTurn();
				}}
				height={102}
			/>
			<SideButton
				text="attack"
				icon="rbxassetid://9695653110"
				color={Color3.fromRGB(108, 67, 67)}
				onClick={() => {
					Combat.currentMenu(Combat.Menu.ATTACK);

					selectedEnemy([0, 0]);
					selectedSkill(0);
				}}
			/>
			<SideButton
				text="defend"
				icon="rbxassetid://79951232517290"
				color={Color3.fromRGB(53, 65, 108)}
				onClick={() => {}}
			/>
			<SideButton
				text="wait"
				icon="rbxassetid://7072707248"
				color={Color3.fromRGB(107, 108, 49)}
				onClick={() => {}}
			/>
		</frame>
	);
}
