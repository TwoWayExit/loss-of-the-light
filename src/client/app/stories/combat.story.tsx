_G.__DEV__ = true;

import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { Players, ReplicatedStorage, Workspace } from "@rbxts/services";
import { batch } from "@rbxts/charm";
import { addCombatant, createPlayer, playersAtom } from "shared/atoms/players";
import { produce } from "@rbxts/better-immut";
import { battlesAtom, createBattle } from "shared/atoms/battles";
import { Teams } from "shared/models/battle";
import { ClientBattle } from "client/models/client-battle";
import { clSelectedCombatant } from "client/atoms/client-info";
import CombatPage from "../ui/combat/page";

interface Controls {}

export = {
	react: React,
	reactRoblox: ReactRoblox,
	controls: identity<Controls>({}),

	story: ({ controls }: { controls: Controls }) => {
		batch(() => {
			playersAtom((state) => createPlayer(state, tostring(Players.LocalPlayer.UserId)));
			playersAtom((state) =>
				produce(state, (draft) => {
					draft[tostring(Players.LocalPlayer.UserId)].battleId = "test";
				}),
			);
			battlesAtom((state) => createBattle(state, "test", "baseplate", Teams.TEAM1));
			battlesAtom((state) =>
				produce(state, (draft) => {
					draft["test"].teams[Teams.TEAM1] = [tostring(Players.LocalPlayer.UserId)];
				}),
			);

			for (let i = 0; i < 4; i++) {
				const character = ReplicatedStorage.combatants.MaleMC.Clone();

				character.Archivable = false;
				character.Parent = Workspace.combatants;

				playersAtom((state) =>
					addCombatant(state, tostring(Players.LocalPlayer.UserId), {
						character,
						health: 100,
					}),
				);
			}

			clSelectedCombatant(0);

			battlesAtom((state) =>
				produce(state, (draft) => {
					draft["test"].playerInfo[tostring(Players.LocalPlayer.UserId)] = {
						selectedCombatant: -1,
						energy: playersAtom()[tostring(Players.LocalPlayer.UserId)].combatants.map(() => 5),
						turnFinished: false,
					};
				}),
			);
		});

		new ClientBattle("test", Teams.TEAM1);

		return <CombatPage />;
	},
};
