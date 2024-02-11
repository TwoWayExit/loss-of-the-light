import { Signal } from "@rbxts/beacon";

export class Dialogue {
	public constructor(
		public readonly name: string,
		protected texts: string[],
		protected responses: Map<string, DialogueBuilder>,
	) {}

	/** A signal that fires when the dialogue ends */
	public readonly ended = new Signal<typeof this.responses>();

	protected index = -1;

	protected isFinished = false;

	public getFinished() {
		return this.isFinished;
	}

	/**
	 * Gets any available responses
	 * @returns Returns all available responses for the current context, always returns `undefined` if this dialogue is not finished
	 */
	public getResponses() {
		return this.isFinished ? this.responses : undefined;
	}

	/**
	 * A generator function to run the dialogue, immediately finishing if this dialogue is finished
	 * @returns A generator function which will iterate to the next element in the text array
	 */
	public *run() {
		if (this.isFinished) {
			return;
		}

		assert(this.texts[this.index + 1], "The next element is undefined");

		this.index++;

		if (this.index + 1 >= this.texts.size()) {
			this.isFinished = true;
			return;
		}

		if (this.index === this.texts.size() - 1) {
			this.ended.Fire(this.responses);

			DialogueBuilder.dialogueEnded.Fire(this);
		}

		yield this.texts[this.index];
	}
}

export class DialogueBuilder {
	/** A signal that fires when a new dialogue starts */
	public static readonly dialogueStarted = new Signal<Dialogue>();

	/** A signal which fires when a dialogue ends */
	public static readonly dialogueEnded = new Signal<Dialogue>();

	protected name = "";
	protected texts: string[] = [];
	protected responses = new Map<string, DialogueBuilder>();

	/**
	 * Starts a new dialogue
	 * @returns A {@link Dialogue} instance
	 */
	public start() {
		const dialogue = new Dialogue(this.name, this.texts, this.responses);

		DialogueBuilder.dialogueStarted.Fire(dialogue);

		return dialogue;
	}

	public getName() {
		return this.name;
	}

	/**
	 * Sets the name of the character
	 * @param name - The name of the character
	 * @returns This instance, for chaining purposes
	 */
	public setName(name: string) {
		this.name = name;

		return this;
	}

	public getTexts() {
		return this.texts;
	}

	/**
	 * Sets the texts for the dialogue
	 * @param texts - An array of the texts
	 * @returns This instance, for chaining purposes
	 */
	public setTexts(texts: string[]) {
		this.texts = texts;

		return this;
	}

	public getResponses() {
		return this.responses;
	}

	/**
	 * Sets the responses for the dialogue
	 * @param responses - An array of {@link DialogueBuilder}s for responses
	 * @returns This instance, for chaining purposes
	 */
	public setResponses(responses: typeof this.responses) {
		this.responses = responses;

		return this;
	}
}
