import { Players } from "@rbxts/services";
import { createPortal, createRoot } from "@rbxts/react-roblox";
import { ReflexProvider } from "@rbxts/react-reflex";
import { Controller, OnStart } from "@flamework/core";
import { Dialogue } from "client/app/components/dialogue/dialogue";
import { producer } from "client/app/producer";
import React, { StrictMode } from "@rbxts/react";

const app = (
	<ReflexProvider producer={producer}>
		<Dialogue />
	</ReflexProvider>
);
@Controller({
	loadOrder: 0,
})
export class UserInterfaceController implements OnStart {
	onStart() {
		const root = createRoot(new Instance("Folder"));

		root.render(<StrictMode>{createPortal(app, Players.LocalPlayer.WaitForChild("PlayerGui"))}</StrictMode>);
		print("React render app");
	}
}
