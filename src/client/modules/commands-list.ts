import { ping } from "client/commands/ping";
import { stats } from "client/commands/stats";
import { kill } from "client/commands/kill";
import { mps_prompt } from "client/commands/mps_prompt";
import { minusForwardMove, plusForwardMove } from "client/commands/forwardmove";
import { minusBackMove, plusBackMove } from "client/commands/backmove";
import { minusRightMove, plusRightMove } from "client/commands/rightmove";
import { minusLeftMove, plusLeftMove } from "client/commands/leftmove";
import { minusAttack1, plusAttack1 } from "client/commands/attack1";
import { minusAttack2, plusAttack2 } from "client/commands/attack2";

const commandsList = {
	ping,
	stats,
	kill,

	mps_prompt,

	["+forwardmove"]: plusForwardMove,
	["-forwardmove"]: minusForwardMove,
	["+backmove"]: plusBackMove,
	["-backmove"]: minusBackMove,
	["+rightmove"]: plusRightMove,
	["-rightmove"]: minusRightMove,
	["+leftmove"]: plusLeftMove,
	["-leftmove"]: minusLeftMove,
	["+attack1"]: plusAttack1,
	["-attack1"]: minusAttack1,
	["+attack2"]: plusAttack2,
	["-attack2"]: minusAttack2,
};

export default commandsList;
