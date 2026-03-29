import assets from "./assets";

export interface Assets<T extends string | Instances[keyof Instances]> {
	[id: string]: T | Assets<T>;
}

interface Tree {
	animations: Record<string, Animation>;
	images: Record<string, string>;
	sounds: Record<string, Sound>;
}

/**
 * Categorized by each asset type stores a `Record` of elements of said type, with a relative path as the index (e.g. `assetInstances.animations["malemc/idle"]`)
 *
 * This is done to allow dynamic indexing using template literals; all without type magic involving unions for nested objects
 */
const assetInstances: Tree = {
	animations: {},
	images: {},
	sounds: {},
};

function recurse<T extends keyof Tree>(root: T, path: string, assets: Assets<string>) {
	for (const [index, asset] of pairs(assets)) {
		if (typeIs(asset, "table")) {
			recurse(root, `${path}${index}/`, asset);
		} else {
			const p = path + index;

			switch (root) {
				case "animations": {
					const animation = new Instance("Animation");

					animation.AnimationId = asset;

					assetInstances[root][p] = animation;
					break;
				}

				case "sounds": {
					const sound = new Instance("Sound");

					sound.SoundId = asset;

					assetInstances[root][p] = sound;
					break;
				}

				default: {
					assetInstances[root][p] = asset;
				}
			}
		}
	}
}

for (const [key] of pairs(assetInstances)) {
	if (key in assets) {
		recurse(key, "", assets[key as keyof typeof assets]);
	}
}

export default assetInstances;
