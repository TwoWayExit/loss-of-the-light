import { withHookDetection } from "@rbxts/roact-hooked";
import Roact from "@rbxts/roact";

withHookDetection(Roact);

const [root, parts] = $getModuleTree("./stories/dialogue.story"); // $getModuleTree only works with files, not directories

let instance = root;

// Only go down to stories
while (parts.size() > 1) {
	instance = instance.WaitForChild(parts.shift()!);
}

export = {
	roact: Roact,
	storyRoots: [instance],
};
