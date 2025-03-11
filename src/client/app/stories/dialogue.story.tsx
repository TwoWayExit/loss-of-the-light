import { ReflexProvider } from "@rbxts/react-reflex";
import { DialogueFrame } from "../ui/dialogue/dialogue-frame";
import { RootState, producer } from "../../producer";
import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";

export = {
	react: React,
	reactRoblox: ReactRoblox,

	controls: identity<RootState["dialogue"]>({
		isActive: true,
		name: "",
		text: "",
		currentDialogue: undefined,
	}),

	story: (props: { controls: RootState["dialogue"] }) => {
		producer.setState({
			...producer.getState(),
			dialogue: props.controls,
		});

		return (
			<ReflexProvider producer={producer}>
				<DialogueFrame />
			</ReflexProvider>
		);
	},
};
