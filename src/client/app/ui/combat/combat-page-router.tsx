import React, { useEffect, useState } from "@rbxts/react";
import { useAtom } from "@rbxts/react-charm";
import AttackFrame from "./attack-frame";
import CombatFrame from "./combat-frame";
import ClashFrame from "./clash-frame";
import { currentMenu, Menu } from "client/atoms/combat-ui";

const EXIT_TIME = 0.5; // All tweening between pages are 0.5 seconds

function renderMenu(menu: Menu, active = false) {
	switch (menu) {
		case Menu.ATTACK:
			return <AttackFrame active={active} />;

		case Menu.CLASH:
			return <ClashFrame active={active} />;

		default:
			return <CombatFrame active={active} />;
	}
}

export default function CombatPageRouter() {
	const menu = useAtom(currentMenu);

	const [activeMenu, setActiveMenu] = useState(menu);
	const [exitingMenu, setExitingMenu] = useState<Menu | undefined>();

	useEffect(() => {
		if (menu === activeMenu) return;

		setExitingMenu(activeMenu);
		setActiveMenu(menu);

		// TODO: find a reusable pattern that does not use task.delay
		task.delay(EXIT_TIME, () => {
			setExitingMenu(undefined);
		});
	}, [menu]);

	return (
		<>
			{exitingMenu !== undefined && renderMenu(exitingMenu, false)}
			{renderMenu(activeMenu, true)}
		</>
	);
}
