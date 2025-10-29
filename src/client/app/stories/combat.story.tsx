import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import CombatFrame from "../ui/combat/combat-frame";
import { producer } from "client/producer";
import { Players } from "@rbxts/services";
import { ReflexProvider } from "@rbxts/react-reflex";
import { AnimatedCharacter } from "server/models/combatant";

export = {
	react: React,
	reactRoblox: ReactRoblox,
	story: () => {
		producer.addPlayer(tostring(Players.LocalPlayer.UserId));
		producer.setPlayerBattleId(tostring(Players.LocalPlayer.UserId), "test");
		producer.addBattle("test", "baseplate");

		for (let i = 0; i < 4; i++) {
			producer.addPlayerCombatant(tostring(Players.LocalPlayer.UserId), {
				character: undefined! as AnimatedCharacter,
				health: 100,
			});
		}

		return (
			<ReflexProvider producer={producer}>
				<CombatFrame />
			</ReflexProvider>
		);
	},
};
