import { Command } from "@twowayexit/dev-con";
import { InputController } from "client/controllers/input-controller";
import { Buttons } from "shared/modules/buttons";

export const plusRightMove: Command = {
	execute: () => InputController.input?.keyDown(Buttons.RIGHT),
};

export const minusRightMove: Command = {
	execute: () => InputController.input?.keyUp(Buttons.RIGHT),
};
