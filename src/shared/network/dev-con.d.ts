import { Character } from "shared/models/character";

export interface DevConServerEvents {
	kill: (target?: Character) => void;
}

export interface DevConClientEvents {}

export interface DevConServerFunctions {
	ping: () => { [player: string]: number };

	sv_password: (password: string) => string;

	mps_prompt: (assetId: number) => string;
}

export interface DevConClientFunctions {}
