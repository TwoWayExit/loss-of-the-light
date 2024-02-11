import { Component, BaseComponent } from "@flamework/components";
import { Janitor } from "@rbxts/janitor";

@Component({})
export abstract class DisposableComponent<A = {}, I extends Instance = Instance> extends BaseComponent<A, I> {
	protected readonly janitor = new Janitor();

	public override destroy() {
		this.janitor.Destroy();

		super.destroy();
	}
}
