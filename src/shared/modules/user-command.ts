export class UserCommand {
	public buttons = 0;
	public forwardMove = 0;
	public sideMove = 0;

	public copy(dest: UserCommand) {
		dest.buttons = this.buttons;
		dest.forwardMove = this.forwardMove;
		dest.sideMove = this.sideMove;
	}

	public reset() {
		this.forwardMove = 0;
		this.sideMove = 0;
	}
}
