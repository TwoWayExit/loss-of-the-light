import type { CharacterRigR6 } from "@rbxts/promise-character";

export const enum Globals {
	NETWORK_TIMEOUT = 15,
	COMBATANT_SPACING = 4,
}

export interface AnimatedCharacter extends CharacterRigR6 {
	anims: Folder & {
		idle: Animation;
	};
}

export type Region = ExtractKeys<Workspace["regions"], Folder>;
