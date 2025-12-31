import { FastReplica } from "@rbxts/fast-replica";

// TODO: Replace these with charm atoms
export const globalReplicas = FastReplica.createReplicas({
	authorized: false,
	movement: {
		sv_gravity: 72,
		sv_friction: 8,
		sv_accelerate: 5,
		sv_maxspeed: 34,
		sv_maxvelocity: 100,
		sv_stopspeed: 8,
		sv_stepsize: 1.5,
	},
});
