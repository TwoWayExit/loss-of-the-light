import React from "@rbxts/react";
import { useSelector } from "@rbxts/react-reflex";
import { Players } from "@rbxts/services";
import { usePx } from "client/app/hooks/use-px";
import { RootState } from "server/producer";
import Combatant from "./combatant";

export default function CombatantList() {
	const combatants = useSelector(
		(state: RootState) => state.players[tostring(Players.LocalPlayer.UserId)]?.combatants,
	);

	const px = usePx();

	return (
		<frame
			key="Units"
			BorderSizePixel={0}
			Position={new UDim2(0, px(25), 1, px(-297))}
			BackgroundTransparency={1}
			Size={UDim2.fromOffset(px(751), px(273))}
		>
			<uilistlayout
				key="UIListLayout"
				FillDirection={Enum.FillDirection.Horizontal}
				VerticalAlignment={Enum.VerticalAlignment.Bottom}
				Padding={new UDim(0, px(40))}
			/>

			{combatants?.map((info, index) => <Combatant index={index} info={info} />)}
		</frame>
	);
}
