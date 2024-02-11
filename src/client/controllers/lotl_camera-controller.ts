import { TweenService, Workspace } from "@rbxts/services";
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

	private tweenInfo = new TweenInfo(0.4, Enum.EasingStyle.Cubic, Enum.EasingDirection.Out, 0, false, 0);

	public constructor() {
		this.rayParams.FilterType = Enum.RaycastFilterType.Exclude;
		this.rayParams.FilterDescendantsInstances = [];
		this.rayParams.IgnoreWater = true;
	}

	protected followCharacter() {
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
		const character = PlayerNetworked.getLocalClient()?.getCharacter();

		if (!character) {
			return;
		}

		const camera = Workspace.CurrentCamera;

		if (!camera) {
			return;
		}

		const direction = character.HumanoidRootPart.Position.sub(camera.CFrame.Position);
		const result = Workspace.Raycast(camera.CFrame.Position, direction, this.rayParams);

		if (result) {
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

	protected updateRayParams() {
		this.rayParams.FilterDescendantsInstances = [
			...PlayerCollidable.getPlayers().mapFiltered((player) => player.getCharacter()),
			...PlayerCollidable.getBoundingBoxes(),
		];
	}

	onStart() {
		Workspace.CurrentCamera!.CameraType = Enum.CameraType.Scriptable;

		const player = PlayerNetworked.getLocalClient();

		if (player) {
			player.characterLoaded.Once(() => {
				Workspace.CurrentCamera!.CameraType = Enum.CameraType.Scriptable;
			});
		}
	}

	onRender() {
		this.followCharacter();

		this.updateRayParams();
		this.fadeObstructions();
	}
}
