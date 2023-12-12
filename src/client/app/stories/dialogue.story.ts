import { ReflexProvider } from "@rbxts/roact-reflex";
import { DialogueFrame } from "../components/dialogue-frame";
import { RootState, producer } from "../producer";
import Roact from "@rbxts/roact";

export = {
	controls: identity<RootState["dialogue"]>({
		isActive: true,
		name: "",
		text: "",
		currentDialogue: undefined,
	}),

	story: (props: { controls: RootState["dialogue"] }) => {
		producer.setState({
			dialogue: props.controls,
		});

		return Roact.createElement(
			ReflexProvider,
			{
				producer,
			},
			{ DialogueFrame: Roact.createElement(DialogueFrame) },
		);
	},
};
