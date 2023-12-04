import { TweenService, Workspace } from "@rbxts/services";
import { Controller, OnStart, OnRender } from "@flamework/core";
import { PlayerNetworked } from "shared/models/player-networked";
import { ViewVectors } from "shared/modules/view-vectors";

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

		camera.CFrame = lookCFrame;
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
			TweenService.Create(result.Instance, this.tweenInfo, { LocalTransparencyModifier: 1 }).Play();

			this.oldObstruction = result.Instance;
		} else {
			if (this.oldObstruction) {
				TweenService.Create(this.oldObstruction, this.tweenInfo, { LocalTransparencyModifier: 0 }).Play();
			}
		}
	}

	protected updateRayParams() {
		const character = PlayerNetworked.getLocalClient()?.getCharacter();

		if (!character) {
			return;
		}

		this.rayParams.FilterDescendantsInstances = [character];
	}

	onStart() {}

	onRender() {
		this.followCharacter();
		this.fadeObstructions();
	}
}
