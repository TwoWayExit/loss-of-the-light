import { CollectionService, HttpService, Players, RunService } from "@rbxts/services";
import { Signal } from "@rbxts/beacon";
import { $env } from "rbxts-transform-env";
import { Janitor } from "@rbxts/janitor";

export class Uuid {
	public readonly idLoaded = new Signal<string>();

	protected janitor = new Janitor();

	/**
	 * A unique identifier for this component which is shared across the server > client
	 * @remarks This property is always defined on the server, but may be `undefined` on the client before this is loaded unless the game is singleplayer
	 */
	protected id!: string;

	public constructor(
		protected instance: Instance,
		protected discriminator: string,
	) {
		if ($env.boolean("SINGLE_PLAYER_TESTING")) {
			this.id = HttpService.GenerateGUID(false);

			CollectionService.AddTag(this.instance, `uuid:${this.discriminator}:${this.id}`);
		} else {
			if (RunService.IsServer() || Players.MaxPlayers <= 1) {
				this.id = HttpService.GenerateGUID(false);

				CollectionService.AddTag(this.instance, `uuid:${this.discriminator}:${this.id}`);
			} else {
				const tag = this.findUuid();

				if (tag) {
					this.id = tag;
				} else {
					this.janitor
						.AddPromise(Promise.fromEvent(CollectionService.TagAdded, () => this.findUuid() !== undefined))
						.then((tag) => {
							this.id = tag;

							this.idLoaded.Fire(tag);

							this.onIdLoaded(tag);
						});
				}
			}
		}
	}

	public async getId() {
		return this.id ?? this.idLoaded.Wait();
	}

	public destroy() {
		CollectionService.RemoveTag(this.instance, `uuid:${this.discriminator}:${this.id}`);

		this.janitor.Destroy();
	}

	/**
	 * A virtual method which is called on the client when the id is loaded from the server
	 * @virtual
	 * @client
	 */
	protected onIdLoaded(_id: string) {}

	private findUuid() {
		return CollectionService.GetTags(this.instance)
			.find((tag) => tag.match(`^uuid:${this.discriminator}:`)[0] !== undefined)
			?.gsub(`uuid:${this.discriminator}:`, "")[0];
	}
}
