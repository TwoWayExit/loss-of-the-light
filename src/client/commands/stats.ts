import { RunService } from "@rbxts/services";
import { Command, Config } from "@twowayexit/dev-con";
import { config as sharedConfig } from "shared/config";
import { $compileTime, $git } from "rbxts-transform-debug";

const stats: Command = {
	execute: () => {
		const formatted = Config.stats.format(
			Config.version,
			Config.commit,
			sharedConfig.serverNick,
			RunService.IsStudio() ? "[HIDDEN]" : sharedConfig.serverCity,
			RunService.IsStudio() ? "[HIDDEN]" : sharedConfig.serverCountryCode,
			RunService.IsStudio() ? "[HIDDEN]" : sharedConfig.serverQuery,
			_VERSION,
			game.PlaceVersion,
			$git().Branch,
			$compileTime("DateTime").ToIsoDate(),
			game.JobId,
		);
		const split = formatted.split("\n");

		for (const v of split) {
			print(v);
		}
	},
};

export { stats };
