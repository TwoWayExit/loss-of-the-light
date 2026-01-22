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
import { switch_left } from "client/commands/switch_left";
import { switch_right } from "client/commands/switch_right";
import { finish_turn } from "client/commands/finish_turn";
import { confirm } from "client/commands/confirm";

const commandsList = {
	ping,
	stats,
	kill,

	mps_prompt,

	switch_left,
	switch_right,

	finish_turn,
	confirm,

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
