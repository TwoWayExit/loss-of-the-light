import React from "@rbxts/react";
import { useAtom } from "@rbxts/react-charm";
import { Players } from "@rbxts/services";
import { clSelectedCombatant } from "client/atoms/client-info";
import { usePx } from "client/app/hooks/use-px";
import { battlesAtom } from "shared/atoms/battles";
import { playersAtom } from "shared/atoms/players";

function EnergyUnit({ energy, index }: { energy: number; index: number }) {
	const px = usePx();

	return (
		<frame
			BorderSizePixel={0}
			BackgroundColor3={Color3.fromRGB(239, 239, 239)}
			Size={UDim2.fromOffset(px(5), px(28))}
		>
			<uistroke key="UIStroke" Color={Color3.fromRGB(76, 76, 76)} ApplyStrokeMode={Enum.ApplyStrokeMode.Border} />
		</frame>
	);
}

// TODO: Move this to combat-frame
export default function EnergyList() {
	const px = usePx();

	const battleId = useAtom(() => playersAtom()[tostring(Players.LocalPlayer.UserId)]?.battleId) ?? "";
	const energy =
		useAtom(
			() =>
				battlesAtom()[battleId]?.playerInfo[tostring(Players.LocalPlayer.UserId)]?.energy[
					clSelectedCombatant()
				],
		) ?? 0;

	return (
		<frame
			key="Energy"
			BorderSizePixel={0}
			Position={new UDim2(1, px(-440), 1, px(-68))}
			BackgroundTransparency={1}
			Size={UDim2.fromOffset(px(42), px(28))}
		>
			<uilistlayout
				key="UIListLayout"
				HorizontalAlignment={Enum.HorizontalAlignment.Center}
				HorizontalFlex={Enum.UIFlexAlignment.SpaceBetween}
				VerticalAlignment={Enum.VerticalAlignment.Bottom}
				Padding={new UDim(0.1, 0)}
			/>

			{[0, 1, 2, 3, 4].map((index) => (
				<EnergyUnit key={index} energy={energy} index={index} />
			))}
		</frame>
	);
}
