import { useSelector } from "@rbxts/react-reflex";
import { createSelector } from "@rbxts/reflex";
import { RootState } from "client/producer";
import { PlayerNetworked } from "shared/models/player-networked";
import React from "@rbxts/react";

export function CombatFrame() {
	const selectPlayer = (state: RootState) => state.players[PlayerNetworked.getLocalClient()!.id];
	const selectInBattle = createSelector(selectPlayer, (player) => player?.battleId !== undefined);

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
