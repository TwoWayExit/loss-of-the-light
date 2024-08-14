import { Workspace } from "@rbxts/services";
import { producer } from "client/producer";
import { Battle } from "shared/models/battle";
import { LotlPlayer } from "shared/models/lotl_player";

export class ClientBattle extends Battle {
	public constructor(id: string) {
		super(id);
	}

	public override startBattle() {
		this.setPlayersHidden(true);

		super.startBattle();
	}

	public override stopBattle() {
		this.setPlayersHidden(false);

		super.stopBattle();
	}

	protected setPlayersHidden(hidden: boolean) {
		const teams = producer.getState((state) => state.battles.battles[this.id].teams);

		for (const [, team] of pairs(teams)) {
			for (const playerId of team) {
				const player = LotlPlayer.getPlayerFromId(playerId);

				assert(player, `Player ${playerId} does not exist`);

				const character = player.getCharacter();

				assert(character, `Player ${player.getNickname()} does not have a character`);

				if (hidden) {
					character.Parent = undefined;
				} else {
					character.Parent = Workspace;
				}
			}
		}
	}
}
