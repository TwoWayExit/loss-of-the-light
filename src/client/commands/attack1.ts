import { Command } from "@twowayexit/dev-con";
import { InputController } from "client/controllers/input-controller";
import { Buttons } from "shared/modules/buttons";

export const plusAttack1: Command = {
	execute: () => InputController.input?.keyDown(Buttons.ATTACK1),
};

export const minusAttack1: Command = {
	execute: () => InputController.input?.keyUp(Buttons.ATTACK1),
};
