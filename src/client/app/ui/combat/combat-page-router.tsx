import React from "@rbxts/react";
import { useAtom } from "@rbxts/react-charm";
import AttackFrame from "./attack-frame";
import CombatFrame from "./combat-frame";
import { currentMenu, Menu } from "client/atoms/combat-ui";

// TODO: Find a better way to route these which allows out-animations on page change
export default function CombatPageRouter() {
	const menu = useAtom(currentMenu);

	switch (menu) {
		case Menu.ATTACK:
			return <AttackFrame />;

		default:
			return <CombatFrame />;
	}
}
