import { atom } from "@rbxts/charm";
import { Dialogue } from "shared/lib/dialogue";

export const dialogueIsActive = atom(false);
export const dialogueText = atom("");
export const currentDialogue = atom<Dialogue | undefined>();
