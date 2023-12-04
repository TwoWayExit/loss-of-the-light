import { FastReplica } from "@rbxts/fast-replica";

export const globalReplicas = FastReplica.createReplicas({
	authorized: false,
	movement: {
		sv_gravity: 72,
		sv_jumppower: 25,
		sv_friction: 5,
		sv_accelerate: 4,
		sv_maxspeed: 40,
		sv_maxvelocity: 350,
		sv_airaccelerate: 18,
		sv_stopspeed: 8,
		sv_stepsize: 1,
		sv_autobunnyhopping: 0,
		sv_sprintincrease: 12,
		sv_staminarecover: 16,
		sv_staminadrop: 16,
		sv_brakedistance: 6,
		sv_ledgeheight: 8,
	},
});
