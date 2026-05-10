import React, { useMemo } from "@rbxts/react";
import { createSequenceArray } from "shared/lib/util";
import Energy from "./energy";
import { LifetimeComponent } from "@rbxts/react-lifetime-component";

export default function EnergyList({ energy, maxEnergy }: { energy: number; maxEnergy: number }) {
	const energyUnits = useMemo(() => {
		const toRender = new Map<number, React.Element>();

		for (const index of createSequenceArray(maxEnergy)) {
			toRender.set(index, <Energy index={index} energy={energy} maxEnergy={maxEnergy} />);
		}

		return toRender;
	}, [energy, maxEnergy]);

	return (
		<frame
			key="Energy"
			BorderSizePixel={0}
			Position={UDim2.fromScale(0.8824, 0.8874)}
			BackgroundTransparency={1}
			Size={UDim2.fromOffset(36, 31)}
		>
			<uilistlayout
				key="UIListLayout"
				HorizontalAlignment={Enum.HorizontalAlignment.Center}
				VerticalAlignment={Enum.VerticalAlignment.Bottom}
				SortOrder={Enum.SortOrder.LayoutOrder}
				Padding={new UDim(0, 5)}
			/>

			<LifetimeComponent>{energyUnits}</LifetimeComponent>
		</frame>
	);
}
