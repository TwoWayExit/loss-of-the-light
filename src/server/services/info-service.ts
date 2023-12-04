import { Service, OnStart } from "@flamework/core";
import { HttpService } from "@rbxts/services";
import { Events } from "server/network/global";
import { config } from "shared/config";

const fetch = Promise.promisify((requestOptions: RequestAsyncRequest) => HttpService.RequestAsync(requestOptions));

const API_URL = "http://ip-api.com/json/?fields=query,city,countryCode";

interface ApiResult {
	query: string;
	city: string;
	countryCode: string;
}

const MAX_RETRIES = 8;

@Service({})
export class ServerInfoService implements OnStart {
	private attempts = 0;

	private async getApiInfo(): Promise<ApiResult | undefined> {
		this.attempts++;

		if (this.attempts >= MAX_RETRIES) {
			return;
		}

		try {
			return HttpService.JSONDecode(
				(
					await fetch({
						Url: API_URL,
					})
				).Body,
			) as ApiResult;
		} catch (e) {
			warn(e);

			return await this.getApiInfo();
		}
	}

	onStart() {
		this.getApiInfo()
			.then((result) => {
				if (!result) {
					warn(`Failed to get API server info after ${this.attempts} attempts`);
					return;
				}

				config.serverCity = result.city;
				config.serverCountryCode = result.countryCode.lower();
				config.serverQuery = result.query;

				Events.updateSharedConfig.broadcast(config);
			})
			.catch((e) => warn(e));
	}
}
