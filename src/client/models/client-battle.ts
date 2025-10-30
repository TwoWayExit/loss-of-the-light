import { Players, Workspace } from "@rbxts/services";
import type { AnimatedCharacter } from "server/models/combatant";
import { battlesAtom } from "shared/atoms/battles";
import { playersAtom } from "shared/atoms/players";
import { Battle } from "shared/models/battle";

export class ClientBattle extends Battle {
	private combatants: Map<string, AnimatedCharacter[]> = new Map();

	public constructor(id: string) {
		super(id);

		for (const [, team] of pairs(battlesAtom()[id].teams)) {
			for (const playerId of team) {
				const list: AnimatedCharacter[] = [];

				this.combatants.set(playerId, list);

				playersAtom()
					[playerId].combatants.map((c) => c.character)
					.forEach((c) => list.push(c));
			}
		}
	}

	public override startBattle() {
		this.hideCombatants();
		this.playCombatantIdles();

		super.startBattle();
	}

	public override stopBattle() {
		super.stopBattle();
	}

	private hideCombatants() {
		// Hide the player's combatants
		for (const character of this.combatants.get(tostring(Players.LocalPlayer.UserId))!) {
			for (const child of character.GetDescendants()) {
				if (child.IsA("BasePart")) {
					child.LocalTransparencyModifier = 1;
				}
			}
		}

		// Hide combatants of those outside the current battle to avoid conflicting character models
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
		for (const [, combatants] of this.combatants) {
			for (const combatant of combatants) {
				const anim = combatant.Humanoid.Animator.LoadAnimation(combatant.anims.idle);

				anim.Play();
			}
		}
	}
}
