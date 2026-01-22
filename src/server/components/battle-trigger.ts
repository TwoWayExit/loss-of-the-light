import { OnTick } from "@flamework/core";
import { Component, Components } from "@flamework/components";
import { ReplicatedStorage, Workspace } from "@rbxts/services";
import { Character } from "shared/models/character";
import { BasePlayer } from "shared/models/player";
import { CombatantList } from "shared/modules/combatant-list";
import { DisposableComponent } from "shared/components/disposable-component";
import { Enemy } from "server/components/enemy";
import { BattleService } from "server/services/battle-service";
import { LotlClient } from "shared/models/lotl_client";
import { addCombatant, LotlPlayerStatus, playersAtom } from "shared/atoms/players";
import { Teams } from "shared/models/battle";

interface Attributes {
	triggerDistance: number;
	isFirst: boolean;
}

/** WARN: Do not manually add this component via studio, use the `enemy` component tag instead */
@Component({
	tag: "battle-trigger",
	defaults: {
		triggerDistance: 5,
		isFirst: false,
	},
	ancestorWhitelist: [Workspace],
})
export class BattleTrigger extends DisposableComponent<Attributes, Character> implements OnTick {
	protected player: BasePlayer;

	public constructor(
		protected readonly components: Components,
		protected readonly battleService: BattleService,
	) {
		super();

		const player = BasePlayer.getPlayerFromCharacter(this.instance);
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

			playersAtom((state) => addCombatant(state, this.player.id, combatant as keyof CombatantList));
		}
	}

	protected checkDistance(player: LotlClient) {
		const character = player.getCharacter();

		if (!character) {
			return;
		}

		const distance = character.HumanoidRootPart.Position.sub(this.instance.HumanoidRootPart.Position).Magnitude;

		if (distance <= this.attributes.triggerDistance) {
			this.battleService.startBattle(
				this.attributes.isFirst ? Teams.TEAM2 : Teams.TEAM1,
				[player],
				[this.player],
			);
		}
	}

	onTick() {
		for (const player of LotlClient.getPlayers()) {
			if (playersAtom()[player.id]?.status === LotlPlayerStatus.IN_BATTLE) {
				continue;
			}

			this.checkDistance(player);
		}
	}
}
