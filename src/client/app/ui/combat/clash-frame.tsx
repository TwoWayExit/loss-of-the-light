import React, { useEffect } from "@rbxts/react";

export default function ClashFrame(props: { active?: boolean }) {
	// Page animation
	useEffect(() => {
		if (props.active) {
			print("CLASH FRAME | active menu");
		} else {
			print("CLASH FRAME | leaving!");
		}
	}, [props.active]);

	return <frame key={"ClashFrame"} Size={UDim2.fromScale(1, 1)} BackgroundTransparency={1} />;
}
