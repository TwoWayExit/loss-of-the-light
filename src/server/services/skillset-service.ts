import { Service, OnStart } from "@flamework/core";

@Service({})
export class SkillsetService implements OnStart {
	onStart() {
		const [root, parts] = $getModuleTree("shared/modules/skillsets");

		let instance = root;

		// Only go down to stories
		while (parts.size() > 0) {
			instance = instance.WaitForChild(parts.shift()!);
		}

		const tsImpl = (_G as Map<unknown, unknown>).get(script) as {
			import: (...modules: LuaSourceContainer[]) => unknown;
		};

		for (const ms of instance.GetChildren()) {
			if (ms.IsA("ModuleScript")) {
				tsImpl.import(script, ms);
			}
		}
	}
}
