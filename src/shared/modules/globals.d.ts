export const enum Globals {
	NETWORK_TIMEOUT = 15,
}

export type Region = ExtractKeys<Workspace["regions"], Folder>;
