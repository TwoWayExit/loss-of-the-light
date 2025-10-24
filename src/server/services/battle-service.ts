import { Service, OnStart, OnInit } from "@flamework/core";
import { BasePlayer } from "shared/models/player";
import { ServerBattle } from "../models/server-battle";
import { producer } from "server/producer";
import { Workspace } from "@rbxts/services";

@Service({})
export class BattleService implements OnStart, OnInit {
	public async startBattle(player1: BasePlayer, player2: BasePlayer) {
		const battle = ServerBattle.createBattle(
			player1,
			player2,
			producer.getState((state) => state.players[player1.id].region),
		);

		await this.streamBattleground(battle, [player1, player2]);

		battle.startBattle();
	}

	private async streamBattleground(battle: ServerBattle, players: BasePlayer[]) {
		return await Promise.all(
			players.map((player) =>
				Promise.try(() => {
					const localPlayer = player.getLocalPlayer();

					if (localPlayer) {
						localPlayer.RequestStreamAroundAsync(Workspace.battlegrounds[battle.region].origin.Position);
						localPlayer.ReplicationFocus = Workspace.battlegrounds[battle.region].origin;
					}
				}),
			),
		);
	}

	onInit() {}

	onStart() {}
}
