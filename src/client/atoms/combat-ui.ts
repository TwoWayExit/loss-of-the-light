import { atom } from "@rbxts/charm";

export const enum Menu {
	MAIN,
	ATTACK,
	CLASH,
}

export const currentMenu = atom<Menu>(Menu.MAIN);
