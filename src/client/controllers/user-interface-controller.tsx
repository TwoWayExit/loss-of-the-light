import { Players } from "@rbxts/services";
import { createPortal, createRoot } from "@rbxts/react-roblox";
import { ReflexProvider } from "@rbxts/react-reflex";
import { Controller, OnStart } from "@flamework/core";
import { producer } from "client/producer";
import React, { StrictMode } from "@rbxts/react";
import CombatFrame from "client/app/ui/combat/combat-frame";
import DialogueFrame from "client/app/ui/dialogue/dialogue-frame";

const app = (
	<ReflexProvider producer={producer}>
		<screengui IgnoreGuiInset={true} ResetOnSpawn={false} ZIndexBehavior={Enum.ZIndexBehavior.Sibling}>
			<DialogueFrame />
			<CombatFrame />
		</screengui>
	</ReflexProvider>
);

@Controller({
	loadOrder: 0,
})
export class UserInterfaceController implements OnStart {
	onStart() {
		const root = createRoot(new Instance("Folder"));

		root.render(<StrictMode>{createPortal(app, Players.LocalPlayer.WaitForChild("PlayerGui"))}</StrictMode>);
		print("[STARTUP] React render app");
	}
}
