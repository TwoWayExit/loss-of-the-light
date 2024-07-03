import type { BattleInfo, NetworkBattleTeam, Teams } from "shared/utils/battle";
import { NetworkClass } from "shared/utils/network";

export interface LotlServerEvents {}

export interface LotlClientEvents {
	startBattle: (teams: Map<Teams, NetworkBattleTeam>, battleId: string, battleInfo: NetworkClass<BattleInfo>) => void;
	stopBattle: (battleId: string) => void;
}

export interface LotlServerFunctions {}

export interface LotlClientFunctions {}
