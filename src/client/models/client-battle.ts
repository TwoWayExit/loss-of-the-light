import { Workspace } from "@rbxts/services";
import type { AnimatedCharacter } from "server/models/combatant";
import { Battle } from "shared/models/battle";

export class ClientBattle extends Battle {
	private combatants = this.findCombatants();

	public constructor(id: string) {
		super(id);
	}

	public override startBattle() {
		this.hideOtherCombatants();
		this.playCombatantIdles();

		super.startBattle();
	}

	public override stopBattle() {
		super.stopBattle();
	}

	private findCombatants() {
		const combatants = new Set<AnimatedCharacter>();

		for (const combatant of Workspace.combatants.GetChildren()) {
			if (combatant.HasTag(this.id)) {
				combatants.add(combatant as AnimatedCharacter);
			}
		}

		return combatants;
	}

	private hideOtherCombatants() {
		for (const combatant of Workspace.combatants.GetChildren()) {
			if (!combatant.HasTag(this.id)) {
				for (const child of combatant.GetDescendants()) {
					if (child.IsA("BasePart")) {
						child.LocalTransparencyModifier = 1;
					}
				}
			}
		}
	}

	private playCombatantIdles() {
		for (const combatant of this.combatants) {
			const anim = combatant.Humanoid.Animator.LoadAnimation(combatant.anims.idle);

			anim.Play();
		}
	}
}
