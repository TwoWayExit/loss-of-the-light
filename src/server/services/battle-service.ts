import { Service, OnStart, OnInit } from "@flamework/core";
import { LotlPlayer } from "shared/models/lotl_player";
import { ServerBattle } from "../models/server-battle";

@Service({})
export class BattleService implements OnStart, OnInit {
	public startBattle(player1: LotlPlayer, player2: LotlPlayer) {
		const battle = ServerBattle.createQuickBattle(player1, player2);

		battle.startBattle();
	}

	onInit() {}

	onStart() {}
}
