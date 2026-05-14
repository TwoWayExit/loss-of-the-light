import ReactGlobals from "@rbxts/react-globals";

ReactGlobals.__DEV__ = true;

import React, { useEffect } from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { Players } from "@rbxts/services";
import { batch } from "@rbxts/charm";
import { addCombatant, createPlayer, playersAtom } from "shared/atoms/players";
import { produce } from "@rbxts/better-immut";
import { battlesAtom, createBattle } from "shared/atoms/battles";
import { Teams } from "shared/models/battle";
import { selectedCombatant } from "client/atoms/battle";
import CombatPageRouter from "client/app/ui/combat/combat-page-router";
import combatantList from "shared/modules/combatant-list";
import "shared/modules/skillset-list";

// Clash testing
import { currentMenu, Menu } from "client/atoms/combat-ui";

interface Controls {
	energy: number;
	selectedCombatant: number;
	viewClash: boolean; // testing
}

batch(() => {
	createPlayer(tostring(Players.LocalPlayer.UserId));

	for (let i = 0; i < 4; i++) {
		addCombatant(tostring(Players.LocalPlayer.UserId), "malemc");
	}

	createBattle("test", "baseplate", Teams.TEAM1);
	battlesAtom((state) =>
		produce(state, (draft) => {
			draft["test"].teams[Teams.TEAM1] = [tostring(Players.LocalPlayer.UserId)];
		}),
	);

	battlesAtom((state) =>
		produce(state, (draft) => {
			draft["test"].playerInfo[tostring(Players.LocalPlayer.UserId)] = {
				selectedCombatant: -1,
				combatants: playersAtom()[tostring(Players.LocalPlayer.UserId)].combatants.map((name) => {
					const { health, energy } = combatantList[name];

					return {
						name,
						character: undefined!,
						animationHandler: undefined!,
						health,
						energy,
					};
				}),
				turnFinished: false,
			};
		}),
	);

	playersAtom((state) =>
		produce(state, (draft) => {
			draft[tostring(Players.LocalPlayer.UserId)].battleId = "test";
		}),
	);

	selectedCombatant(0);
});

export = {
	react: React,
	reactRoblox: ReactRoblox,
	controls: identity<Controls>({
		energy: 5,
		selectedCombatant: 0,
		viewClash: false,
	}),

	story: ({ controls }: { controls: Controls }) => {
		useEffect(() => {
			batch(() => {
				battlesAtom((state) =>
					produce(state, (draft) => {
						draft["test"].playerInfo[tostring(Players.LocalPlayer.UserId)].combatants[0].energy =
							math.floor(controls.energy);
					}),
				);
			});
		}, [controls.energy]);

		useEffect(() => {
			selectedCombatant(controls.selectedCombatant);
		}, [selectedCombatant]);

		// Clash Testing
		useEffect(() => {
			if (controls.viewClash) {
				currentMenu(Menu.CLASH);
			} else {
				currentMenu(Menu.MAIN); // Should be intended behavior as the Clash UI will always appear during ACTION phase only (you may have another state)
			}
		}, [controls.viewClash]);

		return <CombatPageRouter />;
	},
};
