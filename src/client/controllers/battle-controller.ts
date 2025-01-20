import { Controller, OnInit } from "@flamework/core";
import { Players } from "@rbxts/services";
import { Workspace } from "@rbxts/services";
import { LotlCameraController } from "client/controllers/lotl_camera-controller";
import { producer } from "client/producer";
import { ClientBattle } from "client/models/client-battle";
import { ViewVectors } from "shared/modules/view-vectors";
import { Teams } from "shared/models/battle";
import { Region } from "shared/modules/globals";

@Controller({})
export class BattleController implements OnInit {
	public constructor(protected readonly cameraController: LotlCameraController) {}

	protected setCameraActive(active: boolean, region: Region, teamName: Teams) {
		this.cameraController.useFixedPosition(active);

		if (active) {
			const origin = Workspace.battlegrounds[region].origin.CFrame;
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

				const region = producer.getState((state) => state.players[tostring(Players.LocalPlayer.UserId)].region);

				this.setCameraActive(true, region, teamName);

				return () => {
					battle.stopBattle();

					this.setCameraActive(false, region, teamName);
				};
			},
		);
	}
}
