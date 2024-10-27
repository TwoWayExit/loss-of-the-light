import { RunService } from "@rbxts/services";
import { LotlPlayer } from "shared/models/lotl_player";
import { Skill } from "shared/utils/skills";

export class BasicSkill extends Skill {
	public constructor() {
		super("Basic", {
			damage: 10,
		});
	}

	public override cast(caster: LotlPlayer, target: LotlPlayer) {
		if (RunService.IsServer()) {
			import("server/producer").then(({ producer }) => {
				const combatant = producer.getState((state) => state.players[target.id].activeCombatant);

				assert(combatant, `Player ${target.id} does not have an active or any combatants`);

				producer.takeCombatantDamage(target.id, combatant, this.properties.damage);
			});
		} else {
			// VFX here
		}
	}
}
