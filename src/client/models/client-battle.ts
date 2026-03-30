import { Players, Workspace } from "@rbxts/services";
import { Globals, type AnimatedCharacter } from "shared/modules/global-types";
import { battlesAtom } from "shared/atoms/battles";
import { Battle, Teams } from "shared/models/battle";
import { ActionPlan, ActionType, SkillCast } from "shared/modules/battle-types";
import { playersAtom } from "shared/atoms/players";
import { Skillset } from "shared/models/skills";
import { produce } from "@rbxts/better-immut";
import combatantList from "shared/modules/combatant-list";
import { batch } from "@rbxts/charm";
import assetInstances from "shared/asset-instances";
import { $NODE_ENV } from "rbxts-transform-env";

export class ClientBattle extends Battle {
	private playerCombatantChars = new Map<string, AnimatedCharacter[]>();

	public constructor(id: string, first: Teams) {
		super(id, first);
	}

	public override startBattle() {
		this.setupBattleAtom();

		this.hideCombatants();
		this.playCombatantIdles();

		super.startBattle();
	}

	public override stopBattle() {
		super.stopBattle();
	}

	public async startAction(plan: ActionPlan) {
		print(plan);

		// Do a recursive promise iteration through the action plan to allow a smooth cancellation if needed
		const recurse = (i = 0): Promise<void> => {
			if (i === plan.size()) {
				return Promise.resolve();
			}

			const action = plan[i];

			if (action.type === ActionType.SINGLE) {
				// TypeScript is unable to infer a union type-generic member's true type, shame
				const cast = action.cast as SkillCast;
				const casterCombatant = playersAtom()[cast.casterPlayer].combatants[cast.casterCombatant];

				const skill = Skillset.getSkillset(casterCombatant).skills[cast.skill];

				return skill
					.cast(cast.casterPlayer, cast.casterCombatant, cast.targetPlayer, cast.targetCombatant)
					.then((success) => {
						if (success) {
							if ($NODE_ENV === "development") {
								print(`Finished animation + cast of skill '${skill.name}'`);
								print(cast);
							}
						} else {
							warn(`[WARN] Ignored skill cast '${skill.name}'`);
							warn(cast);
						}
					})
					.then(() => recurse(i + 1));
			} else {
				// TODO: Implement clashing
				return Promise.try(() => {}).then(() => recurse(i + 1));
			}
		};

		return this.janitor.AddPromise(recurse());
	}

	public getCombatantPosition(teamName: Teams, playerId: string, index: number) {
		const origin = Workspace.battlegrounds[battlesAtom()[this.id].region][teamName].CFrame;
		const combatantAmount = playersAtom()[playerId].combatants.size();
		const firstPosition = origin.mul(new CFrame(-Globals.COMBATANT_SPACING * ((combatantAmount - 1) / 2), 0, 0));

		return firstPosition.mul(new CFrame(Globals.COMBATANT_SPACING * index, 0, 0));
	}

	private hideCombatants() {
		// Hide the player's combatants
		for (const character of this.playerCombatantChars.get(tostring(Players.LocalPlayer.UserId))!) {
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
		for (const [, combatants] of this.playerCombatantChars) {
			for (const combatant of combatants) {
				const anim = combatant.Humanoid.Animator.LoadAnimation(
					assetInstances.animations[`${combatant.Name}/idle`],
				);

				anim.Play();
			}
		}
	}

	private setupBattleAtom() {
		const { teams } = battlesAtom()[this.id];

		batch(() => {
			for (const [teamName, team] of pairs(teams)) {
				for (const playerId of team) {
					const { combatants } = playersAtom()[playerId];

					// Create characters on the client; they're not defined on the server by default
					battlesAtom((state) =>
						produce(state, (draft) => {
							draft[this.id].playerInfo[playerId].combatants = combatants.map((name, index) => {
								const { baseCharacter, energy, health } = combatantList[name];
								const character = baseCharacter.Clone();

								character.PivotTo(this.getCombatantPosition(teamName, playerId, index));
								character.AddTag(this.id);
								character.Parent = Workspace.combatants;

								// Mark for deletion once battle ends
								this.janitor.Add(character);

								return {
									character,
									energy,
									health,
								};
							});
						}),
					);

					this.playerCombatantChars.set(
						playerId,
						battlesAtom()[this.id].playerInfo[playerId].combatants.map((c) => c.character),
					);
				}
			}
		});
	}
}
