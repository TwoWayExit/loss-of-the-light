import { atom } from "@rbxts/charm";
import React from "@rbxts/react";
import { Skill } from "shared/models/skills";

export const selectedSkill = atom<string>();

export default function AbilityButton({
	key,
	anchorPoint,
	position,
	skill,
}: {
	key: number;
	anchorPoint: Vector2;
	position: UDim2;
	skill: Skill;
}) {
	return (
		<textbutton
			key={key}
			AnchorPoint={anchorPoint}
			BorderSizePixel={0}
			BackgroundColor3={Color3.fromRGB(20, 20, 20)}
			Size={UDim2.fromScale(0.3829, 0.476)}
			Position={position}
			FontFace={
				new Font("rbxasset://fonts/families/SourceSansPro.json", Enum.FontWeight.Regular, Enum.FontStyle.Normal)
			}
			TextSize={14}
			BackgroundTransparency={0.3}
			TextColor3={Color3.fromRGB(0, 0, 0)}
			Text={""}
			Event={{
				MouseButton1Click: () => {
					selectedSkill(skill.name);
				},
			}}
		>
			<uicorner key="UICorner" CornerRadius={new UDim(0.05, 0)} />
			<uistroke
				key="UIStroke"
				Color={Color3.fromRGB(141, 141, 141)}
				Thickness={2.8}
				ApplyStrokeMode={Enum.ApplyStrokeMode.Border}
				Transparency={0.38}
			/>
			<textlabel
				key="AbilityName"
				TextWrapped={true}
				BorderSizePixel={0}
				TextXAlignment={Enum.TextXAlignment.Left}
				BackgroundTransparency={1}
				FontFace={
					new Font(
						"rbxasset://fonts/families/GothamSSm.json",
						Enum.FontWeight.ExtraBold,
						Enum.FontStyle.Normal,
					)
				}
				Text={skill.name}
				TextScaled={true}
				TextColor3={Color3.fromRGB(255, 204, 102)}
				Position={UDim2.fromOffset(14, 8)}
				TextSize={14}
				Size={UDim2.fromOffset(255, 36)}
			/>
			<textlabel
				key="Description"
				TextWrapped={true}
				BorderSizePixel={0}
				RichText={true}
				TextXAlignment={Enum.TextXAlignment.Left}
				BackgroundTransparency={1}
				FontFace={
					new Font("rbxasset://fonts/families/GothamSSm.json", Enum.FontWeight.Regular, Enum.FontStyle.Normal)
				}
				Text={skill.properties.description}
				TextYAlignment={Enum.TextYAlignment.Top}
				TextScaled={true}
				TextColor3={Color3.fromRGB(255, 255, 255)}
				Position={UDim2.fromOffset(14, 65)}
				TextSize={14}
				Size={UDim2.fromOffset(255, 65)}
			>
				<uitextsizeconstraint key="UITextSizeConstraint" MaxTextSize={16} />
			</textlabel>
			<textlabel
				key="EnergyCost"
				TextWrapped={true}
				BorderSizePixel={0}
				RichText={true}
				TextXAlignment={Enum.TextXAlignment.Left}
				BackgroundTransparency={1}
				FontFace={
					new Font("rbxasset://fonts/families/GothamSSm.json", Enum.FontWeight.Regular, Enum.FontStyle.Normal)
				}
				Text={"<b> 999</b> ENERGY"}
				TextScaled={true}
				TextColor3={Color3.fromRGB(255, 255, 255)}
				Position={UDim2.fromOffset(14, 43)}
				TextSize={14}
				Size={UDim2.fromOffset(255, 17)}
			/>
		</textbutton>
	);
}
