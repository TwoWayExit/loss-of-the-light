import { Controller, OnInit } from "@flamework/core";
import CharmSync, { SyncPayload } from "@rbxts/charm-sync";
import { Events } from "client/network";
import { AtomsList } from "shared/atoms/atoms-list";
import { battlesAtom } from "shared/atoms/battles";
import { playersAtom } from "shared/atoms/players";
import { svVarsAtom } from "shared/atoms/sv-vars";

@Controller({})
export class NetworkController implements OnInit {
	private setupSyncer() {
		const syncer = CharmSync.client({
			atoms: {
				playersAtom,
				battlesAtom,
				svVarsAtom,
			},
		});

		Events.syncState.connect((payload) => syncer.sync(payload as SyncPayload<AtomsList, true>));
		Events.requestState();
	}

	onInit() {
		this.setupSyncer();
	}
}
