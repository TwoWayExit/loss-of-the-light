import React from "@rbxts/react";
import DialogueChoice from "./dialogue-choice";
import { usePx } from "client/app/hooks/use-px";

export default function DialogueChoiceList() {
	const px = usePx();

	// right now, there is no state that this list can connect to for generation of dialogue choices.
	// i'll leave it to lapisfloof to figure it out. The dialogue entry below is just for testing.

	// Dialogue choices are ranked so as the first one listed will be the top.

	return (
		<frame
			key="Choices"
			BorderSizePixel={0}
			Position={UDim2.fromScale(0.8086, 0.6331)}
			BackgroundTransparency={1}
			Size={UDim2.fromOffset(px(100), px(100))}
			Visible={true}
		>
			<uilistlayout
				key="UIListLayout"
				VerticalAlignment={Enum.VerticalAlignment.Bottom}
				SortOrder={Enum.SortOrder.LayoutOrder}
				Padding={new UDim(0, px(10))}
			/>

			<DialogueChoice
				text="pinakanakakapagngitngitngitngitang-pagsisinungasinungalingan"
				icon="rbxassetid://7485051715"
				onClick={() => {}}
			/>
			<DialogueChoice text="Give me some time to prepare." icon="rbxassetid://4726772330" onClick={() => {}} />
		</frame>
	);
}
