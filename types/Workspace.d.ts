interface Workspace extends Model {
	trestet: Model & {
		test: Model & {
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
			AnimSaves: Model & {
				Untitled: KeyframeSequence & {
					Keyframe: Keyframe & {
						HumanoidRootPart: Pose & {
							Null: IntValue;
							Torso: Pose;
						};
					};
				};
			};
		};
		quizzicle: Model & {
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
			AnimSaves: Model & {
				Untitled: KeyframeSequence & {
					Keyframe: Keyframe & {
						HumanoidRootPart: Pose & {
							Null: IntValue;
							Torso: Pose;
						};
					};
				};
			};
		};
	};
	["A/DOOR w/ Sign"]: Model & {
		Sign: Part & {
			SurfaceGui: SurfaceGui & {
				SIGN: TextLabel;
			};
		};
	};
	["female protag test"]: Model & {
		["Left Leg"]: Part & {
			Snap: Snap;
			LeftFootAttachment: Attachment;
		};
		Humanoid: Humanoid & {
			HumanoidDescription: HumanoidDescription;
		};
		Highlight: Highlight;
		Clothing: Pants;
		Face: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
			Handle: Part & {
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				Face: Decal;
				Mesh: SpecialMesh;
				FaceCenterAttachment: Attachment;
			};
		};
		HumanoidRootPart: Part & {
			RootJoint: Motor6D;
			RootAttachment: Attachment;
		};
		Scarf: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
			Handle: Part & {
				BodyBackAttachment: Attachment;
				AccessoryWeld: Weld;
				Highlight: Highlight;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		Shirt: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
			Handle: Part & {
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				BodyFrontAttachment: Attachment;
				Highlight: Highlight;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		Jacket: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
			Handle: Part & {
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				BodyFrontAttachment: Attachment;
				Highlight: Highlight;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		Hat: Accessory & {
			Handle: Part & {
				HatAttachment: Attachment;
				Highlight: Highlight;
				AccessoryWeld: Weld;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		Head: Part & {
			HatAttachment: Attachment;
			FaceFrontAttachment: Attachment;
			HairAttachment: Attachment;
			Mesh: SpecialMesh;
			FaceCenterAttachment: Attachment;
		};
		["Pearl Necklace"]: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
			Handle: Part & {
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				Highlight: Highlight;
				NeckAttachment: Attachment;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		["Right Leg"]: Part & {
			Snap: Snap;
			RightFootAttachment: Attachment;
		};
		["Blocky Girl Torso"]: CharacterMesh;
		["Right Arm"]: Part & {
			RightShoulderAttachment: Attachment;
			RightGripAttachment: Attachment;
		};
		["Left Arm"]: Part & {
			LeftGripAttachment: Attachment;
			LeftShoulderAttachment: Attachment;
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
		["Left Sleeve"]: Accessory & {
			Handle: Part & {
				OriginalSize: Vector3Value;
				LeftShoulderAttachment: Attachment;
				AccessoryWeld: Weld;
				Highlight: Highlight;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		["Right Sleeve"]: Accessory & {
			Handle: Part & {
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				Highlight: Highlight;
				RightShoulderAttachment: Attachment;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		Hair: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
			Handle: Part & {
				Highlight: Highlight;
				HairAttachment: Attachment;
				AccessoryWeld: Weld;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
	};
	["talkablenpc do something with him"]: Model & {
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
	AnimationPlate: Model & {
		origin: Part & {
			Decal: Decal;
		};
		Team2: Part & {
			Decal: Decal;
		};
		Team1: Part & {
			Decal: Decal;
		};
	};
	["Brick Store"]: Model;
	sp1kecactus: Model & {
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
		Infinity_Scarf_WHT_Accessory: Accessory & {
			Handle: Part & {
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				NeckAttachment: Attachment & {
					OriginalPosition: Vector3Value;
				};
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		SproutSorority: Accessory & {
			Handle: Part & {
				HatAttachment: Attachment & {
					OriginalPosition: Vector3Value;
				};
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		HumanoidRootPart: Part & {
			RootJoint: Motor6D;
			RootAttachment: Attachment;
		};
		["Left Arm"]: Part & {
			LeftGripAttachment: Attachment;
			LeftShoulderAttachment: Attachment;
		};
		VoidAntlers: Accessory & {
			Handle: Part & {
				HatAttachment: Attachment & {
					OriginalPosition: Vector3Value;
				};
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		["Right Arm"]: Part & {
			RightShoulderAttachment: Attachment;
			RightGripAttachment: Attachment;
		};
		CarrotNose: Accessory & {
			Handle: Part & {
				OriginalSize: Vector3Value;
				FaceFrontAttachment: Attachment & {
					OriginalPosition: Vector3Value;
				};
				AccessoryWeld: Weld;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
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
		MeshPartAccessory: Accessory & {
			Handle: Part & {
				HatAttachment: Attachment & {
					OriginalPosition: Vector3Value;
				};
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
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
		["Body Colors"]: BodyColors;
	};
	regions: Folder & {
		baseplate: Folder & {
			["fake male backup3"]: Model & {
				["Left Leg"]: Part & {
					Snap: Snap;
					LeftFootAttachment: Attachment;
				};
				Humanoid: Humanoid & {
					HumanoidDescription: HumanoidDescription;
				};
				Highlight: Highlight;
				AnimSaves: Model & {
					IDLEDONTCRASH: KeyframeSequence;
					BASICDONTCRASH: KeyframeSequence;
					HURTDONTCRASH: KeyframeSequence;
				};
				Face: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						face: Decal;
						Mesh: SpecialMesh;
						FaceCenterAttachment: Attachment;
					};
				};
				Belt: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						WaistCenterAttachment: Attachment;
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
				["Left Sleeve"]: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
						LeftShoulderAttachment: Attachment;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
				Pants: Pants;
				Pendant: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						NeckAttachment: Attachment;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
				Head: Part & {
					HatAttachment: Attachment;
					FaceFrontAttachment: Attachment;
					HairAttachment: Attachment;
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
				Suit: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraTarget: ObjectValue;
						ThumbnailCameraValue: CFrameValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						BodyBackAttachment: Attachment;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
				Clothing: Shirt;
				TopHat: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						HatAttachment: Attachment;
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
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
				HumanoidRootPart: Part & {
					RootJoint: Motor6D;
					RootAttachment: Attachment;
				};
				["Body Colors"]: BodyColors;
				["Right Sleeve"]: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						RightShoulderAttachment: Attachment;
						AvatarPartScaleType: StringValue;
					};
				};
				Hair: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
						HairAttachment: Attachment;
						AccessoryWeld: Weld;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
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
			["Beast_Bestia rig bakcou"]: Model & {
				["Left Leg"]: Part & {
					Snap: Snap;
					LeftFootAttachment: Attachment;
				};
				Humanoid: Humanoid & {
					HumanoidDescription: HumanoidDescription;
				};
				Highlight: Highlight;
				Head: Part & {
					HatAttachment: Attachment;
					HairAttachment: Attachment;
					angryface: Decal;
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
					["Right Shoulder"]: Motor6D;
					["Right Hip"]: Motor6D;
					["Left Hip"]: Motor6D;
					["Left Arm"]: Motor6D;
					BodyFrontAttachment: Attachment;
					WaistBackAttachment: Attachment;
					WaistFrontAttachment: Attachment;
					NeckAttachment: Attachment;
				};
				HumanoidRootPart: Part & {
					RootJoint: Motor6D;
					RootAttachment: Attachment;
				};
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
				EyeCoveringBlackHair: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
						HairAttachment: Attachment;
						AccessoryWeld: Weld;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
				AnimSaves: Model & {
					Untitled: KeyframeSequence;
				};
				["Meshes/untitled_catAccessory"]: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						HatAttachment: Attachment;
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
				["Blocky Girl Torso"]: CharacterMesh;
			};
			max: Part;
			STARFISH: Model & {
				Starfish: Model & {
					Torso: MeshPart & {
						Eyes: Model;
						Mouth: Model;
					};
				};
				TOAST: Model & {
					ToastAU: Model & {
						["Left Leg"]: Part & {
							LeftFootAttachment: Attachment;
						};
						Humanoid: Humanoid;
						["Right Leg"]: Part & {
							RightFootAttachment: Attachment;
						};
						Head: Part & {
							Mesh: SpecialMesh;
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
							Weld: Weld;
							RightGripAttachment: Attachment;
							RightShoulderAttachment: Attachment;
						};
						["Left Arm"]: Part & {
							LeftGripAttachment: Attachment;
							Weld: Weld;
							LeftShoulderAttachment: Attachment;
						};
						Accessories: Model;
					};
					Fridge: Model;
				};
				SPIKE: Model & {
					SawBlade: Part & {
						Mesh: SpecialMesh;
						Spin: Script;
					};
					Restraints: Model;
					sp1kecactus: Model & {
						["Left Leg"]: Part & {
							LeftFootAttachment: Attachment;
						};
						Humanoid: Humanoid;
						["Right Leg"]: Part & {
							RightFootAttachment: Attachment;
						};
						Head: Part & {
							HatAttachment: Attachment;
							Accessories: Model;
							FaceFrontAttachment: Attachment;
							HairAttachment: Attachment;
							Mesh: SpecialMesh;
							FaceCenterAttachment: Attachment;
						};
						Part: Part & {
							Mesh: CylinderMesh;
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
							Weld: Weld;
							RightGripAttachment: Attachment;
							RightShoulderAttachment: Attachment;
						};
						["Left Arm"]: Part & {
							LeftGripAttachment: Attachment;
							Weld: Weld;
							LeftShoulderAttachment: Attachment;
						};
						Model: Model;
					};
					Model: Model;
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
				["Lady's Floppy Hat"]: Accessory & {
					Handle: Part & {
						AccessoryWeld: Weld;
						HatAttachment: Attachment;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
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
				Highlight: Highlight;
				["Short wavy"]: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						HairAttachment: Attachment;
						AccessoryWeld: Weld;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
				["Meshes/itsthisonedespiteallthepreviousonesAccessory"]: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						AccessoryWeld: Weld;
						BodyBackAttachment: Attachment;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
				["Blocky Girl Torso"]: CharacterMesh;
			};
			["Freddy Fazbear"]: Model & {
				["endo chica yay"]: MeshPart & {
					["Meshes/Left Lower Arm"]: Motor6D & {
						DefaultC1: CFrameValue;
					};
				};
				Humanoid: Humanoid & {
					Animator: Animator;
				};
				["Meshes/Left Foot"]: MeshPart;
				["Meshes/Right Hand"]: MeshPart;
				["Meshes/Right Thigh"]: MeshPart & {
					["Meshes/Right Shin"]: Motor6D & {
						DefaultC1: CFrameValue;
					};
				};
				LeftEye: MeshPart;
				["Meshes/Left Lower Arm"]: MeshPart & {
					["Meshes/Left Hand"]: Motor6D & {
						DefaultC1: CFrameValue;
					};
				};
				["Meshes/Eyelid Lower"]: MeshPart;
				["Meshes/Right Lower Arm"]: MeshPart & {
					["Meshes/Right Hand"]: Motor6D & {
						DefaultC1: CFrameValue;
					};
				};
				["Meshes/Left Shin"]: MeshPart & {
					["Meshes/Left Thigh"]: Motor6D & {
						DefaultC1: CFrameValue;
					};
				};
				["Meshes/Endo Head"]: MeshPart & {
					LeftEye: Motor6D & {
						DefaultC1: CFrameValue;
					};
					["Meshes/Jaw"]: Motor6D & {
						DefaultC1: CFrameValue;
					};
					["Meshes/Eyelid Upper"]: Motor6D & {
						DefaultC1: CFrameValue;
					};
					["Meshes/Eyelid Lower"]: Motor6D & {
						DefaultC1: CFrameValue;
					};
					["Meshes/Eyelid Lower1"]: Motor6D & {
						DefaultC1: CFrameValue;
					};
					RightEye: Motor6D & {
						DefaultC1: CFrameValue;
					};
					["Meshes/Eyelid Upper1"]: Motor6D & {
						DefaultC1: CFrameValue;
					};
				};
				["Meshes/Freddy Endo Torso"]: MeshPart & {
					["endo chica yay"]: Motor6D & {
						DefaultC1: CFrameValue;
					};
					["Meshes/Endo Head"]: Motor6D & {
						DefaultC1: CFrameValue;
					};
					["Meshes/Root Pelvis"]: Motor6D & {
						DefaultC1: CFrameValue;
					};
					["Meshes/Right Upper Arm"]: Motor6D & {
						DefaultC1: CFrameValue;
					};
				};
				["Meshes/Eyelid Lower1"]: MeshPart;
				["Meshes/Left Hand"]: MeshPart;
				["Meshes/Root Pelvis"]: MeshPart & {
					["Meshes/Left Shin"]: Motor6D & {
						DefaultC1: CFrameValue;
					};
					["Meshes/Right Thigh"]: Motor6D & {
						DefaultC1: CFrameValue;
					};
				};
				["Meshes/Jaw"]: MeshPart;
				Suit: Model & {
					["Meshes/Right Shoulder Pad"]: MeshPart & {
						["Meshes/Freddy Endo Torso"]: Weld;
					};
					["Meshes/Freddy Head"]: MeshPart & {
						["Meshes/Endo Head"]: Weld;
					};
					["Meshes/Right Shin"]: MeshPart & {
						["Meshes/Left Thigh"]: Weld;
					};
					["Meshes/Left Shoulder Pad"]: MeshPart & {
						["Meshes/Freddy Endo Torso"]: Weld;
					};
					["Meshes/Left Knee"]: MeshPart & {
						["Meshes/Left Thigh"]: Weld;
					};
					["Meshes/Right Upper Arm"]: MeshPart & {
						["Meshes/Right Upper Arm"]: Weld;
					};
					["Meshes/Eyebrow"]: MeshPart & {
						["Meshes/Endo Head"]: Weld;
					};
					["Meshes/Right Knee"]: MeshPart & {
						["Meshes/Right Upper Leg"]: Weld;
					};
					["Meshes/Left Hand"]: MeshPart & {
						["mic 2"]: Weld;
					};
					["Meshes/Hat"]: MeshPart & {
						["Meshes/Endo Head"]: Weld;
					};
					["Meshes/Left Thigh"]: MeshPart & {
						["Meshes/Right Thigh"]: Weld;
					};
					["Meshes/Right Upper Leg"]: MeshPart & {
						["Meshes/Left Shin"]: Weld;
					};
					["Meshes/Left Shin"]: MeshPart & {
						["Meshes/Right Shin"]: Weld;
					};
				};
				["Meshes/Left Thigh"]: MeshPart & {
					["Meshes/Right Foot"]: Motor6D & {
						DefaultC1: CFrameValue;
					};
				};
				RightEye: MeshPart;
				["Meshes/Eyelid Upper1"]: MeshPart;
				["Meshes/Right Upper Arm"]: MeshPart & {
					["Meshes/Right Lower Arm"]: Motor6D & {
						DefaultC1: CFrameValue;
					};
				};
				Model: Model & {
					["mic dark"]: MeshPart & {
						["mic 1"]: Weld;
						["mic 2"]: Weld;
					};
					["mic 1"]: MeshPart;
					["mic 2"]: MeshPart;
				};
				HumanoidRootPart: Part & {
					["Meshes/Freddy Endo Torso"]: Motor6D;
				};
				["Meshes/Right Shin"]: MeshPart & {
					["Meshes/Left Foot"]: Motor6D & {
						DefaultC1: CFrameValue;
					};
				};
				["Meshes/Right Foot"]: MeshPart;
				["Meshes/Eyelid Upper"]: MeshPart;
			};
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
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
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
				["Witch Wizard Hat Orange"]: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						HatAttachment: Attachment;
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
				ReallyBlackBeltAccessory: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						WaistCenterAttachment: Attachment;
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
				["Blocky Girl Torso"]: CharacterMesh;
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
				Clothing: Shirt;
				Face: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						face: Decal;
						Mesh: SpecialMesh;
						FaceCenterAttachment: Attachment;
					};
				};
				HumanoidRootPart: Part & {
					RootJoint: Motor6D;
					RootAttachment: Attachment;
				};
				["Left Sleeve"]: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
						LeftShoulderAttachment: Attachment;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
				Pants: Pants;
				Pendant: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						NeckAttachment: Attachment;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
				Head: Part & {
					HatAttachment: Attachment;
					FaceFrontAttachment: Attachment;
					HairAttachment: Attachment;
					Mesh: SpecialMesh;
					FaceCenterAttachment: Attachment;
				};
				Suit: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraTarget: ObjectValue;
						ThumbnailCameraValue: CFrameValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						BodyBackAttachment: Attachment;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
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
				TopHat: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						HatAttachment: Attachment;
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
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
				Belt: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						WaistCenterAttachment: Attachment;
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
				["Right Sleeve"]: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						RightShoulderAttachment: Attachment;
						AvatarPartScaleType: StringValue;
					};
				};
				Hair: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
						HairAttachment: Attachment;
						AccessoryWeld: Weld;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
			};
			["MC RIG"]: Model & {
				["Left Leg"]: Part & {
					Snap: Snap;
					LeftFootAttachment: Attachment;
				};
				Humanoid: Humanoid & {
					HumanoidDescription: HumanoidDescription;
				};
				Highlight: Highlight;
				AnimSaves: Model & {
					Idle: KeyframeSequence;
					Untitled: KeyframeSequence;
				};
				["Body Colors"]: BodyColors;
				HumanoidRootPart: Part & {
					RootJoint: Motor6D;
					RootAttachment: Attachment;
				};
				TopHat: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						AccessoryWeld: Weld;
						HatAttachment: Attachment;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
				["Right Leg"]: Part & {
					Snap: Snap;
					RightFootAttachment: Attachment;
				};
				["Right Arm"]: Part & {
					RightShoulderAttachment: Attachment;
					RightGripAttachment: Attachment;
				};
				["Accessory (Takaba Slick Hair)"]: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						HairAttachment: Attachment;
						AccessoryWeld: Weld;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
				["Left Arm"]: Part & {
					LeftGripAttachment: Attachment;
					LeftShoulderAttachment: Attachment;
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
				["Miau Pendant Medallion Silver"]: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						AccessoryWeld: Weld;
						NeckAttachment: Attachment;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
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
			};
			["female protag test"]: Model & {
				["Left Leg"]: Part & {
					Snap: Snap;
					LeftFootAttachment: Attachment;
				};
				Humanoid: Humanoid & {
					HumanoidDescription: HumanoidDescription;
				};
				["Lady's Floppy Hat"]: Accessory & {
					Handle: Part & {
						AccessoryWeld: Weld;
						HatAttachment: Attachment;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
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
				Highlight: Highlight;
				["Short wavy"]: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						HairAttachment: Attachment;
						AccessoryWeld: Weld;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
				["Meshes/itsthisonedespiteallthepreviousonesAccessory"]: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						AccessoryWeld: Weld;
						BodyBackAttachment: Attachment;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
				["Blocky Girl Torso"]: CharacterMesh;
			};
			Clock: MeshPart;
			["Myrkr Emitter"]: Part & {
				ParticleEmitter: ParticleEmitter;
			};
			Handle: Part & {
				Trail: Trail;
				Mesh: SpecialMesh;
			};
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
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						HatAttachment: Attachment;
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
				["Right Leg Cover"]: Part;
				EyeCoveringBlackHair: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						HairAttachment: Attachment;
						AccessoryWeld: Weld;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
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
			["fake male backup2"]: Model & {
				["Left Leg"]: Part & {
					Snap: Snap;
					LeftFootAttachment: Attachment;
				};
				Humanoid: Humanoid & {
					HumanoidDescription: HumanoidDescription;
				};
				Highlight: Highlight;
				AnimSaves: Model & {
					IDLEDONTCRASH: KeyframeSequence;
					BASICDONTCRASH: KeyframeSequence;
				};
				Face: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						face: Decal;
						Mesh: SpecialMesh;
						FaceCenterAttachment: Attachment;
					};
				};
				Belt: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						WaistCenterAttachment: Attachment;
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
				["Left Sleeve"]: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
						LeftShoulderAttachment: Attachment;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
				Pants: Pants;
				Pendant: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						NeckAttachment: Attachment;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
				Head: Part & {
					HatAttachment: Attachment;
					FaceFrontAttachment: Attachment;
					HairAttachment: Attachment;
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
				Suit: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraTarget: ObjectValue;
						ThumbnailCameraValue: CFrameValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						BodyBackAttachment: Attachment;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
				Clothing: Shirt;
				TopHat: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						HatAttachment: Attachment;
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
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
				HumanoidRootPart: Part & {
					RootJoint: Motor6D;
					RootAttachment: Attachment;
				};
				["Body Colors"]: BodyColors;
				["Right Sleeve"]: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						RightShoulderAttachment: Attachment;
						AvatarPartScaleType: StringValue;
					};
				};
				Hair: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
						HairAttachment: Attachment;
						AccessoryWeld: Weld;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
			};
			Cabinet: Model;
			["real male"]: Model & {
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
				Clothing: Shirt;
				Face: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						face: Decal;
						Mesh: SpecialMesh;
						FaceCenterAttachment: Attachment;
					};
				};
				HumanoidRootPart: Part & {
					RootJoint: Motor6D;
					RootAttachment: Attachment;
				};
				["Left Sleeve"]: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
						LeftShoulderAttachment: Attachment;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
				Pants: Pants;
				Pendant: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						NeckAttachment: Attachment;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
				Head: Part & {
					HatAttachment: Attachment;
					FaceFrontAttachment: Attachment;
					HairAttachment: Attachment;
					Mesh: SpecialMesh;
					FaceCenterAttachment: Attachment;
				};
				Suit: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraTarget: ObjectValue;
						ThumbnailCameraValue: CFrameValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						BodyBackAttachment: Attachment;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
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
				TopHat: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						HatAttachment: Attachment;
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
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
				Belt: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						WaistCenterAttachment: Attachment;
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
				["Right Sleeve"]: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						RightShoulderAttachment: Attachment;
						AvatarPartScaleType: StringValue;
					};
				};
				Hair: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
						HairAttachment: Attachment;
						AccessoryWeld: Weld;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
			};
			Cleric: Model & {
				["Left Leg"]: Part & {
					Snap: Snap;
					LeftFootAttachment: Attachment;
				};
				Humanoid: Humanoid & {
					HumanoidDescription: HumanoidDescription;
				};
				["Accessory (Necro Book 2)"]: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						WaistCenterAttachment: Attachment;
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
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
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						WaistCenterAttachment: Attachment;
						OriginalSize: Vector3Value;
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
				["You Go Gurl"]: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
						HairAttachment: Attachment;
						AccessoryWeld: Weld;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
				["Right Leg"]: Part & {
					Snap: Snap;
					RightFootAttachment: Attachment;
				};
				["Blocky Girl Torso"]: CharacterMesh;
			};
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
			["fake male backup"]: Model & {
				["Left Leg"]: Part & {
					Snap: Snap;
					LeftFootAttachment: Attachment;
				};
				Humanoid: Humanoid & {
					HumanoidDescription: HumanoidDescription;
				};
				Highlight: Highlight;
				AnimSaves: Model & {
					IDLEDONTCRASH: KeyframeSequence;
				};
				Face: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						face: Decal;
						Mesh: SpecialMesh;
						FaceCenterAttachment: Attachment;
					};
				};
				Belt: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						WaistCenterAttachment: Attachment;
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
				["Left Sleeve"]: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
						LeftShoulderAttachment: Attachment;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
				Pants: Pants;
				Pendant: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						NeckAttachment: Attachment;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
				Head: Part & {
					HatAttachment: Attachment;
					FaceFrontAttachment: Attachment;
					HairAttachment: Attachment;
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
				Suit: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraTarget: ObjectValue;
						ThumbnailCameraValue: CFrameValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						BodyBackAttachment: Attachment;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
				Clothing: Shirt;
				TopHat: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						HatAttachment: Attachment;
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
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
				HumanoidRootPart: Part & {
					RootJoint: Motor6D;
					RootAttachment: Attachment;
				};
				["Body Colors"]: BodyColors;
				["Right Sleeve"]: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						RightShoulderAttachment: Attachment;
						AvatarPartScaleType: StringValue;
					};
				};
				Hair: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
						HairAttachment: Attachment;
						AccessoryWeld: Weld;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
			};
			["male protag23213213"]: Model & {
				["Left Leg"]: Part & {
					Snap: Snap;
					LeftFootAttachment: Attachment;
				};
				Humanoid: Humanoid & {
					HumanoidDescription: HumanoidDescription;
				};
				Highlight: Highlight;
				Head: Part & {
					HatAttachment: Attachment;
					HairAttachment: Attachment;
					FaceFrontAttachment: Attachment;
					face: Decal;
					Mesh: SpecialMesh;
					FaceCenterAttachment: Attachment;
				};
				["Body Colors"]: BodyColors;
				HumanoidRootPart: Part & {
					RootJoint: Motor6D;
					RootAttachment: Attachment;
				};
				TopHat: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						AccessoryWeld: Weld;
						HatAttachment: Attachment;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
				["Right Arm"]: Part & {
					RightShoulderAttachment: Attachment;
					RightGripAttachment: Attachment;
				};
				["Accessory (Takaba Slick Hair)"]: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						HairAttachment: Attachment;
						AccessoryWeld: Weld;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
				["Right Leg"]: Part & {
					Snap: Snap;
					RightFootAttachment: Attachment;
				};
				["Left Arm"]: Part & {
					LeftGripAttachment: Attachment;
					LeftShoulderAttachment: Attachment;
				};
				["Miau Pendant Medallion Silver"]: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						AccessoryWeld: Weld;
						NeckAttachment: Attachment;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
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
			};
			min: Part;
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
			["fake male"]: Model & {
				["Left Leg"]: Part & {
					Snap: Snap;
					LeftFootAttachment: Attachment;
				};
				Humanoid: Humanoid & {
					HumanoidDescription: HumanoidDescription;
				};
				Highlight: Highlight;
				AnimSaves: Model & {
					IDLEDONTCRASH: KeyframeSequence;
					HURTDONTCRASH: KeyframeSequence;
					BASICDONTCRASH: KeyframeSequence;
				};
				Face: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						face: Decal;
						Mesh: SpecialMesh;
						FaceCenterAttachment: Attachment;
					};
				};
				Belt: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						WaistCenterAttachment: Attachment;
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
				["Left Sleeve"]: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
						LeftShoulderAttachment: Attachment;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
				Pants: Pants;
				Pendant: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						NeckAttachment: Attachment;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
				Head: Part & {
					HatAttachment: Attachment;
					FaceFrontAttachment: Attachment;
					HairAttachment: Attachment;
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
				Suit: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraTarget: ObjectValue;
						ThumbnailCameraValue: CFrameValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						BodyBackAttachment: Attachment;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
				Clothing: Shirt;
				TopHat: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						HatAttachment: Attachment;
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
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
				HumanoidRootPart: Part & {
					RootJoint: Motor6D;
					RootAttachment: Attachment;
				};
				["Body Colors"]: BodyColors;
				["Right Sleeve"]: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						RightShoulderAttachment: Attachment;
						AvatarPartScaleType: StringValue;
					};
				};
				Hair: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
						HairAttachment: Attachment;
						AccessoryWeld: Weld;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
			};
			Test: Model & {
				Clerictest: Model & {
					["Left Leg"]: Part & {
						Snap: Snap;
						LeftFootAttachment: Attachment;
					};
					Humanoid: Humanoid & {
						HumanoidDescription: HumanoidDescription;
					};
					["Accessory (Necro Book 2)"]: Accessory & {
						ThumbnailConfiguration: Configuration & {
							ThumbnailCameraValue: CFrameValue;
							ThumbnailCameraTarget: ObjectValue;
						};
						Handle: Part & {
							WaistCenterAttachment: Attachment;
							OriginalSize: Vector3Value;
							AccessoryWeld: Weld;
							SpecialMesh: SpecialMesh;
							AvatarPartScaleType: StringValue;
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
						ThumbnailConfiguration: Configuration & {
							ThumbnailCameraValue: CFrameValue;
							ThumbnailCameraTarget: ObjectValue;
						};
						Handle: Part & {
							WaistCenterAttachment: Attachment;
							OriginalSize: Vector3Value;
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
					["You Go Gurl"]: Accessory & {
						ThumbnailConfiguration: Configuration & {
							ThumbnailCameraValue: CFrameValue;
							ThumbnailCameraTarget: ObjectValue;
						};
						Handle: Part & {
							OriginalSize: Vector3Value;
							HairAttachment: Attachment;
							AccessoryWeld: Weld;
							SpecialMesh: SpecialMesh;
							AvatarPartScaleType: StringValue;
						};
					};
					["Right Leg"]: Part & {
						Snap: Snap;
						RightFootAttachment: Attachment;
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
					Highlight: Highlight;
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
					["Right Leg"]: Part & {
						Snap: Snap;
						RightFootAttachment: Attachment;
					};
					EyeCoveringBlackHair: Accessory & {
						ThumbnailConfiguration: Configuration & {
							ThumbnailCameraValue: CFrameValue;
							ThumbnailCameraTarget: ObjectValue;
						};
						Handle: Part & {
							HairAttachment: Attachment;
							AccessoryWeld: Weld;
							SpecialMesh: SpecialMesh;
							AvatarPartScaleType: StringValue;
						};
					};
				};
			};
			["Beast_Bestia rig"]: Model & {
				["Left Leg"]: Part & {
					Snap: Snap;
					LeftFootAttachment: Attachment;
				};
				Humanoid: Humanoid & {
					HumanoidDescription: HumanoidDescription;
				};
				Highlight: Highlight;
				Head: Part & {
					HatAttachment: Attachment;
					HairAttachment: Attachment;
					angryface: Decal;
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
					["Right Shoulder"]: Motor6D;
					["Right Hip"]: Motor6D;
					["Left Hip"]: Motor6D;
					["Left Arm"]: Motor6D;
					BodyFrontAttachment: Attachment;
					WaistBackAttachment: Attachment;
					WaistFrontAttachment: Attachment;
					NeckAttachment: Attachment;
				};
				HumanoidRootPart: Part & {
					RootJoint: Motor6D;
					RootAttachment: Attachment;
				};
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
				EyeCoveringBlackHair: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						OriginalSize: Vector3Value;
						HairAttachment: Attachment;
						AccessoryWeld: Weld;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
				AnimSaves: Model & {
					Untitled: KeyframeSequence;
				};
				["Meshes/untitled_catAccessory"]: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						HatAttachment: Attachment;
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
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
				TorsoCover: Part;
				["Meshes/untitled_catAccessory"]: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						HatAttachment: Attachment;
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
				};
				["Right Leg Cover"]: Part;
				EyeCoveringBlackHair: Accessory & {
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
					Handle: Part & {
						HairAttachment: Attachment;
						AccessoryWeld: Weld;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
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
				Highlight: Highlight;
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
		};
	};
	FakeMaleAnimations: Model & {
		Camera: Part & {
			Decal: Decal;
		};
		["fake male test"]: Model & {
			["Left Leg"]: Part & {
				Snap: Snap;
				LeftFootAttachment: Attachment;
			};
			Humanoid: Humanoid & {
				HumanoidDescription: HumanoidDescription;
			};
			Highlight: Highlight;
			AnimSaves: Model & {
				IDLEDONTCRASH: KeyframeSequence;
				HURTDONTCRASH: KeyframeSequence;
				["IDLEDONTCRASH w/ Lam"]: KeyframeSequence;
				BrazenLight: KeyframeSequence;
				["BASICDONTCRASH w/lam"]: KeyframeSequence;
				BASICDONTCRASH: KeyframeSequence;
				Attack: KeyframeSequence;
			};
			Lantern: Model & {
				Handle: UnionOperation & {
					Mainframe: Motor6D;
				};
				Mainframe: UnionOperation & {
					Light: Weld;
				};
				Light: Part & {
					PointLight: PointLight;
				};
			};
			Face: Accessory & {
				ThumbnailConfiguration: Configuration & {
					ThumbnailCameraValue: CFrameValue;
					ThumbnailCameraTarget: ObjectValue;
				};
				Handle: Part & {
					OriginalSize: Vector3Value;
					AccessoryWeld: Weld;
					Highlight: Highlight;
					face: Decal;
					Mesh: SpecialMesh;
					FaceCenterAttachment: Attachment;
				};
			};
			Belt: Accessory & {
				ThumbnailConfiguration: Configuration & {
					ThumbnailCameraValue: CFrameValue;
					ThumbnailCameraTarget: ObjectValue;
				};
				Handle: Part & {
					WaistCenterAttachment: Attachment;
					OriginalSize: Vector3Value;
					AccessoryWeld: Weld;
					Highlight: Highlight;
					SpecialMesh: SpecialMesh;
					AvatarPartScaleType: StringValue;
				};
			};
			["Left Sleeve"]: Accessory & {
				ThumbnailConfiguration: Configuration & {
					ThumbnailCameraValue: CFrameValue;
					ThumbnailCameraTarget: ObjectValue;
				};
				Handle: Part & {
					OriginalSize: Vector3Value;
					LeftShoulderAttachment: Attachment;
					AccessoryWeld: Weld;
					Highlight: Highlight;
					SpecialMesh: SpecialMesh;
					AvatarPartScaleType: StringValue;
				};
			};
			Pants: Pants;
			Pendant: Accessory & {
				ThumbnailConfiguration: Configuration & {
					ThumbnailCameraValue: CFrameValue;
					ThumbnailCameraTarget: ObjectValue;
				};
				Handle: Part & {
					OriginalSize: Vector3Value;
					AccessoryWeld: Weld;
					NeckAttachment: Attachment;
					SpecialMesh: SpecialMesh;
					AvatarPartScaleType: StringValue;
				};
			};
			Head: Part & {
				HatAttachment: Attachment;
				FaceFrontAttachment: Attachment;
				HairAttachment: Attachment;
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
			Suit: Accessory & {
				ThumbnailConfiguration: Configuration & {
					ThumbnailCameraTarget: ObjectValue;
					ThumbnailCameraValue: CFrameValue;
				};
				Handle: Part & {
					OriginalSize: Vector3Value;
					AccessoryWeld: Weld;
					BodyBackAttachment: Attachment;
					Highlight: Highlight;
					SpecialMesh: SpecialMesh;
					AvatarPartScaleType: StringValue;
				};
			};
			HumanoidRootPart: Part & {
				RootJoint: Motor6D;
				RootAttachment: Attachment;
			};
			TopHat: Accessory & {
				ThumbnailConfiguration: Configuration & {
					ThumbnailCameraValue: CFrameValue;
					ThumbnailCameraTarget: ObjectValue;
				};
				Handle: Part & {
					HatAttachment: Attachment;
					OriginalSize: Vector3Value;
					AccessoryWeld: Weld;
					SpecialMesh: SpecialMesh;
					AvatarPartScaleType: StringValue;
				};
			};
			["Right Leg"]: Part & {
				Snap: Snap;
				RightFootAttachment: Attachment;
			};
			["Right Arm"]: Part & {
				Handle: Motor6D;
				RightGripAttachment: Attachment;
				RightShoulderAttachment: Attachment;
			};
			["Left Arm"]: Part & {
				LeftGripAttachment: Attachment;
				LeftShoulderAttachment: Attachment;
			};
			Clothing: Shirt;
			["Body Colors"]: BodyColors;
			["Right Sleeve"]: Accessory & {
				ThumbnailConfiguration: Configuration & {
					ThumbnailCameraValue: CFrameValue;
					ThumbnailCameraTarget: ObjectValue;
				};
				Handle: Part & {
					OriginalSize: Vector3Value;
					AccessoryWeld: Weld;
					Highlight: Highlight;
					SpecialMesh: SpecialMesh;
					RightShoulderAttachment: Attachment;
					AvatarPartScaleType: StringValue;
				};
			};
			Hair: Accessory & {
				ThumbnailConfiguration: Configuration & {
					ThumbnailCameraValue: CFrameValue;
					ThumbnailCameraTarget: ObjectValue;
				};
				Handle: Part & {
					OriginalSize: Vector3Value;
					HairAttachment: Attachment;
					AccessoryWeld: Weld;
					SpecialMesh: SpecialMesh;
					AvatarPartScaleType: StringValue;
				};
			};
		};
	};
	combatants: Folder;
	Union: UnionOperation;
	["A/Door"]: Model & {
		Model: Model;
	};
	["NA/Door"]: Model & {
		Model: Model;
	};
	fgw: Model & {
		["Paladin's Shield"]: UnionOperation;
		["Magic Dagger"]: UnionOperation;
		["🐠⚔"]: Model & {
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
			CrestCircle: Accessory & {
				ThumbnailConfiguration: Configuration & {
					ThumbnailCameraValue: CFrameValue;
					ThumbnailCameraTarget: ObjectValue;
				};
				Handle: Part & {
					OriginalSize: Vector3Value;
					FaceFrontAttachment: Attachment;
					AccessoryWeld: Weld;
					Mesh: SpecialMesh;
					AvatarPartScaleType: StringValue;
				};
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
			CharacterMesh: CharacterMesh;
			Pants: Pants;
			PauldronR: Accessory & {
				ThumbnailConfiguration: Configuration & {
					ThumbnailCameraValue: CFrameValue;
					ThumbnailCameraTarget: ObjectValue;
				};
				Handle: Part & {
					OriginalSize: Vector3Value;
					AccessoryWeld: Weld;
					RightShoulderAttachment: Attachment;
					SpecialMesh: SpecialMesh;
					AvatarPartScaleType: StringValue;
				};
			};
			Head: Part & {
				HatAttachment: Attachment;
				FaceFrontAttachment: Attachment;
				HairAttachment: Attachment;
				Mesh: SpecialMesh;
				FaceCenterAttachment: Attachment;
			};
			["Body Colors"]: BodyColors;
			Face: Accessory & {
				ThumbnailConfiguration: Configuration & {
					ThumbnailCameraValue: CFrameValue;
					ThumbnailCameraTarget: ObjectValue;
				};
				Handle: Part & {
					["Blush Lines"]: Decal;
					Scar: Decal;
					AccessoryWeld: Weld;
					Eyes: Decal;
					Eyebrows: Decal;
					Blush: Decal;
					OriginalSize: Vector3Value;
					Mouth: Decal;
					Mesh: SpecialMesh;
					FaceCenterAttachment: Attachment;
				};
			};
			Helmet: Accessory & {
				ThumbnailConfiguration: Configuration & {
					ThumbnailCameraValue: CFrameValue;
					ThumbnailCameraTarget: ObjectValue;
				};
				Handle: Part & {
					HatAttachment: Attachment;
					OriginalSize: Vector3Value;
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
			Crest: Accessory & {
				ThumbnailConfiguration: Configuration & {
					ThumbnailCameraValue: CFrameValue;
					ThumbnailCameraTarget: ObjectValue;
				};
				Handle: Part & {
					HatAttachment: Attachment;
					OriginalSize: Vector3Value;
					AccessoryWeld: Weld;
					SpecialMesh: SpecialMesh;
					AvatarPartScaleType: StringValue;
				};
			};
			PauldronL: Accessory & {
				ThumbnailConfiguration: Configuration & {
					ThumbnailCameraValue: CFrameValue;
					ThumbnailCameraTarget: ObjectValue;
				};
				Handle: Part & {
					OriginalSize: Vector3Value;
					LeftShoulderAttachment: Attachment;
					AccessoryWeld: Weld;
					SpecialMesh: SpecialMesh;
					AvatarPartScaleType: StringValue;
				};
			};
			Shirt: Shirt;
			Hair: Accessory & {
				ThumbnailConfiguration: Configuration & {
					ThumbnailCameraValue: CFrameValue;
					ThumbnailCameraTarget: ObjectValue;
				};
				Handle: Part & {
					OriginalSize: Vector3Value;
					HairAttachment: Attachment;
					AccessoryWeld: Weld;
					SpecialMesh: SpecialMesh;
					AvatarPartScaleType: StringValue;
				};
			};
		};
	};
	Neatwyy: Model & {
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
		["Body Colors"]: BodyColors;
		HumanoidRootPart: Part & {
			RootAttachment: Attachment;
		};
		["Grunge Boy Hair in White"]: Accessory & {
			Handle: Part & {
				OriginalSize: Vector3Value;
				HairAttachment: Attachment & {
					OriginalPosition: Vector3Value;
				};
				AccessoryWeld: Weld;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		Shirt: Shirt;
		["New SophisticatedAccessory"]: Accessory & {
			Handle: Part & {
				HatAttachment: Attachment & {
					OriginalPosition: Vector3Value;
				};
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		CuteBackpack: Accessory & {
			Handle: Part & {
				BodyBackAttachment: Attachment & {
					OriginalPosition: Vector3Value;
				};
				AccessoryWeld: Weld;
				OriginalSize: Vector3Value;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		["Pastel Blue Plaid ScarfAccessory"]: Accessory & {
			Handle: Part & {
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				NeckAttachment: Attachment & {
					OriginalPosition: Vector3Value;
				};
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
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
		["Accessory (MLM Pride Armband)"]: Accessory & {
			Handle: Part & {
				OriginalSize: Vector3Value;
				LeftShoulderAttachment: Attachment & {
					OriginalPosition: Vector3Value;
				};
				AccessoryWeld: Weld;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		["Accessory (Happy Light Blue Kemono Fox (Colored Eyes))"]: Accessory & {
			Handle: Part & {
				HatAttachment: Attachment & {
					OriginalPosition: Vector3Value;
				};
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		["Cute Pink Circle Glasses (Fits Kemono Heads)"]: Accessory & {
			Handle: Part & {
				OriginalSize: Vector3Value;
				FaceFrontAttachment: Attachment & {
					OriginalPosition: Vector3Value;
				};
				AccessoryWeld: Weld;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		["Left Arm"]: Part & {
			LeftGripAttachment: Attachment;
			LeftShoulderAttachment: Attachment;
		};
		["Right Arm"]: Part & {
			RightGripAttachment: Attachment;
			RightShoulderAttachment: Attachment;
		};
		["Fox Tail"]: Accessory & {
			Handle: Part & {
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				WaistBackAttachment: Attachment & {
					OriginalPosition: Vector3Value;
				};
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		Torso: Part & {
			RightCollarAttachment: Attachment;
			WaistCenterAttachment: Attachment;
			BodyBackAttachment: Attachment;
			LeftCollarAttachment: Attachment;
			roblox: Decal;
			WaistFrontAttachment: Attachment;
			BodyFrontAttachment: Attachment;
			WaistBackAttachment: Attachment;
			NeckAttachment: Attachment;
		};
		Pants: Pants;
	};
	battlegrounds: Folder & {
		baseplate: Model & {
			["1"]: Part & {
				Decal: Decal;
			};
			camera: Model & {
				AnimationController: AnimationController;
				camera: Part & {
					Decal: Decal;
				};
			};
			origin: Part & {
				Decal: Decal;
			};
			["0"]: Part & {
				Decal: Decal;
			};
			Starfish: Model & {
				Torso: MeshPart & {
					Eyes: Model;
					Mouth: Model;
				};
			};
			["hatsune miku but she has JEANS"]: Model & {
				["Legs With Shorts"]: Model & {
					MeshPart: MeshPart & {
						Weld: Weld;
					};
				};
			};
		};
	};
	["Town Hall im keeping this bald"]: Model;
	Cleric: Model & {
		["Left Leg"]: Part & {
			Highlight: Highlight;
			Snap: Snap;
			LeftFootAttachment: Attachment;
		};
		Humanoid: Humanoid & {
			HumanoidDescription: HumanoidDescription;
		};
		Highlight: Highlight;
		["Body Colors"]: BodyColors;
		Robe: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
			Handle: Part & {
				BodyBackAttachment: Attachment;
				AccessoryWeld: Weld;
				OriginalSize: Vector3Value;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		Shirt: Shirt;
		Pants: Pants;
		Pendant: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
			Handle: Part & {
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				NeckAttachment: Attachment;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		["Book (invisible unless animated in)"]: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
			Handle: Part & {
				WaistCenterAttachment: Attachment;
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				Highlight: Highlight;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		Hat: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
			Handle: Part & {
				HatAttachment: Attachment;
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				Highlight: Highlight;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		Head: Part & {
			HatAttachment: Attachment;
			FaceFrontAttachment: Attachment;
			HairAttachment: Attachment;
			Mesh: SpecialMesh;
			FaceCenterAttachment: Attachment;
		};
		Collar: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
			Handle: Part & {
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				Highlight: Highlight;
				NeckAttachment: Attachment;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		HumanoidRootPart: Part & {
			RootJoint: Motor6D;
			Highlight: Highlight;
			RootAttachment: Attachment;
		};
		["Right Leg"]: Part & {
			RightFootAttachment: Attachment;
			Snap: Snap;
			Highlight: Highlight;
		};
		Torso: Part & {
			RightCollarAttachment: Attachment;
			WaistCenterAttachment: Attachment;
			BodyBackAttachment: Attachment;
			Neck: Motor6D;
			LeftCollarAttachment: Attachment;
			Highlight: Highlight;
			["Left Shoulder"]: Motor6D;
			["Left Hip"]: Motor6D;
			["Right Hip"]: Motor6D;
			["Right Shoulder"]: Motor6D;
			BodyFrontAttachment: Attachment;
			WaistBackAttachment: Attachment;
			WaistFrontAttachment: Attachment;
			NeckAttachment: Attachment;
		};
		Face: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
			Handle: Part & {
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				Highlight: Highlight;
				face: Decal;
				Mesh: SpecialMesh;
				FaceCenterAttachment: Attachment;
			};
		};
		["Right Arm"]: Part & {
			Highlight: Highlight;
			RightGripAttachment: Attachment;
			RightShoulderAttachment: Attachment;
		};
		["Left Arm"]: Part & {
			LeftGripAttachment: Attachment;
			Highlight: Highlight;
			LeftShoulderAttachment: Attachment;
		};
		Hair: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
			Handle: Part & {
				OriginalSize: Vector3Value;
				HairAttachment: Attachment;
				AccessoryWeld: Weld;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		["Left Sleeve"]: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
			Handle: Part & {
				OriginalSize: Vector3Value;
				LeftShoulderAttachment: Attachment;
				AccessoryWeld: Weld;
				Highlight: Highlight;
				Mesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		["Right Sleeve"]: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
			Handle: Part & {
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				Highlight: Highlight;
				Mesh: SpecialMesh;
				RightShoulderAttachment: Attachment;
				AvatarPartScaleType: StringValue;
			};
		};
		["Blocky Girl Torso"]: CharacterMesh;
	};
	["Map Change Point Test 2"]: Part;
	SpawnLocation: SpawnLocation & {
		Decal: Decal;
	};
	["Map Change Point  Test 1"]: Part;
	["female protag"]: Model & {
		["Left Leg"]: Part & {
			Snap: Snap;
			LeftFootAttachment: Attachment;
		};
		Humanoid: Humanoid & {
			HumanoidDescription: HumanoidDescription;
		};
		Highlight: Highlight;
		Clothing: Pants;
		Face: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
			Handle: Part & {
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				Face: Decal;
				Mesh: SpecialMesh;
				FaceCenterAttachment: Attachment;
			};
		};
		HumanoidRootPart: Part & {
			RootJoint: Motor6D;
			RootAttachment: Attachment;
		};
		Scarf: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
			Handle: Part & {
				BodyBackAttachment: Attachment;
				AccessoryWeld: Weld;
				Highlight: Highlight;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		Shirt: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
			Handle: Part & {
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				BodyFrontAttachment: Attachment;
				Highlight: Highlight;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		Jacket: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
			Handle: Part & {
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				BodyFrontAttachment: Attachment;
				Highlight: Highlight;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		Hat: Accessory & {
			Handle: Part & {
				HatAttachment: Attachment;
				Highlight: Highlight;
				AccessoryWeld: Weld;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		Head: Part & {
			HatAttachment: Attachment;
			FaceFrontAttachment: Attachment;
			HairAttachment: Attachment;
			Mesh: SpecialMesh;
			FaceCenterAttachment: Attachment;
		};
		["Pearl Necklace"]: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
			Handle: Part & {
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				Highlight: Highlight;
				NeckAttachment: Attachment;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		["Right Leg"]: Part & {
			Snap: Snap;
			RightFootAttachment: Attachment;
		};
		["Blocky Girl Torso"]: CharacterMesh;
		["Right Arm"]: Part & {
			RightShoulderAttachment: Attachment;
			RightGripAttachment: Attachment;
		};
		["Left Arm"]: Part & {
			LeftGripAttachment: Attachment;
			LeftShoulderAttachment: Attachment;
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
		["Left Sleeve"]: Accessory & {
			Handle: Part & {
				OriginalSize: Vector3Value;
				LeftShoulderAttachment: Attachment;
				AccessoryWeld: Weld;
				Highlight: Highlight;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		["Right Sleeve"]: Accessory & {
			Handle: Part & {
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				Highlight: Highlight;
				RightShoulderAttachment: Attachment;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		Hair: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
			Handle: Part & {
				Highlight: Highlight;
				HairAttachment: Attachment;
				AccessoryWeld: Weld;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
	};
	Camera: Camera;
	["fake male test1"]: Model & {
		["Left Leg"]: Part & {
			Snap: Snap;
			LeftFootAttachment: Attachment;
		};
		Humanoid: Humanoid & {
			HumanoidDescription: HumanoidDescription;
		};
		Highlight: Highlight;
		AnimSaves: Model & {
			IDLEDONTCRASH: KeyframeSequence;
			HURTDONTCRASH: KeyframeSequence;
			["IDLEDONTCRASH w/ Lam"]: KeyframeSequence;
			["BASICDONTCRASH w/lam"]: KeyframeSequence;
			BASICDONTCRASH: KeyframeSequence;
			Attack: KeyframeSequence;
		};
		Lantern: Model & {
			Handle: UnionOperation & {
				Mainframe: Motor6D;
			};
			Mainframe: UnionOperation & {
				Light: Weld;
			};
			Light: Part & {
				PointLight: PointLight;
			};
		};
		Face: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
			Handle: Part & {
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				Highlight: Highlight;
				face: Decal;
				Mesh: SpecialMesh;
				FaceCenterAttachment: Attachment;
			};
		};
		Belt: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
			Handle: Part & {
				WaistCenterAttachment: Attachment;
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				Highlight: Highlight;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		["Left Sleeve"]: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
			Handle: Part & {
				OriginalSize: Vector3Value;
				LeftShoulderAttachment: Attachment;
				AccessoryWeld: Weld;
				Highlight: Highlight;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		Pants: Pants;
		Pendant: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
			Handle: Part & {
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				NeckAttachment: Attachment;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		Head: Part & {
			HatAttachment: Attachment;
			FaceFrontAttachment: Attachment;
			HairAttachment: Attachment;
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
		Suit: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraTarget: ObjectValue;
				ThumbnailCameraValue: CFrameValue;
			};
			Handle: Part & {
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				BodyBackAttachment: Attachment;
				Highlight: Highlight;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		HumanoidRootPart: Part & {
			RootJoint: Motor6D;
			RootAttachment: Attachment;
		};
		TopHat: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
			Handle: Part & {
				HatAttachment: Attachment;
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		["Right Leg"]: Part & {
			Snap: Snap;
			RightFootAttachment: Attachment;
		};
		["Right Arm"]: Part & {
			Handle: Motor6D;
			RightGripAttachment: Attachment;
			RightShoulderAttachment: Attachment;
		};
		["Left Arm"]: Part & {
			LeftGripAttachment: Attachment;
			LeftShoulderAttachment: Attachment;
		};
		Clothing: Shirt;
		["Body Colors"]: BodyColors;
		["Right Sleeve"]: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
			Handle: Part & {
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				Highlight: Highlight;
				SpecialMesh: SpecialMesh;
				RightShoulderAttachment: Attachment;
				AvatarPartScaleType: StringValue;
			};
		};
		Hair: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
			Handle: Part & {
				OriginalSize: Vector3Value;
				HairAttachment: Attachment;
				AccessoryWeld: Weld;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
	};
	fx: Folder;
	MaleMC: Model & {
		["Left Leg"]: Part & {
			Snap: Snap;
			LeftFootAttachment: Attachment;
		};
		anims: Folder & {
			hurt: Animation;
			idle: Animation;
			basic: Animation;
		};
		Highlight: Highlight;
		Clothing: Shirt;
		Face: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
			Handle: Part & {
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				Highlight: Highlight;
				face: Decal;
				Mesh: SpecialMesh;
				FaceCenterAttachment: Attachment;
			};
		};
		Belt: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
			Handle: Part & {
				WaistCenterAttachment: Attachment;
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				Highlight: Highlight;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		["Left Sleeve"]: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
			Handle: Part & {
				OriginalSize: Vector3Value;
				LeftShoulderAttachment: Attachment;
				AccessoryWeld: Weld;
				Highlight: Highlight;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		Pants: Pants;
		Pendant: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
			Handle: Part & {
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				NeckAttachment: Attachment;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		Head: Part & {
			HatAttachment: Attachment;
			FaceFrontAttachment: Attachment;
			HairAttachment: Attachment;
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
		Suit: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraTarget: ObjectValue;
				ThumbnailCameraValue: CFrameValue;
			};
			Handle: Part & {
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				BodyBackAttachment: Attachment;
				Highlight: Highlight;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		Humanoid: Humanoid & {
			HumanoidDescription: HumanoidDescription;
			Animator: Animator;
		};
		TopHat: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
			Handle: Part & {
				HatAttachment: Attachment;
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
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
		HumanoidRootPart: Part & {
			RootJoint: Motor6D;
			RootAttachment: Attachment;
		};
		["Body Colors"]: BodyColors;
		["Right Sleeve"]: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
			Handle: Part & {
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				Highlight: Highlight;
				SpecialMesh: SpecialMesh;
				RightShoulderAttachment: Attachment;
				AvatarPartScaleType: StringValue;
			};
		};
		Hair: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
			Handle: Part & {
				OriginalSize: Vector3Value;
				HairAttachment: Attachment;
				AccessoryWeld: Weld;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
	};
	BackupModels: Folder;
	["Barista NPC"]: Model & {
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
		["Body Colors"]: BodyColors;
		HumanoidRootPart: Part & {
			RootJoint: Motor6D;
			RootAttachment: Attachment;
		};
		Tie: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
			Handle: Part & {
				OriginalSize: Vector3Value;
				BodyFrontAttachment: Attachment;
				AccessoryWeld: Weld;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		Shirt: Shirt;
		Pants: Pants;
		Head: Part & {
			HatAttachment: Attachment;
			FaceFrontAttachment: Attachment;
			HairAttachment: Attachment;
			Mesh: SpecialMesh;
			FaceCenterAttachment: Attachment;
		};
		Collar: Accessory & {
			Handle: Part & {
				AccessoryWeld: Weld;
				OriginalSize: Vector3Value;
				Mesh: SpecialMesh;
				NeckAttachment: Attachment;
			};
		};
		Apron: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
			Handle: Part & {
				BodyBackAttachment: Attachment;
				AccessoryWeld: Weld;
				OriginalSize: Vector3Value;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
		["Straw Hat"]: Accessory & {
			Handle: Part & {
				AccessoryWeld: Weld;
				HatAttachment: Attachment;
				Mesh: SpecialMesh;
				OriginalSize: Vector3Value;
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
		Face: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
			Handle: Part & {
				Eyebrows: Decal;
				OriginalSize: Vector3Value;
				AccessoryWeld: Weld;
				Eyes: Decal;
				Blush: Decal;
				["Blush Lines"]: Decal;
				Mouth: Decal;
				Mesh: SpecialMesh;
				FaceCenterAttachment: Attachment;
			};
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
		CharacterMesh: CharacterMesh;
		Hair: Accessory & {
			ThumbnailConfiguration: Configuration & {
				ThumbnailCameraValue: CFrameValue;
				ThumbnailCameraTarget: ObjectValue;
			};
			Handle: Part & {
				OriginalSize: Vector3Value;
				HairAttachment: Attachment;
				AccessoryWeld: Weld;
				SpecialMesh: SpecialMesh;
				AvatarPartScaleType: StringValue;
			};
		};
	};
	Myrkr_Skirmisher: Model & {
		LeftFinger4: Part & {
			Mesh: SpecialMesh;
		};
		Humanoid: Humanoid;
		RightFinger1: Part & {
			Mesh: SpecialMesh;
		};
		AnimSaves: Model & {
			Idle_Skyrmr: KeyframeSequence;
		};
		Neck: Part & {
			Mesh: SpecialMesh;
			Head: Motor6D;
		};
		HumanoidRootPart: UnionOperation & {
			LowerTorso: Motor6D;
		};
		LeftFinger1: Part & {
			Mesh: SpecialMesh;
		};
		LeftFinger3: Part & {
			Mesh: SpecialMesh;
		};
		RightShoulder: Part & {
			Mesh: SpecialMesh;
			RightBicep: Motor6D;
		};
		MidSection: Part & {
			Mesh: SpecialMesh;
			UpperTorso: Motor6D;
		};
		RightLowerLeg: UnionOperation & {
			RightFoot: Motor6D;
		};
		LeftUpperLeg: UnionOperation & {
			LeftLowerLeg: Motor6D;
		};
		LeftLowerLeg: UnionOperation & {
			LeftFoot: Motor6D;
		};
		RightBicep: Part & {
			Mesh: SpecialMesh;
			RightForeArm: Motor6D;
		};
		LeftForeArm: Part & {
			LeftFinger4: Motor6D;
			LeftFinger3: Motor6D;
			LeftFinger1: Motor6D;
			RightFinger2: Motor6D;
			Mesh: SpecialMesh;
		};
		LowerTorso: UnionOperation & {
			MidSection: Motor6D;
			LeftUpperLeg: Motor6D;
			RightUpperLeg: Motor6D;
		};
		Head: UnionOperation;
		LeftFoot: UnionOperation;
		UpperTorso: UnionOperation & {
			Neck: Motor6D;
			LeftShoulder: Motor6D;
			RightShoulder: Motor6D;
		};
		RightFoot: UnionOperation;
		Eyes: Model & {
			Left: Model;
			Right: Model;
		};
		LeftBicep: Part & {
			Mesh: SpecialMesh;
			LeftForeArm: Motor6D;
		};
		LeftShoulder: Part & {
			Mesh: SpecialMesh;
			LeftBicep: Motor6D;
		};
		RightUpperLeg: UnionOperation & {
			RightLowerLeg: Motor6D;
		};
		RightForeArm: Part & {
			RightFinger1: Motor6D;
			RightFinger2: Motor6D;
			RightFinger3: Motor6D;
			Mesh: SpecialMesh;
			RightFinger4: Motor6D;
		};
		Highlight: Highlight;
		RightFinger3: Part & {
			Mesh: SpecialMesh;
		};
		RightFinger4: Part & {
			Mesh: SpecialMesh;
		};
	};
}
