import React from "@rbxts/react";
import { usePx } from "client/app/hooks/use-px";

interface Props {
	used: boolean;
}

export function Stamina(props: Props) {
	const px = usePx();

	return <imagelabel Size={UDim2.fromScale(px(29), px(29))} />;
}
