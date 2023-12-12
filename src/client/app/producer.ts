import { InferState, combineProducers } from "@rbxts/reflex";
import { dialogue } from "./slices/dialogue";

export type RootProducer = typeof producer;
export type RootState = InferState<RootProducer>;

export const producer = combineProducers({
	dialogue,
});
