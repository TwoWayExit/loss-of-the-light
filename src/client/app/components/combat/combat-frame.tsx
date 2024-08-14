import { useSelector } from "@rbxts/react-reflex";
import { createSelector } from "@rbxts/reflex";
import { RootState } from "client/producer";
import { PlayerNetworked } from "shared/models/player-networked";
import React from "@rbxts/react";

export function CombatFrame() {
	const selectBattles = (state: RootState) => state.battles.battles;
	const selectInBattle = createSelector(selectBattles, (battles) => {
		for (const [, battle] of pairs(battles)) {
			for (const [, team] of pairs(battle.teams)) {
				if (team.has(PlayerNetworked.getLocalClient()!.id)) {
					return true;
				}
			}
		}

		return false;
	});

	const inBattle = useSelector(selectInBattle);

	return (
		<frame
			key={"CombatFrame"}
			BorderSizePixel={0}
			BackgroundTransparency={1}
			Size={UDim2.fromScale(1, 1)}
			Visible={inBattle}
		></frame>
	);
}
