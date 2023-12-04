import { Workspace } from "@rbxts/services";
import { Controller, OnStart, OnRender } from "@flamework/core";

@Controller({})
export class CameraController implements OnStart, OnRender {
	private cameraOrigin = CFrame.identity;

	private oldFinalOffset = CFrame.identity;
	private offsets: CameraOffset[] = [];

	public getCameraOrigin() {
		return this.cameraOrigin;
	}

	public addOffset(offset: CameraOffset) {
		if (!this.offsets.includes(offset)) {
			this.offsets.push(offset);
		}
	}

	public removeOffset(offset: CameraOffset) {
		const index = this.offsets.indexOf(offset);

		if (index !== -1) {
			this.offsets.remove(index);
		}
	}

	private applyOffsets() {
		const camera = Workspace.CurrentCamera;

		if (camera) {
			let finalOffset = CFrame.identity;

			for (const offset of this.offsets) {
				if (offset.getActive()) {
					finalOffset = finalOffset.mul(offset.getOffset());
				}
			}

			const origin = camera.CFrame.mul(this.oldFinalOffset.Inverse());

			camera.CFrame = origin.mul(finalOffset);

			const [x, y] = finalOffset.ToEulerAnglesXYZ();

			this.cameraOrigin = origin;
			this.oldFinalOffset = CFrame.Angles(x, y, 0); // Only the X and Y components aren't reset to 0 by the camera
		}
	}

	onStart() {}

	onRender() {
		this.applyOffsets();
	}
}

export class CameraOffset {
	private isActive = true;

	public constructor(private offset = CFrame.identity) {}

	public getActive() {
		return this.isActive;
	}

	public setActive(active: boolean) {
		this.isActive = active;
	}

	public getOffset() {
		return this.offset;
	}

	public setOffset(offset: CFrame) {
		this.offset = offset;
	}
}
