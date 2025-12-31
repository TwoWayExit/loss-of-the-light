import { RunService } from "@rbxts/services";

type LifecycleEvent = "RenderStepped" | "Stepped" | "Heartbeat";

/** A class used to hook onto RenderStepped, Stepped or Heartbeat without creating new connections */
export class LifecycleHook<E extends LifecycleEvent> {
	protected static readonly hooks = new Map<
		LifecycleHook<LifecycleEvent>,
		Parameters<RunService[LifecycleEvent]["Connect"]>[0]
	>();

	protected static readonly asyncHooks = new Map<
		LifecycleHook<LifecycleEvent>,
		Parameters<RunService[LifecycleEvent]["Connect"]>[0]
	>();

	static {
		const runHooks = (event: LifecycleEvent, ...args: number[]) => {
			this.hooks.forEach((hook, { event: hookEvent }) => {
				if (event === hookEvent) {
					hook(args[0], args[1]);
				}
			});

			this.asyncHooks.forEach((hook, { event: hookEvent }) => {
				if (event === hookEvent) {
					task.spawn(() => hook(args[0], args[1]));
				}
			});
		};

		if (RunService.IsClient()) {
			RunService.RenderStepped.Connect((...args) => runHooks("RenderStepped", ...args));
		}

		RunService.Stepped.Connect((...args) => runHooks("Stepped", ...args));
		RunService.Heartbeat.Connect((...args) => runHooks("Heartbeat", ...args));
	}

	/** Constructs a new lifecycle event hook, callback should not yield unless isAsync is true */
	public constructor(
		public readonly event: E,
		callback: Parameters<RunService[E]["Connect"]>[0],
		public readonly isAsync = false,
	) {
		if (RunService.IsServer() && event === "RenderStepped") {
			throw "A RenderStepped hook may only be created on the client";
		}

		if (isAsync) {
			LifecycleHook.asyncHooks.set(this, callback);
		} else {
			LifecycleHook.hooks.set(this, callback);
		}
	}

	public unhook() {
		if (this.isAsync) {
			LifecycleHook.asyncHooks.delete(this);
		} else {
			LifecycleHook.hooks.delete(this);
		}
	}
}
