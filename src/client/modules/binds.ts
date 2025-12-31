import { BaseBinds, Bindings } from "@twowayexit/dev-con";

export const binds = new BaseBinds({
	W: "+forwardmove",
	A: "+leftmove",
	S: "+backmove",
	D: "+rightmove",
	E: "switch_right",
	Q: "switch_left",
	F: "finish_turn",
	Space: "confirm",
});
