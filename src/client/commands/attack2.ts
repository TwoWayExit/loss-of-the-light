import { Command } from "@twowayexit/dev-con";
import { InputController } from "client/controllers/input-controller";
import { Buttons } from "shared/modules/buttons";

export const plusAttack2: Command = {
	execute: () => InputController.input?.keyDown(Buttons.ATTACK2),
};

export const minusAttack2: Command = {
	execute: () => InputController.input?.keyUp(Buttons.ATTACK2),
};
