import { useSelector } from "@rbxts/roact-reflex";
import { RootState } from "../producer";
import Roact from "@rbxts/roact";

export function DialogueText() {
	const text = useSelector(({ dialogue }: RootState) => dialogue.text);

	return (
		<imagelabel
			Key={"TextCarrier"}
			BackgroundTransparency={1}
			Image={"rbxassetid://95885578"}
			ImageColor3={Color3.fromRGB(167, 167, 167)}
			ImageTransparency={0.4}
			ScaleType={Enum.ScaleType.Crop}
			Size={new UDim2(1.534, 0, 1.088, 0)}
		>
			<textlabel
				Key={"Dialogue"}
				BackgroundColor3={Color3.fromRGB(70, 63, 55)}
				BackgroundTransparency={0.2}
				BorderColor3={Color3.fromRGB(0, 0, 0)}
				BorderSizePixel={5}
				Font={Enum.Font.Kalam}
				FontFace={
					new Font("rbxasset://fonts/families/Kalam.json", Enum.FontWeight.Regular, Enum.FontStyle.Normal)
				}
				Position={new UDim2(0.013000000000000001, 0, 0.053, 0)}
				Size={new UDim2(0.974, 0, 0.894, 0)}
				Text={text}
				TextColor3={Color3.fromRGB(0, 0, 0)}
				TextSize={40}
				TextStrokeColor3={Color3.fromRGB(255, 255, 255)}
				TextStrokeTransparency={0.8}
				TextWrapped={true}
				TextXAlignment={Enum.TextXAlignment.Left}
				TextYAlignment={Enum.TextYAlignment.Top}
			/>
		</imagelabel>
	);
}
