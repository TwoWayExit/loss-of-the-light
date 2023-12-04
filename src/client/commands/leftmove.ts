import { Command } from "@twowayexit/dev-con";
import { InputController } from "client/controllers/input-controller";
import { Buttons } from "shared/modules/buttons";

export const plusLeftMove: Command = {
	execute: () => InputController.input?.keyDown(Buttons.LEFT),
};

export const minusLeftMove: Command = {
	execute: () => InputController.input?.keyUp(Buttons.LEFT),
};
