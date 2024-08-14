import { InferState, combineProducers, loggerMiddleware } from "@rbxts/reflex";
import { dialogue } from "./app/slices/dialogue";
import { slices } from "shared/slices";

export type RootProducer = typeof producer;
export type RootState = InferState<RootProducer>;

export const producer = combineProducers({
	...slices,
	dialogue,
});

producer.applyMiddleware(loggerMiddleware);
