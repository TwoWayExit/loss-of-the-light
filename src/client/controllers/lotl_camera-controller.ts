import { CollectionService, TweenService, Workspace } from "@rbxts/services";
import { Controller, OnStart, OnRender } from "@flamework/core";
import { PlayerNetworked } from "shared/models/player-networked";
import { ViewVectors } from "shared/modules/view-vectors";
import { PlayerCollidable } from "shared/models/player-collidable";
import { stats } from "shared/modules/stats-defs";

@Controller({
	loadOrder: 2,
})
export class LotlCameraController implements OnStart, OnRender {
	protected rayParams = new RaycastParams();

	protected oldObstruction?: BasePart;

	protected usingFixedPosition = false;

	private fixedPosition = CFrame.identity;

	private tweenInfo = new TweenInfo(0.4, Enum.EasingStyle.Cubic, Enum.EasingDirection.Out, 0, false, 0);

	public constructor() {
		this.rayParams.FilterType = Enum.RaycastFilterType.Include;
		this.rayParams.IgnoreWater = true;
	}

	public getFixedPosition() {
		return this.fixedPosition;
	}

	public setFixedPosition(cframe: CFrame) {
		this.fixedPosition = cframe;

		this.updateFixedPosition();
	}

	/** @param isUsing - If true, sets the camera type to Scriptable and positions the camera to the last set fixed position, else Custom */
	public useFixedPosition(isUsing: boolean) {
		this.usingFixedPosition = isUsing;

		this.updateFixedPosition();
	}

	protected followCharacter() {
		if (this.usingFixedPosition) {
			return;
		}

		const character = PlayerNetworked.getLocalClient()?.getCharacter();

		if (!character) {
			return;
		}

		const camera = Workspace.CurrentCamera;

		if (!camera) {
			return;
		}

		const position = character.HumanoidRootPart.Position.add(ViewVectors.VIEW);
		const lookCFrame = CFrame.lookAt(position, character.HumanoidRootPart.Position);

		camera.CFrame = camera.CFrame.Lerp(lookCFrame, math.min(16 * stats.frameTime, 1));
	}

	protected fadeObstructions() {
		if (this.usingFixedPosition) {
			if (this.oldObstruction) {
				TweenService.Create(this.oldObstruction, this.tweenInfo, { LocalTransparencyModifier: 0 }).Play();

				this.oldObstruction = undefined;
			}

			return;
		}

		const character = PlayerNetworked.getLocalClient()?.getCharacter();

		if (!character) {
			return;
		}

		const camera = Workspace.CurrentCamera;

		if (!camera) {
			return;
		}

		this.rayParams.FilterDescendantsInstances = CollectionService.GetTagged("Obstruction");

		const direction = character.HumanoidRootPart.Position.sub(camera.CFrame.Position);
		const result = Workspace.Raycast(camera.CFrame.Position, direction, this.rayParams);

		if (result && (!this.oldObstruction || result.Instance === this.oldObstruction)) {
			if (!this.oldObstruction) {
				TweenService.Create(result.Instance, this.tweenInfo, { LocalTransparencyModifier: 0.6 }).Play();

				this.oldObstruction = result.Instance;
			}
		} else {
			if (this.oldObstruction) {
				TweenService.Create(this.oldObstruction, this.tweenInfo, { LocalTransparencyModifier: 0 }).Play();

				this.oldObstruction = undefined;
			}
		}
	}

	protected updateFixedPosition() {
		const camera = Workspace.CurrentCamera;

		if (!camera) {
			return;
		}

		if (this.usingFixedPosition) {
			camera.CameraType = Enum.CameraType.Scriptable;
			camera.CFrame = this.fixedPosition;
		} else {
			camera.CameraType = Enum.CameraType.Custom;
		}
	}

	protected updateRayParams() {
		this.rayParams.FilterDescendantsInstances = [
			...PlayerCollidable.getPlayers().mapFiltered((player) => player.getCharacter()),
			...PlayerCollidable.getBoundingBoxes(),
		];
	}

	onStart() {
		const player = PlayerNetworked.getLocalClient();
		const character = player?.getCharacter();

		if (player) {
			if (character) {
				Workspace.CurrentCamera!.CameraType = Enum.CameraType.Scriptable;
			} else {
				player.characterLoaded.Once(() => {
					Workspace.CurrentCamera!.CameraType = Enum.CameraType.Scriptable;

					this.updateRayParams();
				});
			}
		}

		PlayerCollidable.playerAdded.Connect(() => this.updateRayParams());
	}

	onRender() {
		this.followCharacter();

		this.fadeObstructions();
	}
}
