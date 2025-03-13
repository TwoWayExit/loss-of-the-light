import { Command } from "@twowayexit/dev-con";
import { RootState } from "client/producer";
import { producer } from "client/producer";
import { LotlClient } from "shared/models/lotl_client";

export const switch_left: Command = {
	execute: () => {
		const { battleId, selectedCombatant } = producer.getState(
			(state: RootState) => state.players[LotlClient.getLocalClient()!.id],
		);

		if (battleId === undefined) {
			return;
		}

		if (selectedCombatant - 1 < 0) {
			return;
		}

		producer.setSelectedCombatant(LotlClient.getLocalClient()!.id, selectedCombatant - 1);
	},
};
