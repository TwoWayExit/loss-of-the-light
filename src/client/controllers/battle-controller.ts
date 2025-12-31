import { Controller, OnInit } from "@flamework/core";
import { LotlCameraController } from "client/controllers/lotl_camera-controller";
import { ClientBattle } from "client/models/client-battle";
import { ViewVectors } from "shared/modules/view-vectors";
import { Players, TweenService, Workspace } from "@rbxts/services";
import { observe, subscribe } from "@rbxts/charm";
import { battlesAtom, getEnemyCombatants } from "shared/atoms/battles";
import { playersAtom } from "shared/atoms/players";
import { clSelectedCombatant, selectedEnemy } from "client/atoms/client-info";
import { Events } from "client/network";
import "shared/modules/skillsets";

// NOTE: The idea is that BattleController will handle user-prompted events (e.g. combatant switching, skill targeting), while logic in ClientBattle will respond to state changes (e.g. starting, next phase, ending)
@Controller({})
export class BattleController implements OnInit {
	private tweenInfos = {
		transparency: new TweenInfo(0.35, Enum.EasingStyle.Cubic, Enum.EasingDirection.Out, 0, false, 0),
		position: new TweenInfo(0.95, Enum.EasingStyle.Cubic, Enum.EasingDirection.Out, 0, false, 0),
	};

	private currentBattle?: ClientBattle;

	public constructor(protected readonly cameraController: LotlCameraController) {}

	protected setCameraActive(active: boolean) {
		this.cameraController.useFixedPosition(active);

		if (active) {
			const { combatants, region } = playersAtom()[tostring(Players.LocalPlayer.UserId)];
			const combatant = combatants[clSelectedCombatant()];
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

		Events.lotl.selectCombatant(selected);
	}

	private onEnemySwitch(enemyIndex: number, combatantIndex: number) {
		const enemyCombatant = getEnemyCombatants(tostring(Players.LocalPlayer.UserId), enemyIndex)[combatantIndex];
		const pivot = enemyCombatant.character.GetPivot();
		const tween = TweenService.Create(Workspace.CurrentCamera!, this.tweenInfos.position, {
			CFrame: pivot.mul(CFrame.fromEulerAngles(0, math.pi, 0)).mul(ViewVectors.VIEW_BATTLE),
		});

		tween.Play();
	}

	private subscribeAtoms() {
		observe(battlesAtom, (battleInfo, battleId) => {
			this.currentBattle = new ClientBattle(battleId as string, battleInfo.first);
			this.currentBattle.startBattle();

			clSelectedCombatant(0);

			this.onCombatantSwitch(0);
			this.setCameraActive(true);

			return () => {
				this.currentBattle?.stopBattle();

				delete this.currentBattle;

				clSelectedCombatant(-1);

				this.setCameraActive(false);
			};
		});

		subscribe(clSelectedCombatant, (selected) => {
			this.onCombatantSwitch(selected);
		});

		subscribe(selectedEnemy, ([enemyIndex, combatantIndex]) => {
			this.onEnemySwitch(enemyIndex, combatantIndex);
		});
	}

	onInit() {
		this.subscribeAtoms();
	}
}
