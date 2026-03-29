import { Service, OnStart, OnInit } from "@flamework/core";
import { BasePlayer } from "shared/models/player";
import { ServerBattle } from "../models/server-battle";
import { playersAtom } from "shared/atoms/players";
import { Teams } from "shared/models/battle";
import "shared/modules/skillset-list";

@Service({})
export class BattleService implements OnStart, OnInit {
	public async startBattle(first: Teams, team1: BasePlayer[], team2: BasePlayer[]) {
		const battle = ServerBattle.createBattle(team1, team2, playersAtom()[team1[0].id].region, first);

		battle.startBattle();
	}

	onInit() {}

	onStart() {}
}
