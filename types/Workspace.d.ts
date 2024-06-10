interface Workspace extends Model {
	Shadow: Model;
	Daryl: Model & {
		["Left Leg"]: Part & {
			LeftFootAttachment: Attachment;
		};
		Humanoid: Humanoid & {
			Animator: Animator;
			HumanoidDescription: HumanoidDescription;
		};
		["Right Leg"]: Part & {
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
			["Left Hip"]: Motor6D;
			roblox: Decal;
			["Right Hip"]: Motor6D;
			["Left Shoulder"]: Motor6D;
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
		["Body Colors"]: BodyColors;
		MessyHairstyleAccessory: Accessory & {
			Handle: Part & {
				HairAttachment: Attachment;
				AccessoryWeld: Weld;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
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
		Pants: Pants;
		MeshPartAccessory: Accessory & {
			Handle: Part & {
				AccessoryWeld: Weld;
				LeftCollarAttachment: Attachment;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		Fedora: Accessory & {
			Handle: Part & {
				AccessoryWeld: Weld;
				HatAttachment: Attachment;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		Shirt: Shirt;
	};
	Base_Bestia: Model & {
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
		Highlight: Highlight;
		EyeCoveringBlackHair: Accessory & {
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
		["Blocky Girl Torso"]: CharacterMesh;
	};
	Baseplate: Part & {
		Texture: Texture;
	};
	["gao gao2"]: Model & {
		["Left Leg"]: Part & {
			LeftFootAttachment: Attachment;
		};
		Humanoid: Humanoid;
		["Right Arm"]: Part & {
			Union: Motor6D;
			RightGripAttachment: Attachment;
			RightShoulderAttachment: Attachment;
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
			RightFootAttachment: Attachment;
		};
		Torso: Part & {
			RightCollarAttachment: Attachment;
			WaistCenterAttachment: Attachment;
			BodyBackAttachment: Attachment;
			Neck: Motor6D;
			LeftCollarAttachment: Attachment;
			["Left Hip"]: Motor6D;
			["Right Hip"]: Motor6D;
			["Left Shoulder"]: Motor6D;
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
	Ladder: Model & {
		Model: Model;
	};
	Camera: Camera;
	["wall(ahi)"]: Part;
	Cleric: Model & {
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
		sun_silverv1: Accessory & {
			Handle: Part & {
				AccessoryWeld: Weld;
				OriginalSize: Vector3Value;
				Mesh: SpecialMesh;
				NeckAttachment: Attachment;
			};
		};
		["Meshes/final_waistAccessory"]: Accessory & {
			Handle: Part & {
				WaistCenterAttachment: Attachment;
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
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
		["You Go Gurl"]: Accessory & {
			Handle: Part & {
				OriginalSize: Vector3Value;
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
		["Accessory (Necro Book 2)"]: Accessory & {
			Handle: Part & {
				WaistCenterAttachment: Attachment;
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
		};
		["Blocky Girl Torso"]: CharacterMesh;
	};
	barrier: Model;
	["Loading Zones"]: Part;
	ShopDude: Model & {
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
		Highlight: Highlight;
		["Right Arm"]: Part & {
			RightShoulderAttachment: Attachment;
			RightGripAttachment: Attachment;
		};
		["Left Arm"]: Part & {
			LeftGripAttachment: Attachment;
			LeftShoulderAttachment: Attachment;
		};
		["Body Colors"]: BodyColors;
		["Miau Pendant Medallion Silver"]: Accessory & {
			Handle: Part & {
				AccessoryWeld: Weld;
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
	Ground: Part;
	Trees: Model;
	Handle: Part & {
		Trail: Trail;
		Mesh: SpecialMesh;
	};
	["gao gao3"]: Model & {
		["Left Leg"]: Part & {
			LeftFootAttachment: Attachment;
		};
		Humanoid: Humanoid;
		["Right Arm"]: Part & {
			Handle: Motor6D;
			RightGripAttachment: Attachment;
			RightShoulderAttachment: Attachment;
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
			RightFootAttachment: Attachment;
		};
		Torso: Part & {
			RightCollarAttachment: Attachment;
			WaistCenterAttachment: Attachment;
			BodyBackAttachment: Attachment;
			Neck: Motor6D;
			LeftCollarAttachment: Attachment;
			["Left Hip"]: Motor6D;
			["Right Hip"]: Motor6D;
			["Left Shoulder"]: Motor6D;
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
	Props: Model;
	Water: Model & {
		["City Water"]: Model;
	};
	Floor: Model & {
		Baseplate: Part;
	};
	combatants: Folder;
	Clock: MeshPart;
	WitchDefensive: Model & {
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
		LongHairr: Accessory & {
			Handle: Part & {
				OriginalSize: Vector3Value;
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
		["Right Arm"]: Part & {
			RightShoulderAttachment: Attachment;
			RightGripAttachment: Attachment;
		};
		["Left Arm"]: Part & {
			LeftGripAttachment: Attachment;
			LeftShoulderAttachment: Attachment;
		};
		["Witch Wizard Hat Orange"]: Accessory & {
			Handle: Part & {
				HatAttachment: Attachment;
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
		};
		ReallyBlackBeltAccessory: Accessory & {
			Handle: Part & {
				WaistCenterAttachment: Attachment;
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
		};
		["Blocky Girl Torso"]: CharacterMesh;
	};
	fx: Folder;
	["Player's House"]: Part;
	Beast_BestiaWelded: Model & {
		["Left Leg"]: Part & {
			LeftLegCover: Weld;
			Snap: Snap;
			LeftFootAttachment: Attachment;
		};
		Humanoid: Humanoid & {
			HumanoidDescription: HumanoidDescription;
		};
		Highlight: Highlight;
		AnimSaves: Model & {
			Untitled: KeyframeSequence;
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
			TorsoCover: Weld;
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
		TorsoCover: Part;
		["Meshes/untitled_catAccessory"]: Accessory & {
			Handle: Part & {
				HatAttachment: Attachment;
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
		};
		["Right Leg Cover"]: Part;
		EyeCoveringBlackHair: Accessory & {
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
		Head: Part & {
			face: Decal;
			HatAttachment: Attachment;
			HairAttachment: Attachment;
			angryface: Decal;
			FaceFrontAttachment: Attachment;
			["Head Cover"]: Weld;
			Mesh: SpecialMesh;
			FaceCenterAttachment: Attachment;
		};
		KyubiTails4Accessory: Accessory & {
			Handle: Part & {
				BodyBackAttachment: Attachment;
				AccessoryWeld: Weld;
				OriginalSize: Vector3Value;
				Fire: Fire;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		Left_ArmCover: Part;
		["Right Leg"]: Part & {
			["Right Leg Cover"]: Weld;
			RightFootAttachment: Attachment;
			Snap: Snap;
		};
		["Right Arm"]: Part & {
			Right_ArmCover: Weld;
			RightGripAttachment: Attachment;
			RightShoulderAttachment: Attachment;
		};
		["Left Arm"]: Part & {
			LeftGripAttachment: Attachment;
			Left_ArmCover: Weld;
			LeftShoulderAttachment: Attachment;
		};
		LeftLegCover: Part;
		["Head Cover"]: Part & {
			Mesh: SpecialMesh;
		};
		Right_ArmCover: Part;
		["Blocky Girl Torso"]: CharacterMesh;
	};
	BackupModels: Folder;
	Cabinet: Model;
	Pillar: Model & {
		["Safety Propotions"]: Model;
		Wall: Model;
		Model: Model;
	};
	["Logs and pool"]: Model;
	SpawnLocation: SpawnLocation & {
		Decal: Decal;
	};
	camera: Model & {
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
	["Myrkr Emitter"]: Part & {
		ParticleEmitter: ParticleEmitter;
	};
	Lillypad: Model;
	Test: Model & {
		Clerictest: Model & {
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
			sun_silverv1: Accessory & {
				Handle: Part & {
					AccessoryWeld: Weld;
					OriginalSize: Vector3Value;
					Mesh: SpecialMesh;
					NeckAttachment: Attachment;
				};
			};
			["Meshes/final_waistAccessory"]: Accessory & {
				Handle: Part & {
					WaistCenterAttachment: Attachment;
					OriginalSize: Vector3Value;
					AccessoryWeld: Weld;
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
			["You Go Gurl"]: Accessory & {
				Handle: Part & {
					OriginalSize: Vector3Value;
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
			["Accessory (Necro Book 2)"]: Accessory & {
				Handle: Part & {
					WaistCenterAttachment: Attachment;
					OriginalSize: Vector3Value;
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
		Base_Bestiatest: Model & {
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
				ParticleEmitter: ParticleEmitter;
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
			Highlight: Highlight;
			EyeCoveringBlackHair: Accessory & {
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
	};
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
		Highlight: Highlight;
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
		["Blocky Girl Torso"]: CharacterMesh;
	};
	Bed: Model;
	Beast_Bestia: Model & {
		["Left Leg"]: Part & {
			Snap: Snap;
			LeftFootAttachment: Attachment;
		};
		Humanoid: Humanoid & {
			HumanoidDescription: HumanoidDescription;
		};
		Highlight: Highlight;
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
		TorsoCover: Part;
		["Meshes/untitled_catAccessory"]: Accessory & {
			Handle: Part & {
				HatAttachment: Attachment;
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
		};
		["Right Leg Cover"]: Part;
		EyeCoveringBlackHair: Accessory & {
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
		Head: Part & {
			HatAttachment: Attachment;
			HairAttachment: Attachment;
			FaceFrontAttachment: Attachment;
			face: Decal;
			Mesh: SpecialMesh;
			FaceCenterAttachment: Attachment;
		};
		KyubiTails4Accessory: Accessory & {
			Handle: Part & {
				BodyBackAttachment: Attachment;
				AccessoryWeld: Weld;
				OriginalSize: Vector3Value;
				Fire: Fire;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		Left_ArmCover: Part;
		["Right Leg"]: Part & {
			Snap: Snap;
			RightFootAttachment: Attachment;
		};
		["Right Arm"]: Part & {
			RightShoulderAttachment: Attachment;
			RightGripAttachment: Attachment;
		};
		["Left Arm"]: Part & {
			LeftGripAttachment: Attachment;
			LeftShoulderAttachment: Attachment;
		};
		LeftLegCover: Part;
		["Head Cover"]: Part & {
			Mesh: SpecialMesh;
		};
		Right_ArmCover: Part;
		["Blocky Girl Torso"]: CharacterMesh;
	};
}
