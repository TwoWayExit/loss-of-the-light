import ReactGlobals from "@rbxts/react-globals";

// The DEV flag enables some DevTools features you otherwise wouldn't have
ReactGlobals.__DEV__ = true;
// The PROFILE flag allows you to run the DevTools profiler
ReactGlobals.__PROFILE__ = true;

import { backend } from "@rbxts/react-devtools-core";
import { Flamework } from "@flamework/core";

backend.connectToDevtools();

Flamework.addPaths("src/client/components");
Flamework.addPaths("src/client/connections");
Flamework.addPaths("src/client/controllers");
Flamework.addPaths("src/shared/components");

Flamework.ignite();
