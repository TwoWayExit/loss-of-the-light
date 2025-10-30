import React from "@rbxts/react";
import { useAtom } from "@rbxts/react-charm";
import { currentDialogue } from "client/app/atoms/dialogue";

export default function DialogueName() {
	const name = useAtom(() => currentDialogue()?.name);

	return (
		<imagelabel
			key={"Name"}
			BackgroundColor3={Color3.fromRGB(255, 255, 255)}
			BorderColor3={Color3.fromRGB(85, 79, 77)}
			BorderSizePixel={4}
			Image={"rbxassetid://218777323"}
			ImageColor3={Color3.fromRGB(223, 223, 223)}
			Position={new UDim2(0.011, 0, -0.164, 0)}
			ScaleType={Enum.ScaleType.Crop}
			Size={new UDim2(0.169, 0, 0.163, 0)}
		>
			<textlabel
				BackgroundTransparency={1}
				Font={Enum.Font.Unknown}
				FontFace={new Font("rbxassetid://12187367362", Enum.FontWeight.Regular, Enum.FontStyle.Normal)}
				Position={new UDim2(0, 0, -0.016, 0)}
				RichText={true}
				SelectionOrder={1}
				Size={new UDim2(1.534, 0, 1.088, 0)}
				Text={name}
				TextColor3={Color3.fromRGB(0, 0, 0)}
				TextSize={40}
				TextStrokeColor3={Color3.fromRGB(255, 255, 255)}
				TextStrokeTransparency={0.8}
				TextWrapped={true}
			/>
		</imagelabel>
	);
}
