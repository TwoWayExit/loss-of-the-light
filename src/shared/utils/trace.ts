import { Debris, Workspace } from "@rbxts/services";

export class RayT {
	public readonly start: Vector3;
	public readonly delta: Vector3;
	public readonly startOffset: Vector3;
	public readonly extents: Vector3;

	public constructor(start: Vector3, end_: Vector3, min: Vector3, max: Vector3) {
		this.delta = end_.sub(start);

		this.extents = max.sub(min).mul(0.5);

		this.startOffset = min.add(max).mul(0.5);
		this.start = start.add(this.startOffset);
	}
}

export type TraceT = {
	/** Start position */
	startPos: Vector3;

	/** Final position */
	endPos: Vector3;

	/** RaycastResult at impact */
	plane?: RaycastResult;

	/** Time completed, 1 = didn't hit anything */
	fraction: number;

	/** If true, the initial point was in a solid area */
	startSolid: boolean;
};

export class Trace {
	protected boundingBox = new Instance("Part");

	private overlapParams = new OverlapParams();

	public constructor() {
		this.boundingBox.Anchored = true;
		this.boundingBox.CanCollide = false;
		this.boundingBox.CanTouch = false;
		this.boundingBox.CanQuery = false;
		this.boundingBox.Transparency = 1;
		this.boundingBox.Name = tostring(this);
	}

	/** Destructor */
	public destroy() {
		this.boundingBox.Destroy();
	}

	/**
	 * Sweeps a box through the world and returns information on the first object hit
	 * @param ray - A RayT object
	 * @returns The result of the box trace
	 */
	public traceBox(ray: RayT): TraceT;

	/**
	 * Sweeps a box through the world and returns information on the first object hit
	 * @param ray - A RayT object
	 * @param rayParams - A RaycastParams filter
	 * @returns The result of the box trace
	 */
	public traceBox(ray: RayT, rayParams: RaycastParams): TraceT;

	public traceBox(ray: RayT, rayParams?: RaycastParams) {
		const min = ray.start.sub(ray.extents);
		const max = ray.start.add(ray.extents);

		if (rayParams) {
			this.overlapParams.FilterType = rayParams.FilterType;
			this.overlapParams.FilterDescendantsInstances = rayParams.FilterDescendantsInstances;
		}

		const trace: Partial<TraceT> = {};

		this.boundingBox.Position = ray.start;
		this.boundingBox.Size = ray.extents.mul(2).sub(new Vector3(0.1, 0.1, 0.1)); // Reduce by a small margin to avoid false hits

		trace.startSolid = Workspace.GetPartsInPart(this.boundingBox, this.overlapParams).size() > 0;

		const delta = ray.delta !== Vector3.zero && this.isValidVector(ray.delta) ? ray.delta : Vector3.yAxis;

		const extentsLength = ray.extents.Magnitude;
		const direction = delta.Unit;

		const iStart = ray.start.sub(direction.mul(extentsLength));
		const iEnd = ray.start.add(direction.mul(extentsLength));
		const iRay = new RayT(iStart, iEnd, min, max);
		const [startFraction, endFraction] = this.getBBoxIntersectPoints(iRay);

		const start = direction.mul(startFraction * extentsLength * 2);
		const end_ = direction.mul(endFraction * extentsLength * 2);
		const pointDelta = end_.sub(start);

		const result = Workspace.Blockcast(
			new CFrame(ray.start.sub(pointDelta)),
			ray.extents.mul(2),
			delta.add(pointDelta),
			rayParams,
		);

		if (result) {
			trace.plane = result;

			const distance = result.Distance - pointDelta.Magnitude;

			if (distance <= 0 || trace.startSolid) {
				trace.fraction = 0;
				trace.startPos = ray.start.sub(ray.startOffset);
				trace.endPos = trace.startPos;

				return trace as TraceT;
			}

			trace.fraction = distance / delta.Magnitude;
			trace.startPos = ray.start.sub(ray.startOffset);
			trace.endPos = trace.startPos.add(delta.mul(trace.fraction));

			return trace as TraceT;
		}

		trace.fraction = 1;
		trace.startPos = ray.start.sub(ray.startOffset);
		trace.endPos = trace.startPos.add(delta);

		return trace as TraceT;
	}

	/**
	 * Gets the point intersection fractions of an AABB
	 * @see {@link https://gdbooks.gitbooks.io/3dcollisions/content/Chapter3/raycast_aabb.html}
	 * @param ray - A RayT object
	 * @returns A number tuple with the first value being the beginning intersection fraction, and the second being the end intersection fraction
	 */
	protected getBBoxIntersectPoints(ray: RayT): LuaTuple<[startFraction: number, endFraction: number]> {
		const start = ray.start.sub(ray.startOffset);
		const direction = ray.delta;

		const min = ray.startOffset.sub(ray.extents);
		const max = ray.startOffset.add(ray.extents);

		const t1 = (min.X - start.X) / direction.X;
		const t2 = (max.X - start.X) / direction.X;
		const t3 = (min.Y - start.Y) / direction.Y;
		const t4 = (max.Y - start.Y) / direction.Y;
		const t5 = (min.Z - start.Z) / direction.Z;
		const t6 = (max.Z - start.Z) / direction.Z;

		const tMin = math.max(math.max(math.min(t1, t2), math.min(t3, t4)), math.min(t5, t6));
		const tMax = math.min(math.min(math.max(t1, t2), math.max(t3, t4)), math.max(t5, t6));

		if (tMax < 0) {
			return $tuple(0, 1);
		}

		if (tMin > tMax) {
			return $tuple(0, 1);
		}

		if (tMin < 0) {
			return $tuple(tMax, tMin);
		}

		return $tuple(tMin, tMax);
	}

	/** @internal */
	protected isValidVector(vector: Vector3) {
		return (
			vector.X === vector.X &&
			vector.Y === vector.Y &&
			vector.Z === vector.Z &&
			vector.X !== math.huge &&
			vector.Y !== math.huge &&
			vector.Z !== math.huge
		);
	}

	/** @internal */
	protected visualizePoint(origin: Vector3) {
		const part = new Instance("Part");

		part.Parent = Workspace.fx;

		part.Anchored = true;
		part.CanCollide = false;
		part.CanQuery = false;
		part.CanTouch = false;

		part.Color = new Color3(0, 1, 0);
		part.CastShadow = false;

		part.Size = new Vector3(0.2, 0.2, 0.2);
		part.Position = origin;

		Debris.AddItem(part, 1);
	}

	/** @internal */
	protected visualizeRaycast(origin: Vector3, direction: Vector3) {
		const part = new Instance("Part");

		part.Parent = Workspace.fx;

		part.Anchored = true;
		part.CanCollide = false;
		part.CanQuery = false;
		part.CanTouch = false;

		part.Color = new Color3(1, 0, 0);
		part.CastShadow = false;

		part.Size = new Vector3(0.01, 0.01, direction.Magnitude);
		part.CFrame = CFrame.lookAt(origin, origin.add(direction)).mul(new CFrame(0, 0, -direction.Magnitude / 2));

		Debris.AddItem(part, 0.01);
	}
}
