import { Signal } from "@rbxts/beacon";

export const enum DialogueTextAction {
	RESPONSE,
}

export class Dialogue {
	public constructor(
		public readonly name: string,
		protected texts: (string | DialogueTextAction)[],
		protected responses: Map<number, string[]>,
		protected responsesDialogues: Map<number, DialogueBuilder[]>,
	) {}

	/** A signal that fires when the dialogue ends */
	public readonly ended = new Signal<typeof this.responses>();

	protected index = -1;

	protected isFinished = false;

	public getIsFinished() {
		return this.isFinished;
	}

	public getResponses() {
		return this.responses;
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

		if (this.index === this.texts.size() - 1) {
			this.isFinished = true;

			this.ended.Fire(this.responses);

			DialogueBuilder.dialogueEnded.Fire(this);
		}

		yield this.texts[this.index];
	}
}

// TODO: Add support for continuing/repeating dialogue after a response is picked and its texts are finished
export class DialogueBuilder {
	/** A signal that fires when a new dialogue starts */
	public static readonly dialogueStarted = new Signal<Dialogue>();

	/** A signal which fires when a dialogue ends */
	public static readonly dialogueEnded = new Signal<Dialogue>();

	protected name = "";
	protected texts: (string | DialogueTextAction)[] = [];
	protected responses = new Map<number, string[]>();
	protected responsesDialogues = new Map<number, DialogueBuilder[]>();

	/**
	 * Starts a new dialogue
	 * @returns A {@link Dialogue} instance
	 */
	public start() {
		const dialogue = new Dialogue(this.name, this.texts, this.responses, this.responsesDialogues);

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

	/**
	 * Sets the texts for the dialogue
	 * @param texts - An array of the texts
	 * @returns This instance, for chaining purposes
	 */
	public setTexts(texts: string[]) {
		this.texts = texts;

		return this;
	}

	/**
	 * Sets the responses for the dialogue
	 * @param responses - A map of string arrays, with the index representing any position within `texts` set as `DialogueTextAction.RESPONSE`
	 * @returns This instance, for chaining purposes
	 */
	public setResponses(responses: typeof this.responses) {
		this.responses = responses;

		return this;
	}

	/**
	 * Sets the responses for the dialogue
	 * @param responses - An array of {@link DialogueBuilder}s for responses
	 * @returns This instance, for chaining purposes
	 */
	public setResponsesDialogues(responsesDialogues: typeof this.responsesDialogues) {
		this.responsesDialogues = responsesDialogues;

		return this;
	}
}
