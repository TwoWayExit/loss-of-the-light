import { useAsyncEffect } from "@rbxts/pretty-react-hooks";
import React, { useMemo, useState } from "@rbxts/react";
import { ContentProvider } from "@rbxts/services";
import { usePx } from "client/app/hooks/use-px";
import assetInstances from "shared/asset-instances";

export default function PreloadFrame() {
	const [currentLoading, setLoading] = useState<[count: number, name: string]>();

	const px = usePx();

	const [assetList, names] = useMemo(() => {
		const assetList = new Array<string | Instance>();
		const names = new Array<string>();

		for (const [root, assets] of pairs(assetInstances)) {
			for (const [path, asset] of pairs(assets)) {
				assetList.push(asset);
				names.push(`${root}/${path}`);
			}
		}

		return [assetList, names];
	}, []);

	useAsyncEffect(async () => {
		let i = 0;

		ContentProvider.PreloadAsync(assetList, (contentId, status) => {
			setLoading([i + 1, names[i]]);

			i++;

			if (status === Enum.AssetFetchStatus.Success) {
				print(`[PRELOAD] ${contentId}`);
			} else {
				warn(`[PRELOAD] Failed to preload ${contentId}`);
			}
		});
	}, []);

	if (!currentLoading) {
		return;
	}

	return (
		<frame
			BackgroundColor3={new Color3(0, 0, 0)}
			Size={UDim2.fromScale(1, 1)}
			Visible={currentLoading[0] !== assetList.size()}
			ZIndex={999}
		>
			<textlabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				Position={UDim2.fromScale(0.5, 0.5)}
				Text={`[${currentLoading[0]}/${assetList.size()}]: Loading asset ${currentLoading[1]}...`}
				TextSize={px(14)}
			/>
		</frame>
	);
}
