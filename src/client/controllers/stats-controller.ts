import { Controller, OnInit, OnRender } from "@flamework/core";
import { settings } from "client/modules/settings";
import { stats } from "shared/modules/stats-defs";
import { Replicas } from "client/replicas";

@Controller({})
export class StatsController implements OnInit, OnRender {
	private frames: number[] = [];

	onInit() {
		Replicas.authorized.Changed.Connect((value) => print(`Authorization changed to ${value}`));

		Replicas.movement.Started.Connect((data) => {
			for (const [i, v] of pairs(data)) {
				settings.setSetting(i, v, true);
			}
		});
		Replicas.movement.Changed.Connect((data, old) => {
			for (const [i, v] of pairs(data)) {
				if (v !== old[i]) {
					settings.setSetting(i, v, true);

					print(`Server movement var "${i}" changed to ${v}`);
				}
			}
		});
	}

	onRender(dt: number) {
		this.frames.forEach((frame, i) => {
			if (os.clock() - frame > 1) {
				this.frames.remove(i);
			}
		});

		this.frames.push(os.clock());

		stats.fps = this.frames.size();
		stats.frameTime = dt;
	}
}
