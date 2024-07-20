import { CombineStates } from "@rbxts/reflex";
import { battlesSlice } from "shared/slices/battles";
import { playersSlice } from "shared/slices/players";

export type SharedState = CombineStates<typeof slices>;

export const slices = {
	battles: battlesSlice,
	players: playersSlice,
};
