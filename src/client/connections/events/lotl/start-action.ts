import { OnInit, Controller } from "@flamework/core";
import { BattleController } from "client/controllers/battle-controller";
import { Events } from "client/network";

@Controller({})
export class StartAction implements OnInit {
	public constructor(private readonly battleController: BattleController) {}

	onInit() {
		Events.lotl.startAction.connect((actionPlan) => {
			const battle = this.battleController.getCurrentBattle();

			assert(battle, "Attempt to start action on undefined battle");

			battle.startAction(actionPlan);
		});
	}
}
