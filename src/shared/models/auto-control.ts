/** Base class for automating computer-controlled (AI/NPC) players in battle */
export abstract class AutoControl {
	public constructor(
		protected readonly battleId: string,
		protected readonly playerId: string,
	) {}

	public abstract runDecision(): void;
}
