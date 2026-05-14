import { atom } from "@rbxts/charm";

export const enum Menu {
	MAIN,
	ATTACK,
	CLASH,
}

export const currentMenu = atom<Menu>(Menu.MAIN);
/** The current skill being hovered over, used to show a preview of the resulting state changes (health, energy, etc.); -1 if no selection */
export const currentPreview = atom(-1);
