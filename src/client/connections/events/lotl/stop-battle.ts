import { Controller, OnInit } from "@flamework/core";
import { Events } from "client/network/global";
import { Battle } from "shared/utils/battle";

@Controller({})
export class StopBattle implements OnInit {
	onInit() {
		Events.lotl.stopBattle.connect((battleId) => {
			Battle.getBattleFromId(battleId)?.stopBattle();
		});
	}
}
