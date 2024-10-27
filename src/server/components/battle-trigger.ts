import { OnTick } from "@flamework/core";
import { Component, Components } from "@flamework/components";
import { ReplicatedStorage, Workspace } from "@rbxts/services";
import { Character } from "shared/models/character";
import { LotlPlayer, LotlPlayerNetworked, LotlPlayerStatus } from "shared/models/lotl_player";
import { Combatant, CombatantList } from "server/models/combatant";
import { DisposableComponent } from "shared/components/disposable-component";
import { Enemy } from "shared/components/enemy_base";
import { BattleService } from "server/services/battle-service";

interface Attributes {
	triggerDistance: number;
}

/** @remarks Do not manually add this component via studio, use the `enemy` component tag instead */
@Component({
	tag: "battle-trigger",
	defaults: {
		triggerDistance: 5,
	},
	ancestorWhitelist: [Workspace],
})
export class BattleTrigger extends DisposableComponent<Attributes, Character> implements OnTick {
	protected player: LotlPlayer;

	public constructor(
		protected readonly components: Components,
		protected readonly battleService: BattleService,
	) {
		super();

		const player = LotlPlayer.getPlayerFromCharacter(this.instance);
		const enemy = components.getComponents<Enemy>(this.instance)[0];

		assert(player, `No player found in battle trigger '${this.instance.GetFullName()}'`);
		assert(enemy, `No enemy component found in battle trigger '${this.instance.GetFullName()}'`);
		assert(
			enemy.attributes.combatants.size() > 0,
			`Battle trigger '${this.instance.GetFullName()}' does not have any combatants`,
		);

		this.player = player;

		this.addCombatants(enemy.attributes.combatants);
	}

	protected addCombatants(combatants: string) {
		for (const combatant of combatants.split(",")) {
			if (!ReplicatedStorage.combatants.FindFirstChild(combatant)) {
				warn(
					`Combatant '${combatant}' not found in ReplicatedStorage.combatants (Battle trigger '${this.instance.GetFullName()}')`,
				);
				continue;
			}

			const clone = ReplicatedStorage.combatants[combatant as keyof CombatantList].Clone();

			Combatant.addCombatant(this.player, combatant as keyof CombatantList, {
				name: combatant,
				character: clone,
				health: 100,
			});
		}
	}

	protected checkDistance(player: LotlPlayerNetworked) {
		const character = player.getCharacter();

		if (!character) {
			return;
		}

		const distance = character.HumanoidRootPart.Position.sub(this.instance.HumanoidRootPart.Position).Magnitude;

		if (distance <= this.attributes.triggerDistance) {
			this.battleService.startBattle(player, this.player);
		}
	}

	onTick() {
		if (this.player.getStatus() === LotlPlayerStatus.IN_BATTLE) {
			return;
		}

		for (const player of LotlPlayerNetworked.getPlayers()) {
			this.checkDistance(player);
		}
	}
}
