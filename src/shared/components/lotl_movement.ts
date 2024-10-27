import { OnPhysics, OnStart } from "@flamework/core";
import { Component } from "@flamework/components";
import { DisposableComponent } from "./disposable-component";
import { CollectionService, Players, RunService, Workspace } from "@rbxts/services";
import { promiseChildOfClass } from "@rbxts/promise-child";
import { CharacterRigR15, CharacterRigR6 } from "@rbxts/promise-character";
import { stats } from "shared/modules/stats-defs";
import { globalReplicas } from "shared/replicas";
import { BasePlayer } from "shared/models/player";
import { ViewVectors } from "shared/modules/view-vectors";
import { Trace, TraceT, RayT } from "shared/utils/trace";
import { PlayerCollidable } from "shared/models/player-collidable";
import { $env } from "rbxts-transform-env";
import { Tags } from "shared/modules/tags";
import { States } from "shared/modules/states";

interface Attributes {
	walkSpeed: number;
}

const NON_JUMP_VELOCITY = 22;
const MAX_CLIP_PLANES = 5;

export class MoveData {
	public buttons = 0;
	public oldButtons = 0;
	public forwardMove = 0;
	public sideMove = 0;
	public maxSpeed = 0;

	public constructor(protected character: CharacterRigR6 | CharacterRigR15) {}

	/**
	 * Gets the player character's height above the ground
	 * @returns The player character's height above the ground in studs
	 */
	public getCharacterHeight() {
		let height;

		switch (this.character.Humanoid.RigType) {
			case Enum.HumanoidRigType.R6:
				height =
					(this.character as CharacterRigR6)["Left Leg"].Size.Y + this.character.HumanoidRootPart.Size.Y / 2;
				break;

			case Enum.HumanoidRigType.R15:
				height = this.character.HumanoidRootPart.Size.Y / 2 + this.character.Humanoid.HipHeight;
				break;

			default:
				throw `${this.character.Name} has an unknown rig type: ${this.character.Humanoid.RigType}`;
		}

		return height;
	}

	/**
	 * Gets the player character's absolute origin
	 * @returns The player character's absolute origin
	 * @remarks The absolute origin of the character is located at the feet
	 */
	public getAbsOrigin() {
		return this.character.HumanoidRootPart.Position.sub(new Vector3(0, this.getCharacterHeight(), 0));
	}

	/**
	 * Sets the player character's absolute origin
	 * @remarks The absolute origin of the character is located at the feet
	 */
	public setAbsOrigin(vec: Vector3) {
		const newPosition = vec.add(new Vector3(0, this.getCharacterHeight(), 0));

		this.character.PivotTo(this.character.GetPivot().sub(this.character.GetPivot().Position).add(newPosition));
	}
}

@Component({
	tag: "lotl_movement",
	defaults: {
		walkSpeed: 18,
	},
	predicate: (instance) => instance.IsDescendantOf(Workspace),
})
export class LotlMovement<A extends Attributes = Attributes, I extends Model = Model>
	extends DisposableComponent<A, I>
	implements OnStart, OnPhysics
{
	/**
	 * !! WARNING !!
	 *
	 * * This property can be `undefined` when the player character's body parts have yet to fully load
	 */
	public move!: MoveData;

	protected maxSpeed = this.attributes.walkSpeed;

	protected player!: PlayerCollidable<Player | undefined>;

	protected character!: CharacterRigR6 | CharacterRigR15;
	protected velocity!: LinearVelocity;

	protected groundEntity?: RaycastResult;

	protected rayParams = new RaycastParams();
	protected trace = new Trace();

	public constructor() {
		super();

		this.rayParams.FilterType = Enum.RaycastFilterType.Exclude;
		this.rayParams.FilterDescendantsInstances = [this.instance, Workspace.CurrentCamera!];
		this.rayParams.IgnoreWater = true;

		BasePlayer.getPlayers().forEach((player) => this.handlePlayer(player));

		this.janitor.Add(() => this.trace.destroy());
		this.janitor.Add(BasePlayer.playerAdded.Connect((player) => this.handlePlayer(player)));
	}

	/**
	 * !! WARNING !!
	 *
	 * This value can be `undefined` when the player character's body parts have yet to fully load
	 */
	public getVelocity() {
		return this.velocity?.VectorVelocity;
	}

	public getGroundEntity() {
		return this.groundEntity;
	}

	/**
	 * Gets the player character's bounding box mins (in local space)
	 * @returns The player character's bounding box mins
	 */
	public getPlayerMins() {
		assert(this.character);

		return ViewVectors.HULL_MIN.mul(this.character.GetScale());
	}

	/**
	 * Gets the player character's bounding box maxs (in local space)
	 * @returns The player character's bounding box maxs
	 */
	public getPlayerMaxs() {
		assert(this.character);

		return ViewVectors.HULL_MAX.mul(this.character.GetScale());
	}

	protected createVelocity(rootPart: BasePart) {
		// Remove the server added velocity on the client to avoid conflict
		if (RunService.IsClient()) {
			const serverVelocity = CollectionService.GetTagged(Tags.ENV_SV).find(
				(v) => v.IsA("LinearVelocity") && v.Parent === rootPart,
			);

			serverVelocity?.Destroy();
		}

		const velocity = new Instance("LinearVelocity");

		CollectionService.AddTag(velocity, RunService.IsServer() ? Tags.ENV_SV : Tags.ENV_CL);

		velocity.Attachment0 = rootPart.WaitForChild("RootAttachment") as Attachment;
		velocity.MaxForce = 25000;
		velocity.Parent = rootPart;

		return velocity;
	}

	protected async handlePlayer(player: BasePlayer) {
		const character = player.getCharacter() ?? player.characterLoaded.Wait()[0];
		const bodyParts = character
			.GetDescendants()
			.filter((v) => v.IsA("BasePart") && v.CollisionGroup !== "BoundingBoxes");

		this.rayParams.FilterDescendantsInstances = [...bodyParts, ...this.rayParams.FilterDescendantsInstances];
	}

	protected reduceTimers() {
		const frameMsec = 1000 * stats.frameTime;

		if (this.player.localData.duckTime > 0) {
			this.player.localData.duckTime -= frameMsec;

			if (this.player.localData.duckTime < 0) {
				this.player.localData.duckTime = 0;
			}
		}
	}

	protected stayOnGround() {
		const end_ = this.move.getAbsOrigin().sub(new Vector3(0, this.player.getStepSize(), 0));

		/* Commented out to save on performance, 1 trace is enough

		// See how far up we can go without getting stuck
		let start = this.getAbsOrigin().add(new Vector3(0, 0.1, 0));
		let trace = this.traceBoundingBox(this.getAbsOrigin(), start);

		start = trace.endPos;

		*/

		const start = this.move.getAbsOrigin().add(new Vector3(0, 0.2, 0));

		// Now trace down from a known safe position
		const trace = this.traceBoundingBox(start, end_);

		if (
			trace.fraction > 0 && // must go somewhere
			trace.fraction < 1 && // must hit something
			!trace.startSolid && // can't be embedded in a solid
			trace.plane!.Normal.Y >= 0.7 // can't hit a steep slope that we can't stand on anyway
		) {
			const flDelta = math.abs(this.move.getAbsOrigin().Y - trace.endPos.Y);

			if (flDelta > 0.02) {
				this.move.setAbsOrigin(trace.endPos);
			}
		}
	}

	protected tryPlayerMove(pFirstDest?: Vector3, pFirstTrace?: TraceT) {
		const numBumps = 4;
		const planes: Vector3[] = [];
		const primalVelocity = this.getVelocity();

		let dir = Vector3.zero;
		let d = 0;
		let numPlanes = 0;
		let originalVelocity = this.getVelocity();
		let newVelocity = Vector3.zero;
		let i = 0,
			j = 0;
		let endVector = Vector3.zero;
		let timeLeft = stats.frameTime,
			allFraction = 0;

		for (let bumpCount = 0; bumpCount < numBumps; bumpCount++) {
			if (this.getVelocity().Magnitude === 0) {
				break;
			}

			endVector = this.move.getAbsOrigin().add(this.getVelocity().mul(timeLeft));

			let pm: TraceT;

			if (pFirstDest && endVector === pFirstDest && pFirstTrace) {
				pm = pFirstTrace;
			} else {
				pm = this.traceBoundingBox(this.move.getAbsOrigin(), endVector);
			}

			allFraction += pm.fraction;

			if (pm.fraction > 0) {
				originalVelocity = this.getVelocity();
				numPlanes = 0;
			}

			if (pm.fraction === 1) {
				break;
			}

			timeLeft -= timeLeft * pm.fraction;

			// Did we run out of planes to clip against?
			if (numPlanes >= MAX_CLIP_PLANES) {
				// this shouldn't really happen
				//  Stop our movement if so.
				this.velocity.VectorVelocity = Vector3.zero;
				break;
			}

			// Set up next clipping plane
			planes[numPlanes] = pm.plane!.Normal;
			numPlanes++;

			// reflect player velocity
			// Only give this a try for first impact plane because you can get yourself stuck in an acute corner by jumping in place
			//  and pressing forward and nobody was really using this bounce/reflection feature anyway...
			if (numPlanes === 1 && !this.groundEntity) {
				for (i = 0; i < numPlanes; i++) {
					if (planes[i].Y > 0.7) {
						// floor or slope
						newVelocity = this.clipVelocity(originalVelocity, planes[i], 1);
						originalVelocity = newVelocity;
					} else {
						newVelocity = this.clipVelocity(originalVelocity, planes[i], 1);
					}
				}

				this.velocity.VectorVelocity = newVelocity;
				originalVelocity = newVelocity;
			} else {
				for (i = 0; i < numPlanes; i++) {
					this.velocity.VectorVelocity = this.clipVelocity(originalVelocity, planes[i], 1);

					for (j = 0; j < numPlanes; j++) {
						if (j !== i) {
							// Are we now moving against this plane?
							if (this.getVelocity().Dot(planes[j]) < 0) {
								break;
							}
						}
					}

					if (j === numPlanes) {
						break;
					}
				}

				// Did we go all the way through plane set
				if (i !== numPlanes) {
					// go along this plane
					// pmove.velocity is set in clipping call, no need to set again.
				} else {
					// go along the crease
					if (numPlanes !== 2) {
						this.velocity.VectorVelocity = Vector3.zero;
					}

					dir = planes[0].Cross(planes[1]).Unit;
					d = dir.Dot(this.getVelocity());

					this.velocity.VectorVelocity = dir.mul(d);
				}

				//
				// if original velocity is against the original velocity, stop dead
				// to avoid tiny occilations in sloping corners
				//
				d = this.getVelocity().Dot(primalVelocity);

				if (d <= 0) {
					this.velocity.VectorVelocity = Vector3.zero;
					break;
				}
			}
		}

		if (allFraction === 0) {
			this.velocity.VectorVelocity = Vector3.zero;
		}
	}

	protected clipVelocity(in_: Vector3, normal: Vector3, overbounce: number) {
		const backoff = in_.Dot(normal) * overbounce;
		const change = normal.mul(backoff);

		let out = in_.sub(change);

		const adjust = out.Dot(normal);

		if (adjust < 0) {
			out = out.sub(normal.mul(adjust));
		}

		return out;
	}

	protected startGravity() {
		const Replicas = RunService.IsClient() ? globalReplicas.client : globalReplicas.server;
		const player = this.player.getLocalPlayer() ?? Players.GetPlayers()[0];

		if (this.groundEntity) {
			this.velocity.VectorVelocity = new Vector3(this.getVelocity().X, 0, this.getVelocity().Z);
		} else {
			this.velocity.VectorVelocity = this.getVelocity().add(
				new Vector3(0, -Replicas.movement.GetValue(player).sv_gravity * 0.5 * stats.frameTime, 0),
			);
		}

		this.checkVelocity();
	}

	protected finishGravity() {
		const Replicas = RunService.IsClient() ? globalReplicas.client : globalReplicas.server;
		const player = this.player.getLocalPlayer() ?? Players.GetPlayers()[0];

		if (this.groundEntity) {
			this.velocity.VectorVelocity = new Vector3(this.getVelocity().X, 0, this.getVelocity().Z);
		} else {
			this.velocity.VectorVelocity = this.getVelocity().add(
				new Vector3(0, -Replicas.movement.GetValue(player).sv_gravity * 0.5 * stats.frameTime, 0),
			);
		}

		this.checkVelocity();
	}

	protected checkVelocity() {
		const Replicas = RunService.IsClient() ? globalReplicas.client : globalReplicas.server;
		const player = this.player.getLocalPlayer() ?? Players.GetPlayers()[0];

		const vecVelocity = [this.getVelocity().X, this.getVelocity().Y, this.getVelocity().Z];

		for (let i = 0; i < 3; i++) {
			// Check if it's NaN
			if (vecVelocity[i] !== vecVelocity[i]) {
				vecVelocity[i] = 0;
			}

			if (vecVelocity[i] > Replicas.movement.GetValue(player).sv_maxvelocity) {
				vecVelocity[i] = Replicas.movement.GetValue(player).sv_maxvelocity;
			} else if (vecVelocity[i] < -Replicas.movement.GetValue(player).sv_maxvelocity) {
				vecVelocity[i] = -Replicas.movement.GetValue(player).sv_maxvelocity;
			}
		}

		this.velocity.VectorVelocity = new Vector3(vecVelocity[0], vecVelocity[1], vecVelocity[2]);
	}

	protected applyFriction(amount: number) {
		const speed = this.getVelocity().Magnitude;

		if (speed < 0.05) {
			return;
		}

		const Replicas = RunService.IsClient() ? globalReplicas.client : globalReplicas.server;
		const player = this.player.getLocalPlayer() ?? Players.GetPlayers()[0];

		const control =
			speed < Replicas.movement.GetValue(player).sv_stopspeed
				? Replicas.movement.GetValue(player).sv_stopspeed
				: speed;
		const drop = control * amount * stats.frameTime;
		const newspeed = math.max(speed - drop, 0);

		if (newspeed !== speed) {
			this.velocity.VectorVelocity = this.getVelocity().mul(newspeed / speed);
		}
	}

	protected canAccelerate() {
		if (!this.player.isAlive()) {
			return false;
		}

		return true;
	}

	protected accelerate(wishDir: Vector3, wishSpeed: number, accel: number) {
		if (!this.canAccelerate()) {
			return;
		}

		const currentSpeed = this.getVelocity().Dot(wishDir),
			addSpeed = wishSpeed - currentSpeed;

		if (addSpeed <= 0) {
			return;
		}

		let accelSpeed = accel * stats.frameTime * wishSpeed;

		if (accelSpeed > addSpeed) {
			accelSpeed = addSpeed;
		}

		this.velocity.VectorVelocity = this.getVelocity().add(wishDir.mul(accelSpeed));
	}

	protected stepMove(vecDestination: Vector3, trace: TraceT) {
		let vecEndPos = vecDestination;

		// Try sliding forward both on ground and up
		//  take the move that goes farthest
		const vecPos = this.move.getAbsOrigin(),
			vecVel = this.getVelocity();

		// Slide move down.
		this.tryPlayerMove(vecEndPos, trace);

		// Down results.
		const vecDownPos = this.move.getAbsOrigin(),
			vecDownVel = this.getVelocity();

		// Reset original values.
		this.move.setAbsOrigin(vecPos);
		this.velocity.VectorVelocity = vecVel;

		// Move up a stair height.
		vecEndPos = this.move.getAbsOrigin().add(new Vector3(0, this.player.getStepSize(), 0));

		trace = this.traceBoundingBox(this.move.getAbsOrigin(), vecEndPos);

		if (!trace.startSolid) {
			this.move.setAbsOrigin(trace.endPos);
		}

		// Slide move up.
		this.tryPlayerMove();

		// Move down a stair (attempt to).
		vecEndPos = this.move.getAbsOrigin().sub(new Vector3(0, this.player.getStepSize(), 0));

		trace = this.traceBoundingBox(this.move.getAbsOrigin(), vecEndPos);

		// If we are not on the ground any more then use the original movement attempt.
		if (trace.plane && trace.plane.Normal.Y < 0.7) {
			this.move.setAbsOrigin(vecDownPos);

			this.velocity.VectorVelocity = vecDownVel;
			return;
		}

		// If the trace ended up in empty space, copy the end over to the origin.
		if (!trace.startSolid) {
			this.move.setAbsOrigin(trace.endPos);
		}

		// Copy this origin to up.
		const vecUpPos = this.move.getAbsOrigin();

		// decide which one went farther
		const flDownDist = math.pow(vecDownPos.X - vecPos.X, 2) + math.pow(vecDownPos.Y - vecPos.Y, 2);
		const flUpDist = math.pow(vecUpPos.X - vecPos.X, 2) + math.pow(vecUpPos.Y - vecPos.Y, 2);

		if (flDownDist > flUpDist) {
			this.move.setAbsOrigin(vecDownPos);

			this.velocity.VectorVelocity = vecDownVel;
		} else {
			// copy y value from slide move
			this.velocity.VectorVelocity = new Vector3(this.getVelocity().X, vecDownVel.Y, this.getVelocity().Z);
		}
	}

	protected walkMove() {
		let wishDir: Vector3;
		let wishSpeed: number;
		let dest = this.move.getAbsOrigin();

		let forward = this.player.getViewCFrame().LookVector;
		let right = this.player.getViewCFrame().RightVector;

		forward = new Vector3(forward.X, 0, forward.Z).Unit;
		right = new Vector3(right.X, 0, right.Z).Unit;

		const wishVel = new Vector3(
			forward.X * this.move.forwardMove + right.X * this.move.sideMove,
			0,
			forward.Z * this.move.forwardMove + right.Z * this.move.sideMove,
		);

		wishDir = wishVel.Unit;
		wishSpeed = wishVel.Magnitude;

		// If wishSpeed is 0, then wishDir is definitely NaN
		if (wishSpeed === 0) {
			wishDir = Vector3.zero;
		}

		if (wishSpeed > this.maxSpeed) {
			wishSpeed = this.maxSpeed;
		}

		const Replicas = RunService.IsClient() ? globalReplicas.client : globalReplicas.server;
		const player = this.player.getLocalPlayer() ?? Players.GetPlayers()[0];

		this.accelerate(wishDir, wishSpeed, Replicas.movement.GetValue(player).sv_accelerate);

		const speed = this.getVelocity().Magnitude;

		if (speed < 0.05) {
			this.velocity.VectorVelocity = Vector3.zero;
			return;
		}

		// first try just moving to the destination
		dest = dest.add(new Vector3(this.getVelocity().X * stats.frameTime, 0, this.getVelocity().Z * stats.frameTime));

		// first try moving directly to the next spot
		const pm = this.traceBoundingBox(this.move.getAbsOrigin(), dest);

		// If we made it all the way, then copy trace end as new player position.
		if (pm.fraction === 1) {
			// this.setAbsOrigin(pm.endPos); // makes you 2x faster

			this.stayOnGround();
			return;
		}

		this.stepMove(dest, pm);
		this.stayOnGround();
	}

	protected tryTouchGroundInQuadrants(start: Vector3, end_: Vector3, pm: TraceT) {
		let mins: Vector3, maxs: Vector3;

		const minsSrc = this.getPlayerMins();
		const maxsSrc = this.getPlayerMaxs();

		const fraction = pm.fraction;
		const endPos = pm.endPos;

		// Check the -x, -z quadrant
		mins = minsSrc;
		maxs = new Vector3(math.min(0, maxsSrc.X), maxsSrc.Y, math.min(0, maxsSrc.Z));

		pm = this.tryTouchGround(start, end_, mins, maxs);

		if (pm.plane && pm.plane.Normal.Y >= 0.7) {
			pm.fraction = fraction;
			pm.endPos = endPos;

			return pm;
		}

		// Check the +x, +z quadrant
		mins = new Vector3(math.max(0, minsSrc.X), minsSrc.Y, math.max(0, minsSrc.Z));
		maxs = maxsSrc;

		pm = this.tryTouchGround(start, end_, mins, maxs);

		if (pm.plane && pm.plane.Normal.Y >= 0.7) {
			pm.fraction = fraction;
			pm.endPos = endPos;

			return pm;
		}

		// Check the -x, +z quadrant
		mins = new Vector3(minsSrc.X, minsSrc.Y, math.max(0, minsSrc.Z));
		maxs = new Vector3(math.min(0, maxsSrc.X), maxsSrc.Y, maxsSrc.Z);

		pm = this.tryTouchGround(start, end_, mins, maxs);

		if (pm.plane && pm.plane.Normal.Y >= 0.7) {
			pm.fraction = fraction;
			pm.endPos = endPos;

			return pm;
		}

		// Check the +x, -z quadrant
		mins = new Vector3(math.max(0, minsSrc.X), minsSrc.Y, minsSrc.Z);
		maxs = new Vector3(maxsSrc.X, maxsSrc.Y, math.min(0, maxsSrc.Z));

		pm = this.tryTouchGround(start, end_, mins, maxs);

		if (pm.plane && pm.plane.Normal.Y >= 0.7) {
			pm.fraction = fraction;
			pm.endPos = endPos;

			return pm;
		}

		pm.fraction = fraction;
		pm.endPos = endPos;

		return pm;
	}

	protected categorizePosition() {
		const bumpOrigin = this.move.getAbsOrigin().add(new Vector3(0, 0.2, 0));
		const point = new Vector3(bumpOrigin.X, bumpOrigin.Y - 0.55, bumpOrigin.Z);

		const movingUpRapidly = this.getVelocity().Y > NON_JUMP_VELOCITY;

		if (movingUpRapidly || (this.groundEntity && this.groundEntity.Normal.Y < 0.7)) {
			this.groundEntity = undefined;
		} else {
			const pm = this.tryTouchGround(bumpOrigin, point, this.getPlayerMins(), this.getPlayerMaxs());

			if (!pm.plane || pm.plane.Normal.Y < 0.7) {
				/* This kills performance
				pm = this.tryTouchGroundInQuadrants(bumpOrigin, point, pm);

				if (!pm.plane || pm.plane.Normal.Y < 0.7) {
					this.groundEntity = undefined;
				} else {
					this.groundEntity = pm.plane;
				}
				*/

				this.groundEntity = undefined;
			} else {
				this.groundEntity = pm.plane;
			}
		}
	}

	protected faceVelocity() {
		let forward = this.player.getViewCFrame().LookVector;
		let right = this.player.getViewCFrame().RightVector;

		forward = new Vector3(forward.X, 0, forward.Z).Unit;
		right = new Vector3(right.X, 0, right.Z).Unit;

		const wishVel = new Vector3(
			forward.X * this.player.command.forwardMove + right.X * this.player.command.sideMove,
			0,
			forward.Z * this.player.command.forwardMove + right.Z * this.player.command.sideMove,
		);

		if (wishVel.Magnitude < 0.05) {
			return;
		}

		const lookCFrame = CFrame.lookAt(Vector3.zero, wishVel.Unit);
		const targetCFrame = new CFrame(this.instance.GetPivot().Position).mul(lookCFrame);

		this.instance.PivotTo(this.instance.GetPivot().Lerp(targetCFrame, 7 * stats.frameTime));
	}

	protected fullNoclipMove() {
		let wishDir: Vector3;
		let wishSpeed: number;

		const forward = this.player.getViewCFrame().LookVector;
		const right = this.player.getViewCFrame().RightVector;

		const wishVel = new Vector3(
			forward.X * this.move.forwardMove + right.X * this.move.sideMove,
			forward.Y * this.move.forwardMove,
			forward.Z * this.move.forwardMove + right.Z * this.move.sideMove,
		);

		wishDir = wishVel.Unit;
		wishSpeed = wishVel.Magnitude;

		// If wishSpeed is 0, then wishDir is definitely NaN
		if (wishSpeed === 0) {
			wishDir = Vector3.zero;
		}

		this.maxSpeed = this.player.getMaxSpeed();

		if (wishSpeed > this.maxSpeed) {
			wishSpeed = this.maxSpeed;
		}

		const Replicas = RunService.IsClient() ? globalReplicas.client : globalReplicas.server;
		const player = this.player.getLocalPlayer() ?? Players.GetPlayers()[0];

		this.accelerate(wishDir, wishSpeed, Replicas.movement.GetValue(player).sv_accelerate * 10);
		this.applyFriction(Replicas.movement.GetValue(player).sv_friction);

		// TODO: Fix underlying server and client position replication conflict to ultimately remove this check
		if (RunService.IsClient()) {
			this.move.setAbsOrigin(this.move.getAbsOrigin().add(this.velocity.VectorVelocity.mul(stats.frameTime)));
		}
	}

	protected fullWalkMove() {
		this.startGravity();
		this.checkVelocity();

		this.maxSpeed = this.player.getMaxSpeed();

		this.categorizePosition();

		const Replicas = RunService.IsClient() ? globalReplicas.client : globalReplicas.server;
		const player = this.player.getLocalPlayer() ?? Players.GetPlayers()[0];

		if (this.groundEntity) {
			this.applyFriction(Replicas.movement.GetValue(player).sv_friction);
		}

		this.walkMove();

		this.checkVelocity();
		this.finishGravity();

		this.faceVelocity();
	}

	protected traceBoundingBox(start: Vector3, end_: Vector3) {
		const ray = new RayT(start, end_, this.getPlayerMins(), this.getPlayerMaxs());

		return this.trace.traceBox(ray, this.rayParams);
	}

	protected tryTouchGround(start: Vector3, end_: Vector3, mins: Vector3, maxs: Vector3) {
		const ray = new RayT(start, end_, mins, maxs);

		return this.trace.traceBox(ray, this.rayParams);
	}

	async onStart() {
		// Wait for the Humanoid to load first, else GetPlayerFromCharacter will always return undefined
		await promiseChildOfClass(this.instance, "Humanoid");

		const localPlayer = Players.GetPlayerFromCharacter(this.instance);

		let player;

		// If the player is not an NPC
		if (localPlayer) {
			// We don't want this component to attach to another player
			if (RunService.IsClient() && localPlayer !== Players.LocalPlayer) {
				this.instance.RemoveTag("lotl_movement");
				return;
			}

			player = PlayerCollidable.getPlayerFromLocalPlayer(localPlayer);
		} else {
			if ($env.boolean("SINGLE_PLAYER_TESTING")) {
				// Exclude this check
			} else {
				// We don't want this component to attach to an NPC on the client if it's not singleplayer
				if (RunService.IsClient() && Players.MaxPlayers > 1) {
					this.instance.RemoveTag("lotl_movement");
					return;
				}
			}

			player = PlayerCollidable.getPlayerFromCharacter(this.instance);
		}

		assert(player, `Could not find a player from this character (${this.instance})`);

		this.player = player;
		this.character = player.getCharacter() ?? player.characterLoaded.Wait()[0];
		this.move = new MoveData(this.character);
		this.velocity = this.createVelocity(this.character.HumanoidRootPart);

		this.janitor.Add(this.velocity);

		this.character.Humanoid.SetStateEnabled(Enum.HumanoidStateType.FallingDown, false);
		this.character.Humanoid.SetStateEnabled(Enum.HumanoidStateType.Ragdoll, false);
	}

	onPhysics() {
		if (!this.player || !this.character) {
			return;
		}

		this.reduceTimers();

		if (this.player.getFlags() & States.NOCLIPPING) {
			this.fullNoclipMove();
		} else {
			this.fullWalkMove();
		}
	}
}
