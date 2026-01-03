import { Service, OnStart, OnInit } from "@flamework/core";
import { BasePlayer } from "shared/models/player";
import { ServerBattle } from "../models/server-battle";
import { Workspace } from "@rbxts/services";
import { playersAtom } from "shared/atoms/players";
import { Teams } from "shared/models/battle";
import "shared/modules/skillsets";

@Service({})
export class BattleService implements OnStart, OnInit {
	public async startBattle(first: Teams, team1: BasePlayer[], team2: BasePlayer[]) {
		const battle = ServerBattle.createBattle(team1, team2, playersAtom()[team1[0].id].region, first);

		await this.streamBattleground(battle, [...team1, ...team2]);

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
