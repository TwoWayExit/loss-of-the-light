import { Service, OnStart, OnInit } from "@flamework/core";
import { BasePlayer } from "shared/models/player";
import { ServerBattle } from "../models/server-battle";
import { Workspace } from "@rbxts/services";
import { playersAtom } from "shared/atoms/players";

@Service({})
export class BattleService implements OnStart, OnInit {
	public async startBattle(player1: BasePlayer, player2: BasePlayer) {
		const battle = ServerBattle.createBattle(player1, player2, playersAtom()[player1.id].region);

		await this.streamBattleground(battle, [player1, player2]);

		battle.startBattle();
	}

	private async streamBattleground(battle: ServerBattle, players: BasePlayer[]) {
		return await Promise.all(
			players.map((player) =>
				Promise.try(() => {
					const rbxPlayer = player.getRbxPlayer();

					if (rbxPlayer) {
						rbxPlayer.RequestStreamAroundAsync(Workspace.battlegrounds[battle.region].origin.Position);
						rbxPlayer.ReplicationFocus = Workspace.battlegrounds[battle.region].origin;
					}
				}),
			),
		);
	}

	onInit() {}

	onStart() {}
}
