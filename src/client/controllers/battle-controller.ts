import { Controller, OnInit } from "@flamework/core";
import { LotlCameraController } from "client/controllers/lotl_camera-controller";
import { ClientBattle } from "client/models/client-battle";
import { ViewVectors } from "shared/modules/view-vectors";
import { Players, TweenService, Workspace } from "@rbxts/services";
import { observe, subscribe } from "@rbxts/charm";
import { battlesAtom } from "shared/atoms/battles";
import { playersAtom } from "shared/atoms/players";

@Controller({})
export class BattleController implements OnInit {
	private tweenInfos = {
		transparency: new TweenInfo(0.35, Enum.EasingStyle.Cubic, Enum.EasingDirection.Out, 0, false, 0),
		position: new TweenInfo(0.95, Enum.EasingStyle.Cubic, Enum.EasingDirection.Out, 0, false, 0),
	};

	public constructor(protected readonly cameraController: LotlCameraController) {}

	protected setCameraActive(active: boolean) {
		this.cameraController.useFixedPosition(active);

		if (active) {
			const { selectedCombatant, combatants, region } = playersAtom()[tostring(Players.LocalPlayer.UserId)];
			const combatant = combatants[selectedCombatant];
			const position = combatant.character.GetPivot().Position;

			this.cameraController.setFixedPosition(
				CFrame.lookAt(position, Workspace.battlegrounds[region].origin.Position).mul(ViewVectors.VIEW_BATTLE),
			);
		}
	}

	private onCombatantSwitch(selected: number) {
		const { combatants, region } = playersAtom()[tostring(Players.LocalPlayer.UserId)];

		if (selected < 0 || selected >= combatants.size()) {
			return;
		}

		const character = combatants[selected].character;

		for (const { character } of combatants) {
			for (const child of character.GetDescendants()) {
				if (child.IsA("BasePart")) {
					const tween = TweenService.Create(child, this.tweenInfos.transparency, {
						LocalTransparencyModifier: 1,
					});

					tween.Play();
				}
			}
		}

		for (const child of character.GetDescendants()) {
			if (child.IsA("BasePart")) {
				const tween = TweenService.Create(child, this.tweenInfos.transparency, {
					LocalTransparencyModifier: 0,
				});

				tween.Play();
			}
		}

		const position = character.GetPivot().Position;

		const tween = TweenService.Create(Workspace.CurrentCamera!, this.tweenInfos.position, {
			CFrame: CFrame.lookAt(position, Workspace.battlegrounds[region].origin.Position).mul(
				ViewVectors.VIEW_BATTLE,
			),
		});

		tween.Play();
	}

	onInit() {
		observe(battlesAtom, (_, battleId) => {
			const battle = new ClientBattle(battleId as string);

			battle.startBattle();

			this.setCameraActive(true);

			return () => {
				battle.stopBattle();

				this.setCameraActive(false);
			};
		});

		subscribe(
			() => playersAtom()[tostring(Players.LocalPlayer.UserId)]?.selectedCombatant,
			(selected) => {
				this.onCombatantSwitch(selected);
			},
		);
	}
}
