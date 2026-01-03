import { useAsyncEffect } from "@rbxts/pretty-react-hooks";
import React, { useMemo, useState } from "@rbxts/react";
import { ContentProvider } from "@rbxts/services";
import { usePx } from "client/app/hooks/use-px";
import assets, { Assets } from "shared/assets";

export default function PreloadFrame() {
	const [currentLoading, setLoading] = useState<[count: number, name: string]>();

	const px = usePx();

	const [assetIds, names] = useMemo(() => {
		const assetIds = new Array<string>();
		const names = new Array<string>();

		const recurse = (assets: Assets, prefix = "") => {
			for (const [name, id] of pairs(assets)) {
				if (typeIs(id, "string")) {
					assetIds.push(id);
					names.push(`${prefix}${name}`);
				} else {
					recurse(id, `${prefix}/${name}/`);
				}
			}
		};

		recurse(assets);

		return [assetIds, names];
	}, []);

	useAsyncEffect(async () => {
		let i = 0;

		ContentProvider.PreloadAsync(assetIds, (contentId, status) => {
			setLoading([i++ + 1, names[i]]);

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
