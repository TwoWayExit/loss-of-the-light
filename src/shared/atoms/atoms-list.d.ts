import { battlesAtom } from "./battles";
import { playersAtom } from "./players";
import { svVarsAtom } from "./sv-vars";

export type AtomsList = {
	playersAtom: typeof playersAtom;
	battlesAtom: typeof battlesAtom;
	svVarsAtom: typeof svVarsAtom;
};
