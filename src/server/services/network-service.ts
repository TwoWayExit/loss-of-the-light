import { Service, OnInit } from "@flamework/core";
import { Events } from "server/network";
import CharmSync from "@rbxts/charm-sync";
import { playersAtom } from "shared/atoms/players";
import { battlesAtom } from "shared/atoms/battles";
import { svVarsAtom } from "shared/atoms/sv-vars";

@Service()
export class NetworkService implements OnInit {
	private setupSyncer() {
		const syncer = CharmSync.server({
			atoms: {
				playersAtom,
				battlesAtom,
				svVarsAtom,
			},
		});

		syncer.connect((player, payload) => {
			Events.syncState(player, payload);
		});

		Events.requestState.connect((player) => syncer.hydrate(player));
	}

	onInit() {
		this.setupSyncer();
	}
}
