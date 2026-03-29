import { Component } from "@flamework/components";
import { DisposableComponent } from "./disposable-component";
import { Uuid } from "shared/lib/uuid";
import { Reflect } from "@flamework/core";

interface Attributes {}

/** A base component to create unique identifiers on components shared across server > client */
@Component({
	tag: "UUID",
})
export class UuidComponent<A extends Attributes, I extends Instance> extends DisposableComponent<A, I> {
	protected uuid: Uuid;

	protected id!: string;

	public constructor() {
		super();

		const discriminator = Reflect.getMetadata<string>(this, "identifier");

		assert(discriminator, "Flamework component identifier not found");

		this.uuid = new Uuid(this.instance, discriminator);

		this.janitor.Add(this.uuid, "destroy");

		this.uuid
			.getId()
			.now()
			.then((id) => {
				this.id = id;
			})
			.catch(() => {
				throw `Failed to get client uuid tag for instance ${this.instance}`;
			});
	}
}
