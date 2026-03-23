import { Controller, OnRender } from "@flamework/core";
import { stats } from "shared/modules/stats-defs";

@Controller({})
export class StatsController implements OnRender {
	private frames: number[] = [];

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
