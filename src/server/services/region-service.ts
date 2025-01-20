import { OnStart, Service } from "@flamework/core";
import { Workspace } from "@rbxts/services";
import { Region } from "shared/modules/globals";

@Service({})
export class RegionService implements OnStart {
	public getRegionOfCharacter(character: Model) {
		for (const region of Workspace.regions.GetChildren()) {
			const min = region.FindFirstChild("min");
			const max = region.FindFirstChild("max");

			assert(min && min.IsA("BasePart"), `Min part not found in region ${region}`);
			assert(max && max.IsA("BasePart"), `Max part not found in region ${region}`);

			if (this.isInArea(character.GetPivot().Position, min.Position, max.Position)) {
				return region.Name as Region;
			}
		}

		throw `Character ${character} is not a part of any region`;
	}

	private isInArea(position: Vector3, mins: Vector3, maxs: Vector3) {
		const { X, Y, Z } = position;

		const inX = (X > mins.X && X < maxs.X) || (X < mins.X && X > maxs.X),
			inY = (Y > mins.Y && Y < maxs.Y) || (Y < mins.Y && Y > maxs.Y),
			inZ = (Z > mins.Z && Z < maxs.Z) || (Z < mins.Z && Z > maxs.Z);

		return inX && inY && inZ;
	}

	onStart() {}
}
