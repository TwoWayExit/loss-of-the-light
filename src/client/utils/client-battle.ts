import { Workspace } from "@rbxts/services";
import { $warn } from "rbxts-transform-debug";
import { Combatant } from "shared/models/combatant";
import { LotlPlayer } from "shared/models/lotl_player";
import { Battle, BattleTeam, NetworkBattleTeam, Teams } from "shared/utils/battle";
import { Skillset } from "shared/utils/skills";

export class ClientBattle extends Battle {
	public constructor(teams: Map<Teams, NetworkBattleTeam>, id: string) {
		super(ClientBattle.unpackTeamData(teams), id);
	}

	/** @client */
	public override startBattle() {
		this.setBattleOfTeams(true);
		this.setPlayersHidden(true);
	}

	/** @client */
	public override stopBattle() {
		this.setBattleOfTeams(false);
		this.setPlayersHidden(false);
	}

	protected static unpackTeamData(teams: Map<Teams, NetworkBattleTeam>) {
		const data = new Map<Teams, BattleTeam>();

		for (const [name, team] of teams) {
			const map = new Map<LotlPlayer, Combatant[]>();

			data.set(name, map);

			for (const [playerId, combatantIds] of team) {
				const player = LotlPlayer.getPlayerFromId(playerId);

				if (!player) {
					$warn(`[WARN] LotlPlayer not found from id ${playerId}`);
					continue;
				}

				map.set(
					player,
					combatantIds.map(
						({ name, character, skillset, id }) =>
							new Combatant(name, character, Skillset.getSkillset(skillset), id),
					),
				);
			}
		}

		return data;
	}

	protected setPlayersHidden(hidden: boolean) {
		for (const [, team] of this.teams) {
			for (const [player] of team) {
				const character = player.getCharacter();

				assert(character, `Player ${player.id} does not have a character`);

				if (hidden) {
					character.Parent = undefined;
				} else {
					character.Parent = Workspace;
				}
			}
		}
	}
}
