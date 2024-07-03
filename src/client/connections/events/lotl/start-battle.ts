import { Controller, OnInit } from "@flamework/core";
import { LotlCameraController } from "client/controllers/lotl_camera-controller";
import { Events } from "client/network/global";
import { ClientBattle } from "client/utils/client-battle";
import { ViewVectors } from "shared/modules/view-vectors";

@Controller({})
export class StartBattle implements OnInit {
	public constructor(protected readonly cameraController: LotlCameraController) {}

	protected setCameraActive(active: boolean, battle: ClientBattle) {
		this.cameraController.useFixedPosition(active);

		if (active) {
			const origin = battle.battleInfo.get().origin;
			const position = origin.mul(ViewVectors.VIEW_BATTLE).Position;

			this.cameraController.setFixedPosition(CFrame.lookAt(position, origin.Position));
		}
	}

	onInit() {
		Events.lotl.startBattle.connect((teams, battleId, battleInfo) => {
			const battle = new ClientBattle(teams, battleId);

			battle.battleInfo.set(battleInfo);

			battle.startBattle();

			this.setCameraActive(true, battle);

			battle.battleEnded.Once(() => this.setCameraActive(false, battle));
		});
	}
}
