import React from "@rbxts/react";
import { useAtom } from "@rbxts/react-charm";
import { Combat } from "./side-button-list";
import AttackFrame from "./attack-frame";
import CombatFrame from "./combat-frame";

export default function CombatPage() {
	const menu = useAtom(Combat.currentMenu);

	switch (menu) {
		case Combat.Menu.ATTACK:
			return <AttackFrame />;

		default:
			return <CombatFrame />;
	}
}
