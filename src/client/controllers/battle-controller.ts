import { Controller, OnInit } from "@flamework/core";
import { Players } from "@rbxts/services";
import { LotlCameraController } from "client/controllers/lotl_camera-controller";
import { producer } from "client/producer";
import { ClientBattle } from "client/models/client-battle";
import { ViewVectors } from "shared/modules/view-vectors";
import { Teams } from "shared/models/battle";

@Controller({})
export class BattleController implements OnInit {
	public constructor(protected readonly cameraController: LotlCameraController) {}

	protected setCameraActive(active: boolean, battle: ClientBattle, teamName: Teams) {
		this.cameraController.useFixedPosition(active);

		if (active) {
			const origin = producer.getState((state) => state.battles[battle.id].origin);
			const position = origin.mul(
				teamName === Teams.TEAM1 ? ViewVectors.VIEW_BATTLE : ViewVectors.VIEW_BATTLE.Inverse(),
			).Position;

			this.cameraController.setFixedPosition(CFrame.lookAt(position, origin.Position));
		}
	}

	onInit() {
		producer.observe(
			(state) => state.battles,
			(_, id) => id,
			(battleInfo, battleId) => {
				let teamName;

				for (const [name, team] of pairs(battleInfo.teams)) {
					if ([...team].find((id) => id === tostring(Players.LocalPlayer.UserId))) {
						teamName = name;
						break;
					}
				}

				if (!teamName) {
					return;
				}

				const battle = new ClientBattle(battleId as string);

				battle.startBattle();

				this.setCameraActive(true, battle, teamName);

				return () => {
					battle.stopBattle();

					this.setCameraActive(false, battle, teamName);
				};
			},
		);
	}
}
