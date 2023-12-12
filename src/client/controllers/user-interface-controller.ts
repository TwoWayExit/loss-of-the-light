import { Players } from "@rbxts/services";
import { ReflexProvider } from "@rbxts/roact-reflex";
import { withHookDetection } from "@rbxts/roact-hooked";
import { Controller, OnStart } from "@flamework/core";
import { Dialogue } from "client/app/components/dialogue";
import { producer } from "client/app/producer";
import Roact from "@rbxts/roact";

const app = Roact.createElement(
	ReflexProvider,
	{
		producer,
	},
	{
		Dialogue: Roact.createElement(Dialogue),
	},
);

@Controller({
	loadOrder: 0,
})
export class UserInterfaceController implements OnStart {
	onStart() {
		withHookDetection(Roact);

		Roact.mount(app, Players.LocalPlayer.WaitForChild("PlayerGui"));
		print("Roact mounted app");
	}
}
