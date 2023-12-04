interface Workspace extends Model {
	["female protag"]: Model & {
		["Left Leg"]: Part & {
			Snap: Snap;
			LeftFootAttachment: Attachment;
		};
		Humanoid: Humanoid & {
			HumanoidDescription: HumanoidDescription;
		};
		["Right Leg"]: Part & {
			Snap: Snap;
			RightFootAttachment: Attachment;
		};
		Head: Part & {
			HatAttachment: Attachment;
			HairAttachment: Attachment;
			FaceFrontAttachment: Attachment;
			face: Decal;
			Mesh: SpecialMesh;
			FaceCenterAttachment: Attachment;
		};
		Torso: Part & {
			RightCollarAttachment: Attachment;
			WaistCenterAttachment: Attachment;
			BodyBackAttachment: Attachment;
			Neck: Motor6D;
			LeftCollarAttachment: Attachment;
			["Left Shoulder"]: Motor6D;
			["Left Hip"]: Motor6D;
			["Right Hip"]: Motor6D;
			["Right Shoulder"]: Motor6D;
			BodyFrontAttachment: Attachment;
			WaistBackAttachment: Attachment;
			WaistFrontAttachment: Attachment;
			NeckAttachment: Attachment;
		};
		HumanoidRootPart: Part & {
			RootJoint: Motor6D;
			RootAttachment: Attachment;
		};
		["Right Arm"]: Part & {
			RightShoulderAttachment: Attachment;
			RightGripAttachment: Attachment;
		};
		["Left Arm"]: Part & {
			LeftGripAttachment: Attachment;
			LeftShoulderAttachment: Attachment;
		};
		["Lady's Floppy Hat"]: Accessory & {
			Handle: Part & {
				AccessoryWeld: Weld;
				HatAttachment: Attachment;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		["Short wavy"]: Accessory & {
			Handle: Part & {
				HairAttachment: Attachment;
				AccessoryWeld: Weld;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
		};
		["Meshes/itsthisonedespiteallthepreviousonesAccessory"]: Accessory & {
			Handle: Part & {
				AccessoryWeld: Weld;
				BodyBackAttachment: Attachment;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
		};
	};
	Camera: Camera;
	Baseplate: Part & {
		Texture: Texture;
	};
	["male protag"]: Model & {
		["Left Leg"]: Part & {
			Snap: Snap;
			LeftFootAttachment: Attachment;
		};
		Humanoid: Humanoid & {
			HumanoidDescription: HumanoidDescription;
		};
		["Right Leg"]: Part & {
			Snap: Snap;
			RightFootAttachment: Attachment;
		};
		Head: Part & {
			HatAttachment: Attachment;
			HairAttachment: Attachment;
			FaceFrontAttachment: Attachment;
			face: Decal;
			Mesh: SpecialMesh;
			FaceCenterAttachment: Attachment;
		};
		Torso: Part & {
			RightCollarAttachment: Attachment;
			WaistCenterAttachment: Attachment;
			BodyBackAttachment: Attachment;
			Neck: Motor6D;
			LeftCollarAttachment: Attachment;
			["Left Shoulder"]: Motor6D;
			["Left Hip"]: Motor6D;
			["Right Hip"]: Motor6D;
			["Right Shoulder"]: Motor6D;
			BodyFrontAttachment: Attachment;
			WaistBackAttachment: Attachment;
			WaistFrontAttachment: Attachment;
			NeckAttachment: Attachment;
		};
		HumanoidRootPart: Part & {
			RootJoint: Motor6D;
			RootAttachment: Attachment;
		};
		TopHat: Accessory & {
			Handle: Part & {
				AccessoryWeld: Weld;
				HatAttachment: Attachment;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
		};
		["Right Arm"]: Part & {
			RightShoulderAttachment: Attachment;
			RightGripAttachment: Attachment;
		};
		["Left Arm"]: Part & {
			LeftGripAttachment: Attachment;
			LeftShoulderAttachment: Attachment;
		};
		["Miau Pendant Medallion Silver"]: Accessory & {
			Handle: Part & {
				NeckAttachment: Attachment;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
		};
		["Accessory (Takaba Slick Hair)"]: Accessory & {
			Handle: Part & {
				HairAttachment: Attachment;
				AccessoryWeld: Weld;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
		};
	};
	fx: Folder;
	SpawnLocation: SpawnLocation & {
		Decal: Decal;
	};
	TemplateUNIVERSALRig: Model & {
		["Left Leg"]: Part & {
			Snap: Snap;
			LeftFootAttachment: Attachment;
		};
		Humanoid: Humanoid & {
			HumanoidDescription: HumanoidDescription;
		};
		["Right Arm"]: Part & {
			RightShoulderAttachment: Attachment;
			RightGripAttachment: Attachment;
		};
		Head: Part & {
			HatAttachment: Attachment;
			HairAttachment: Attachment;
			FaceFrontAttachment: Attachment;
			face: Decal;
			Mesh: SpecialMesh;
			FaceCenterAttachment: Attachment;
		};
		["Right Leg"]: Part & {
			Snap: Snap;
			RightFootAttachment: Attachment;
		};
		Torso: Part & {
			RightCollarAttachment: Attachment;
			WaistCenterAttachment: Attachment;
			BodyBackAttachment: Attachment;
			Neck: Motor6D;
			LeftCollarAttachment: Attachment;
			["Left Shoulder"]: Motor6D;
			["Left Hip"]: Motor6D;
			["Right Hip"]: Motor6D;
			["Right Shoulder"]: Motor6D;
			BodyFrontAttachment: Attachment;
			WaistBackAttachment: Attachment;
			WaistFrontAttachment: Attachment;
			NeckAttachment: Attachment;
		};
		HumanoidRootPart: Part & {
			RootJoint: Motor6D;
			RootAttachment: Attachment;
		};
		["Left Arm"]: Part & {
			LeftGripAttachment: Attachment;
			LeftShoulderAttachment: Attachment;
		};
	};
}
