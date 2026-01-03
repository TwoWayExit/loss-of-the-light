_G.__DEV__ = true;

import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { Players, Workspace } from "@rbxts/services";
import { batch } from "@rbxts/charm";
import { addCombatant, createPlayer, playersAtom } from "shared/atoms/players";
import { produce } from "@rbxts/better-immut";
import { battlesAtom, createBattle } from "shared/atoms/battles";
import { Teams } from "shared/models/battle";
import { ClientBattle } from "client/models/client-battle";
import { clSelectedCombatant } from "client/atoms/client-info";
import CombatPageRouter from "client/app/ui/combat/combat-page-router";
import combatantList from "shared/modules/combatant-list";

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
				playersAtom((state) => addCombatant(state, tostring(Players.LocalPlayer.UserId), "MaleMC"));
			}

			clSelectedCombatant(0);

			battlesAtom((state) =>
				produce(state, (draft) => {
					draft["test"].playerInfo[tostring(Players.LocalPlayer.UserId)] = {
						selectedCombatant: -1,
						combatants: playersAtom()[tostring(Players.LocalPlayer.UserId)].combatants.map((name) => {
							const { baseCharacter, health, energy } = combatantList[name];
							const character = baseCharacter.Clone();

							character.Archivable = false;
							character.Parent = Workspace.combatants;

							// TODO: Make these pre-set values configurable
							return {
								character,
								health,
								energy,
							};
						}),
						turnFinished: false,
					};
				}),
			);
		});

		new ClientBattle("test", Teams.TEAM1);

		return <CombatPageRouter />;
	},
};
