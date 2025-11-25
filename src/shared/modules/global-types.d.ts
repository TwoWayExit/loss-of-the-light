export const enum Globals {
	NETWORK_TIMEOUT = 15,
	COMBATANT_SPACING = 4,
}

export type Region = ExtractKeys<Workspace["regions"], Folder>;
