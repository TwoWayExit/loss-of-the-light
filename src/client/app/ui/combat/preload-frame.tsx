import { useAsyncEffect } from "@rbxts/pretty-react-hooks";
import React, { useMemo, useState } from "@rbxts/react";
import { ContentProvider } from "@rbxts/services";
import { usePx } from "client/app/hooks/use-px";

export default function PreloadFrame({ preload }: { preload: Record<string, string> }) {
	const [currentLoading, setLoading] = useState<[count: number, name: string]>();

	const px = usePx();

	const [assetIds, nameById] = useMemo(() => {
		const assetIds = new Array<string>();
		const nameById = new Map<string, string>();

		for (const [name, id] of pairs(preload)) {
			assetIds.push(id);
			nameById.set(id, name);
		}

		return [assetIds, nameById];
	}, []);

	useAsyncEffect(async () => {
		let count = 0;

		ContentProvider.PreloadAsync(assetIds, (contentId, status) => {
			setLoading([++count, nameById.get(contentId)!]);

			print(`[PRELOAD] ${contentId} : ${status}`);
		});
	}, []);

	if (!currentLoading) {
		return;
	}

	return (
		<frame BackgroundColor3={new Color3(0, 0, 0)} Size={UDim2.fromScale(1, 1)}>
			<textlabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				Position={UDim2.fromScale(0.5, 0.5)}
				Text={`[${currentLoading[0]}/${assetIds.size()}]: Loading asset ${currentLoading[1]}...`}
				TextSize={px(14)}
			/>
		</frame>
	);
}
