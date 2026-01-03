import { battlesAtom } from "shared/atoms/battles";
import { AutoControl } from "./auto-control";
import { produce } from "@rbxts/better-immut";

export class GenericAutoControl extends AutoControl {
	public override runDecision() {
		// TODO: Implement behavior tree
		// For now, just end the turn ASAP
		battlesAtom((state) =>
			produce(state, (draft) => {
				draft[this.battleId].playerInfo[this.playerId].turnFinished = true;
			}),
		);
	}
}
