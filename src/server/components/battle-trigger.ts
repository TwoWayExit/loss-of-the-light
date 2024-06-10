import { OnTick } from "@flamework/core";
import { Component, Components } from "@flamework/components";
import { ReplicatedStorage, Workspace } from "@rbxts/services";
import { Character } from "shared/models/character";
import { CombatantList, LotlPlayer, LotlPlayerNetworked, LotlPlayerStatus } from "shared/models/lotl_player";
import { Battle } from "shared/utils/battle";
import { Uuid } from "shared/components/uuid";
import { Enemy } from "shared/components/enemy_base";

interface Attributes {
	triggerDistance: number;
}

@Component({
	tag: "battle-trigger",
	defaults: {
		triggerDistance: 5,
	},
	ancestorWhitelist: [Workspace],
})
export class BattleTrigger extends Uuid<Attributes, Character> implements OnTick {
	protected player: LotlPlayer;

	public constructor(protected readonly components: Components) {
		super();

		const player = LotlPlayer.getPlayerFromCharacter(this.instance);
		const enemy = components.getComponents<Enemy>(this.instance)[0];

		assert(player, `No player found in battle trigger '${this.instance.GetFullName()}'`);
		assert(enemy, `No enemy component found in battle trigger '${this.instance.GetFullName()}'`);
		assert(
			enemy.attributes.combatants.size() > 0,
			`Battle trigger '${this.instance.GetFullName()}' does not have any combatants`,
		);

		for (const combatant of enemy.attributes.combatants.split(",")) {
			if (!ReplicatedStorage.combatants.FindFirstChild(combatant)) {
				warn(
					`Combatant '${combatant}' not found in ReplicatedStorage.combatants (Battle trigger '${this.instance.GetFullName()}')`,
				);
				continue;
			}

			player.addCombatant(combatant as keyof CombatantList);
		}

		this.player = player;
	}

	protected checkDistance(player: LotlPlayerNetworked) {
		const character = player.getCharacter();

		if (!character) {
			return;
		}

		const distance = character.HumanoidRootPart.Position.sub(this.instance.HumanoidRootPart.Position).Magnitude;

		if (distance <= this.attributes.triggerDistance) {
			Battle.createQuickBattle(player, this.player).then((battle) => battle.startBattle());
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
