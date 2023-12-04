import { Components } from "@flamework/components";
import { Janitor } from "@rbxts/janitor";
import { PathfindingService } from "@rbxts/services";
import { Signal } from "@rbxts/beacon";
import { LotlMovement } from "shared/components/lotl_movement";
import { Character } from "shared/models/character";

export class Path {
	public readonly blocked = new Signal<[blockedWaypoint: PathWaypoint]>();
	public readonly error = new Signal<string>();
	public readonly waypointReached = new Signal<[lastWaypoint: PathWaypoint, nextWaypoint: PathWaypoint]>();
	public readonly moveToFinished = new Signal<[reached: boolean]>();
	public readonly finished = new Signal<[finalWaypoint: PathWaypoint]>();

	protected nextWaypoint = 1;

	protected path;
	protected waypoints: PathWaypoint[] = [];

	protected janitor = new Janitor<{
		blocked: RBXScriptConnection;
		reached: RBXScriptConnection;
		moved: RBXScriptConnection;
	}>();

	private isDestroyed = false;

	public constructor(
		protected character: Character,
		protected readonly components: Components,
		agentParams?: AgentParameters,
	) {
		this.path = PathfindingService.CreatePath(agentParams);
	}

	public async run(target: Vector3) {
		if (this.isDestroyed) {
			return;
		}

		try {
			this.path.ComputeAsync(this.character.HumanoidRootPart.Position, target);
		} catch (e) {
			this.error.Fire(e as string);
			return;
		}

		// Check again after yielding
		if (this.isDestroyed) {
			return;
		}

		const waypoints = this.path.GetWaypoints();

		if (waypoints.size() < 2) {
			this.error.Fire("Error computing waypoints");
			return;
		}

		this.waypoints = waypoints;

		this.janitor.Cleanup();

		this.janitor.Add(
			this.path.Blocked.Connect((blockedWaypoint) => {
				if (blockedWaypoint >= this.nextWaypoint) {
					this.janitor.Remove("blocked");

					this.attemptJump();

					this.blocked.Fire(this.waypoints[blockedWaypoint]);
				}
			}),
			"Disconnect",
			"blocked",
		);

		this.janitor.Add(
			this.moveToFinished.Connect((reached) => {
				if (reached && this.nextWaypoint < this.waypoints.size() - 1) {
					this.nextWaypoint++;

					if (this.waypoints[this.nextWaypoint].Action === Enum.PathWaypointAction.Jump) {
						this.attemptJump();
					}

					this.moveTo(this.waypoints[this.nextWaypoint].Position);

					this.waypointReached.Fire(this.waypoints[this.nextWaypoint - 1], this.waypoints[this.nextWaypoint]);
				} else {
					this.janitor.Cleanup();

					this.finished.Fire(this.waypoints[this.nextWaypoint]);
				}
			}),
			"Disconnect",
			"reached",
		);

		this.nextWaypoint = 1;
		this.moveTo(this.waypoints[this.nextWaypoint].Position);
	}

	public stop() {
		if (this.isDestroyed) {
			return;
		}

		this.janitor.Cleanup();
	}

	public destroy() {
		this.isDestroyed = true;

		this.blocked.Destroy();
		this.error.Destroy();
		this.waypointReached.Destroy();
		this.moveToFinished.Destroy();
		this.finished.Destroy();

		this.janitor.Destroy();
		this.path.Destroy();
	}

	protected moveTo(position: Vector3) {
		if (this.components.getComponents<LotlMovement>(this.character)[0]) {
			this.janitor.Add(
				this.character.HumanoidRootPart.GetPropertyChangedSignal("CFrame").Connect(() => {
					const direction = this.character.HumanoidRootPart.Position.sub(position);
					const distance = math.sqrt(direction.X * direction.X + direction.Z * direction.Z);

					if (distance < 0.4) {
						this.janitor.Remove("moved");

						this.moveToFinished.Fire(true);
					}
				}),
				"Disconnect",
				"moved",
			);

			this.character.Humanoid.WalkToPoint = position;
		} else {
			this.character.Humanoid.MoveTo(position);
			this.character.Humanoid.MoveToFinished.Once((reached) => this.moveToFinished.Fire(reached));
		}
	}

	protected attemptJump() {
		this.character.Humanoid.Jump = true;
	}
}
