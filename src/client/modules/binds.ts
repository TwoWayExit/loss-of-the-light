import { BaseBinds, Bindings } from "@twowayexit/dev-con";

export const binds = new BaseBinds({
	[Bindings.MOUSE_BUTTON_LEFT]: "+attack1",
	[Bindings.MOUSE_BUTTON_RIGHT]: "+attack2",
	W: "+forwardmove",
	A: "+leftmove",
	S: "+backmove",
	D: "+rightmove",
	E: "switch_right",
	Q: "switch_left",
});
