import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import CombatFrame from "../ui/combat/combat-frame";
import { Players } from "@rbxts/services";
import { AnimatedCharacter } from "server/models/combatant";
import { batch } from "@rbxts/charm";
import { addCombatant, createPlayer, playersAtom } from "shared/atoms/players";
import { produce } from "@rbxts/better-immut";
import { battlesAtom, createBattle } from "shared/atoms/battles";

export = {
	react: React,
	reactRoblox: ReactRoblox,
	story: () => {
		batch(() => {
			playersAtom((state) => createPlayer(state, tostring(Players.LocalPlayer.UserId)));
			playersAtom((state) =>
				produce(state, (draft) => {
					draft[tostring(Players.LocalPlayer.UserId)].battleId = "test";
				}),
			);
			battlesAtom((state) => createBattle(state, "test", "baseplate"));

			for (let i = 0; i < 4; i++) {
				playersAtom((state) =>
					addCombatant(state, tostring(Players.LocalPlayer.UserId), {
						character: undefined! as AnimatedCharacter,
						health: 100,
					}),
				);
			}
		});

		return <CombatFrame />;
	},
};
