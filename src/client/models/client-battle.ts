import { Players, Workspace } from "@rbxts/services";
import { Globals, type AnimatedCharacter } from "shared/modules/global-types";
import { battlesAtom } from "shared/atoms/battles";
import { Battle, Teams } from "shared/models/battle";
import { playersAtom } from "shared/atoms/players";
import { produce } from "@rbxts/better-immut";
import combatantList from "shared/modules/combatant-list";
import { batch, subscribe } from "@rbxts/charm";
import assetInstances from "shared/asset-instances";
import { AnimationHandler } from "shared/models/animation-handler";

export class ClientBattle extends Battle {
	private playerCombatantChars = new Map<string, AnimatedCharacter[]>();

	public constructor(id: string, first: Teams) {
		super(id, first);
	}

	public override startBattle() {
		this.setupBattleAtom();

		this.hideCombatants();
		this.playCombatantIdles();
		this.subscribeAtoms();

		super.startBattle();
	}

	public override stopBattle() {
		super.stopBattle();
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
									name,
									character,
									animationHandler: new AnimationHandler(character),
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

	private onCombatantHurt(player: string, combatant: number) {
		const { name, animationHandler } = battlesAtom()[this.id].playerInfo[player].combatants[combatant];

		this.queue.insert(this.getQueuePosition() + 1, () =>
			animationHandler
				.playAnimation(assetInstances.animations[`${name}/hurt`])
				.then((track) => Promise.delay(track.Length)),
		);
	}

	private subscribeAtoms() {
		for (const [playerId, player] of pairs(battlesAtom()[this.id].playerInfo)) {
			for (let i = 0; i < player.combatants.size(); i++) {
				this.janitor.Add(
					subscribe(
						() => battlesAtom()[this.id].playerInfo[playerId].combatants[i].health,
						(health, prev) => {
							if (health < prev) {
								this.onCombatantHurt(playerId as string, i);
							}
						},
					),
				);
			}
		}
	}
}
