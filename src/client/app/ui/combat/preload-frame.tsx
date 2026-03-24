import { useAsyncEffect } from "@rbxts/pretty-react-hooks";
import React, { useMemo, useState } from "@rbxts/react";
import { ContentProvider } from "@rbxts/services";
import { usePx } from "client/app/hooks/use-px";
import assets from "shared/assets";

export default function PreloadFrame() {
	const [currentLoading, setLoading] = useState<[count: number, name: string]>();

	const px = usePx();

	const [assetIds, names] = useMemo(() => {
		const assetIds = new Array<string>();
		const names = new Array<string>();

		for (const [name, id] of pairs(assets)) {
			assetIds.push(id);
			names.push(name);
		}

		return [assetIds, names];
	}, []);

	useAsyncEffect(async () => {
		let i = 0;

		ContentProvider.PreloadAsync(assetIds, (contentId, status) => {
			setLoading([i + 1, names[i]]);

			i++;

			print(`[PRELOAD] ${contentId} : ${status}`);
		});
	}, []);

	if (!currentLoading) {
		return;
	}

	return (
		<frame
			BackgroundColor3={new Color3(0, 0, 0)}
			Size={UDim2.fromScale(1, 1)}
			Visible={currentLoading[0] !== assetIds.size()}
			ZIndex={999}
		>
			<textlabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				Position={UDim2.fromScale(0.5, 0.5)}
				Text={`[${currentLoading[0]}/${assetIds.size()}]: Loading asset ${currentLoading[1]}...`}
				TextSize={px(14)}
			/>
		</frame>
	);
}
