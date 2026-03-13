// The DEV flag enables some DevTools features you otherwise wouldn't have
_G.__DEV__ = true;
// The PROFILE flag allows you to run the DevTools profiler
_G.__PROFILE__ = true;

import { backend } from "@rbxts/react-devtools-core";
import { Flamework } from "@flamework/core";

backend.connectToDevtools();

Flamework.addPaths("src/client/components");
Flamework.addPaths("src/client/connections");
Flamework.addPaths("src/client/controllers");
Flamework.addPaths("src/shared/components");

Flamework.ignite();
