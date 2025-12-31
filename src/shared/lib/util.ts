import type { Teams } from "shared/models/battle";

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

export function deepClone<T extends object>(obj: T): T {
	const newObj = {};

	for (const [i, v] of pairs(obj)) {
		if (typeIs(v, "table")) {
			newObj[i as keyof {}] = deepClone<T>(v as T) as never;
		} else {
			newObj[i as keyof {}] = v as never;
		}
	}

	return newObj as T;
}

/** Returns the team opposite to what is provided as an argument */
export function getOpposingTeam(friendlyTeam: Teams) {
	return tostring((tonumber(friendlyTeam)! + 1) % 2) as Teams; // We're assuming that there will only ever be two teams
}
