import { Players } from "@rbxts/services";
import { createPortal, createRoot } from "@rbxts/react-roblox";
import { Controller, OnStart } from "@flamework/core";
import React, { StrictMode } from "@rbxts/react";
import DialogueFrame from "client/app/ui/dialogue/dialogue-frame";
import CombatPageRouter from "client/app/ui/combat/combat-page-router";
import PreloadFrame from "client/app/ui/preload-frame";

const app = (
	<screengui IgnoreGuiInset={true} ResetOnSpawn={false} ZIndexBehavior={Enum.ZIndexBehavior.Sibling}>
		<DialogueFrame />
		<CombatPageRouter />
		<PreloadFrame />
	</screengui>
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
