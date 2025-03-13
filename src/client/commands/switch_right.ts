import { Command } from "@twowayexit/dev-con";
import { producer, RootState } from "client/producer";
import { LotlClient } from "shared/models/lotl_client";

export const switch_right: Command = {
	execute: () => {
		const { battleId, selectedCombatant, combatants } = producer.getState(
			(state: RootState) => state.players[LotlClient.getLocalClient()!.id],
		);

		if (battleId === undefined) {
			return;
		}

		if (selectedCombatant + 1 >= combatants.size()) {
			return;
		}

		producer.setSelectedCombatant(LotlClient.getLocalClient()!.id, selectedCombatant + 1);
	},
};
