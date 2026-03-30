import { KeyframeSequenceProvider } from "@rbxts/services";
import type { Teams } from "shared/models/battle";

const animationLengthCache = new Map<string, number>();

export type Constructor<T> = new (...args: never[]) => T;

export function escapedRichText(text: string) {
	text = text.gsub("&", "&amp;")[0];
	text = text.gsub("<", "&lt;")[0];
	text = text.gsub(">", "&gt;")[0];
	text = text.gsub('"', "&quot;")[0];
	text = text.gsub("'", "&apos;")[0];

	return text;
}

export function strColor(text: string, color: string, filterRichText?: boolean) {
	return `<font color='${color}'>${filterRichText ? escapedRichText(text) : text}</font>`;
}

export function strBold(text: string, filterRichText?: boolean) {
	return `<b>${filterRichText ? escapedRichText(text) : text}</b>`;
}

export function strItalic(text: string, filterRichText?: boolean) {
	return `<i>${filterRichText ? escapedRichText(text) : text}</i>`;
}

export function findAllStringOccurrences(text: string, target: string) {
	const result: { text: string; index: number }[] = [];

	let init = 0;
	let find = string.find(text, target, init)[0];

	while (find !== undefined) {
		const match = string.match(text, target, init)[0];

		if (match !== undefined && typeIs(match, "string")) {
			result.push({
				text: match,
				index: find,
			});

			init = find + 1;
			find = string.find(text, target, init)[0];
		}
	}

	return result;
}

/** Returns the team opposite to what is provided as an argument */
export function getOpposingTeam(friendlyTeam: Teams) {
	return tostring((tonumber(friendlyTeam)! + 1) % 2) as Teams; // We're assuming that there will only ever be two teams
}

export async function getAnimationLength(animationId: string) {
	const cached = animationLengthCache.get(animationId);

	if (cached !== undefined) {
		return cached;
	}

	const sequence = KeyframeSequenceProvider.GetKeyframeSequenceAsync(animationId);
	const keyframes = sequence.GetKeyframes();

	let length = 0;

	for (const keyframe of keyframes) {
		if (keyframe.Time > length) {
			length = keyframe.Time;
		}
	}

	animationLengthCache.set(animationId, length);

	return length;
}

export async function waitForAnimationLoaded(track: AnimationTrack) {
	return new Promise<void>((resolve, reject) => {
		if (track.Length > 0) {
			resolve();
		} else {
			reject();
		}
	}).catch(() => Promise.fromEvent(track.GetPropertyChangedSignal("Length"), () => track.Length > 0));
}
