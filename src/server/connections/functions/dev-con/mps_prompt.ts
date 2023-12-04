import { Service, OnInit } from "@flamework/core";
import { MarketplaceService } from "@rbxts/services";
import { Functions } from "server/network/dev-con";

@Service({})
export class MpsPrompt implements OnInit {
	onInit() {
		Functions.mps_prompt.setCallback((player, assetId) => {
			if (!assetId) {
				return "Missing asset ID";
			}

			try {
				MarketplaceService.PromptPurchase(player, assetId);
			} catch (e) {
				return e as string;
			}

			return "OK";
		});
	}
}
