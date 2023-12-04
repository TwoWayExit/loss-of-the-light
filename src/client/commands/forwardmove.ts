import { Command } from "@twowayexit/dev-con";
import { InputController } from "client/controllers/input-controller";
import { Buttons } from "shared/modules/buttons";

export const plusForwardMove: Command = {
	execute: () => InputController.input?.keyDown(Buttons.FORWARD),
};

export const minusForwardMove: Command = {
	execute: () => InputController.input?.keyUp(Buttons.FORWARD),
};
