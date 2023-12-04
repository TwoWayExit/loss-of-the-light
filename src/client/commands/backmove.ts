import { Command } from "@twowayexit/dev-con";
import { InputController } from "client/controllers/input-controller";
import { Buttons } from "shared/modules/buttons";

export const plusBackMove: Command = {
	execute: () => InputController.input?.keyDown(Buttons.BACK),
};

export const minusBackMove: Command = {
	execute: () => InputController.input?.keyUp(Buttons.BACK),
};
