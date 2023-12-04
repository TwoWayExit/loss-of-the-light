import { UserInputService, Workspace } from "@rbxts/services";
import { settings } from "./settings";
import { Buttons } from "shared/modules/buttons";
import { UserCommand } from "shared/modules/user-command";
import type { BasePlayer } from "shared/models/player";

export class Input {
	private command = new UserCommand();

	public constructor(private player: BasePlayer<Player>) {}

	public getUserCommand() {
		this.command.reset();

		this.computeForwardMove();
		this.computeSideMove();

		return this.command;
	}

	public getButtons() {
		return this.command.buttons;
	}

	public keyDown(key: number) {
		this.command.buttons |= key;
	}

	public keyUp(key: number) {
		this.command.buttons &= ~key;
	}

	private getButtonValue(button: number) {
		return this.command.buttons & button ? 1 : 0;
	}

	private computeForwardMove() {
		const character = this.player.getCharacter();

		if (UserInputService.TouchEnabled && character) {
			const vecForward = new Vector3(
				Workspace.CurrentCamera!.CFrame.LookVector.X,
				0,
				Workspace.CurrentCamera!.CFrame.LookVector.Z,
			).Unit;

			const forwardValue = vecForward.Dot(character.Humanoid.MoveDirection);
			const backValue = -forwardValue;

			this.command.forwardMove += settings.getSetting("mv_forwardspeed")! * forwardValue;
			this.command.forwardMove -= settings.getSetting("mv_forwardspeed")! * backValue;
			return;
		}

		this.command.forwardMove += settings.getSetting("mv_forwardspeed")! * this.getButtonValue(Buttons.FORWARD);
		this.command.forwardMove -= settings.getSetting("mv_forwardspeed")! * this.getButtonValue(Buttons.BACK);
	}

	private computeSideMove() {
		const character = this.player.getCharacter();

		if (UserInputService.TouchEnabled && character) {
			const vecRight = new Vector3(
				Workspace.CurrentCamera!.CFrame.RightVector.X,
				0,
				Workspace.CurrentCamera!.CFrame.RightVector.Z,
			).Unit;

			const rightValue = vecRight.Dot(character.Humanoid.MoveDirection);
			const leftValue = -rightValue;

			this.command.sideMove += settings.getSetting("mv_sidespeed")! * rightValue;
			this.command.sideMove -= settings.getSetting("mv_sidespeed")! * leftValue;
			return;
		}

		this.command.sideMove += settings.getSetting("mv_sidespeed")! * this.getButtonValue(Buttons.RIGHT);
		this.command.sideMove -= settings.getSetting("mv_sidespeed")! * this.getButtonValue(Buttons.LEFT);
	}
}
