import { battlesAtom } from "./battles";
import { playersAtom } from "./players";

export type AtomsList = {
	playersAtom: typeof playersAtom;
	battlesAtom: typeof battlesAtom;
};
