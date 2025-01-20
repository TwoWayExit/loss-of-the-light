interface Workspace extends Model {
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
			Helmet: Accessory & {
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
			["Body Colors"]: BodyColors;
			HumanoidRootPart: Part & {
				RootJoint: Motor6D;
				RootAttachment: Attachment;
			};
			CharacterMesh: CharacterMesh;
			Pants: Pants;
			PauldronR: Accessory & {
				Handle: Part & {
					OriginalSize: Vector3Value;
					AccessoryWeld: Weld;
					RightShoulderAttachment: Attachment;
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
				FaceFrontAttachment: Attachment;
				HairAttachment: Attachment;
				Mesh: SpecialMesh;
				FaceCenterAttachment: Attachment;
			};
			Crest: Accessory & {
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
			CrestCircle: Accessory & {
				Handle: Part & {
					OriginalSize: Vector3Value;
					FaceFrontAttachment: Attachment;
					AccessoryWeld: Weld;
					Mesh: SpecialMesh;
					AvatarPartScaleType: StringValue;
				};
				ThumbnailConfiguration: Configuration & {
					ThumbnailCameraValue: CFrameValue;
					ThumbnailCameraTarget: ObjectValue;
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
			["Right Arm"]: Part & {
				RightShoulderAttachment: Attachment;
				RightGripAttachment: Attachment;
			};
			["Left Arm"]: Part & {
				LeftGripAttachment: Attachment;
				LeftShoulderAttachment: Attachment;
			};
			Face: Accessory & {
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
				ThumbnailConfiguration: Configuration & {
					ThumbnailCameraValue: CFrameValue;
					ThumbnailCameraTarget: ObjectValue;
				};
			};
			PauldronL: Accessory & {
				Handle: Part & {
					OriginalSize: Vector3Value;
					LeftShoulderAttachment: Attachment;
					AccessoryWeld: Weld;
					SpecialMesh: SpecialMesh;
					AvatarPartScaleType: StringValue;
				};
				ThumbnailConfiguration: Configuration & {
					ThumbnailCameraValue: CFrameValue;
					ThumbnailCameraTarget: ObjectValue;
				};
			};
			Shirt: Shirt;
			Hair: Accessory & {
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
		};
	};
	BackupModels: Folder;
	battlegrounds: Folder & {
		baseplate: Model & {
			Starfish: Model & {
				Torso: MeshPart & {
					Eyes: Model;
					Mouth: Model;
				};
			};
			camera: Model & {
				AnimationController: AnimationController;
				camera: Part & {
					Decal: Decal;
				};
			};
			Team2: Part & {
				Decal: Decal;
			};
			origin: Part & {
				Decal: Decal;
			};
			Team1: Part & {
				Decal: Decal;
			};
			["hatsune miku but she has JEANS"]: Model & {
				["Legs With Shorts"]: Model;
			};
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
	sp1kecactus: Model & {
		["Left Leg"]: Part & {
			LeftFootAttachment: Attachment;
		};
		Humanoid: Humanoid & {
			Animator: Animator;
			HumanoidDescription: HumanoidDescription;
			Status: Status;
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
		["Left Arm"]: Part & {
			LeftGripAttachment: Attachment;
			LeftShoulderAttachment: Attachment;
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
	};
	regions: Folder & {
		baseplate: Folder & {
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
			["fake male backup3"]: Model & {
				["Left Leg"]: Part & {
					Snap: Snap;
					LeftFootAttachment: Attachment;
				};
				Humanoid: Humanoid & {
					HumanoidDescription: HumanoidDescription;
				};
				Highlight: Highlight;
				Clothing: Shirt;
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
				["Left Sleeve"]: Accessory & {
					Handle: Part & {
						OriginalSize: Vector3Value;
						LeftShoulderAttachment: Attachment;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
				};
				Pants: Pants;
				Pendant: Accessory & {
					Handle: Part & {
						OriginalSize: Vector3Value;
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
				Head: Part & {
					HatAttachment: Attachment;
					FaceFrontAttachment: Attachment;
					HairAttachment: Attachment;
					Mesh: SpecialMesh;
					FaceCenterAttachment: Attachment;
				};
				AnimSaves: Model & {
					IDLEDONTCRASH: KeyframeSequence;
					BASICDONTCRASH: KeyframeSequence;
					HURTDONTCRASH: KeyframeSequence;
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
				Face: Accessory & {
					Handle: Part & {
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						face: Decal;
						Mesh: SpecialMesh;
						FaceCenterAttachment: Attachment;
					};
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
				};
				TopHat: Accessory & {
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
				Belt: Accessory & {
					Handle: Part & {
						WaistCenterAttachment: Attachment;
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
				};
				["Body Colors"]: BodyColors;
				["Right Sleeve"]: Accessory & {
					Handle: Part & {
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						RightShoulderAttachment: Attachment;
						AvatarPartScaleType: StringValue;
					};
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
				};
				Hair: Accessory & {
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
				["Right Leg"]: Part & {
					Snap: Snap;
					RightFootAttachment: Attachment;
				};
				AnimSaves: Model & {
					Untitled: KeyframeSequence;
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
				EyeCoveringBlackHair: Accessory & {
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
				Head: Part & {
					HatAttachment: Attachment;
					HairAttachment: Attachment;
					angryface: Decal;
					FaceFrontAttachment: Attachment;
					face: Decal;
					Mesh: SpecialMesh;
					FaceCenterAttachment: Attachment;
				};
				Highlight: Highlight;
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
			["Freddy Fazbear"]: Model & {
				["endo chica yay"]: MeshPart & {
					["Meshes/Left Lower Arm"]: Motor6D & {
						DefaultC1: CFrameValue;
					};
				};
				Humanoid: Humanoid & {
					Animator: Animator;
				};
				["Meshes/Right Shin"]: MeshPart & {
					["Meshes/Left Foot"]: Motor6D & {
						DefaultC1: CFrameValue;
					};
				};
				HumanoidRootPart: Part & {
					["Meshes/Freddy Endo Torso"]: Motor6D;
				};
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
				Model: Model & {
					["mic dark"]: MeshPart & {
						["mic 1"]: Weld;
						["mic 2"]: Weld;
					};
					["mic 1"]: MeshPart;
					["mic 2"]: MeshPart;
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
				["Meshes/Left Hand"]: MeshPart;
				["Meshes/Eyelid Lower1"]: MeshPart;
				["Meshes/Root Pelvis"]: MeshPart & {
					["Meshes/Left Shin"]: Motor6D & {
						DefaultC1: CFrameValue;
					};
					["Meshes/Right Thigh"]: Motor6D & {
						DefaultC1: CFrameValue;
					};
				};
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
				["Meshes/Right Upper Arm"]: MeshPart & {
					["Meshes/Right Lower Arm"]: Motor6D & {
						DefaultC1: CFrameValue;
					};
				};
				["Meshes/Left Thigh"]: MeshPart & {
					["Meshes/Right Foot"]: Motor6D & {
						DefaultC1: CFrameValue;
					};
				};
				RightEye: MeshPart;
				["Meshes/Eyelid Upper1"]: MeshPart;
				["Meshes/Jaw"]: MeshPart;
				["Meshes/Left Foot"]: MeshPart;
				["Meshes/Eyelid Upper"]: MeshPart;
				["Meshes/Right Foot"]: MeshPart;
				["Meshes/Right Hand"]: MeshPart;
			};
			["real male"]: Model & {
				["Left Leg"]: Part & {
					Snap: Snap;
					LeftFootAttachment: Attachment;
				};
				Humanoid: Humanoid & {
					HumanoidDescription: HumanoidDescription;
				};
				Highlight: Highlight;
				Clothing: Shirt;
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
				["Left Sleeve"]: Accessory & {
					Handle: Part & {
						OriginalSize: Vector3Value;
						LeftShoulderAttachment: Attachment;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
				};
				Pants: Pants;
				Pendant: Accessory & {
					Handle: Part & {
						OriginalSize: Vector3Value;
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
				Face: Accessory & {
					Handle: Part & {
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						face: Decal;
						Mesh: SpecialMesh;
						FaceCenterAttachment: Attachment;
					};
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
				};
				TopHat: Accessory & {
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
				Belt: Accessory & {
					Handle: Part & {
						WaistCenterAttachment: Attachment;
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
				};
				["Body Colors"]: BodyColors;
				["Right Sleeve"]: Accessory & {
					Handle: Part & {
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						RightShoulderAttachment: Attachment;
						AvatarPartScaleType: StringValue;
					};
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
				};
				Hair: Accessory & {
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
			};
			["male protag"]: Model & {
				["Left Leg"]: Part & {
					Snap: Snap;
					LeftFootAttachment: Attachment;
				};
				Humanoid: Humanoid & {
					HumanoidDescription: HumanoidDescription;
				};
				Highlight: Highlight;
				Clothing: Shirt;
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
				["Left Sleeve"]: Accessory & {
					Handle: Part & {
						OriginalSize: Vector3Value;
						LeftShoulderAttachment: Attachment;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
				};
				Pants: Pants;
				Pendant: Accessory & {
					Handle: Part & {
						OriginalSize: Vector3Value;
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
				Face: Accessory & {
					Handle: Part & {
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						face: Decal;
						Mesh: SpecialMesh;
						FaceCenterAttachment: Attachment;
					};
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
				};
				TopHat: Accessory & {
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
				Belt: Accessory & {
					Handle: Part & {
						WaistCenterAttachment: Attachment;
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
				};
				["Body Colors"]: BodyColors;
				["Right Sleeve"]: Accessory & {
					Handle: Part & {
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						RightShoulderAttachment: Attachment;
						AvatarPartScaleType: StringValue;
					};
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
				};
				Hair: Accessory & {
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
			};
			["MC RIG"]: Model & {
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
				AnimSaves: Model & {
					Idle: KeyframeSequence;
					Untitled: KeyframeSequence;
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
			["female protag test"]: Model & {
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
			Clock: MeshPart;
			["male protag23213213"]: Model & {
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
			["Myrkr Emitter"]: Part & {
				ParticleEmitter: ParticleEmitter;
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
			["fake male backup2"]: Model & {
				["Left Leg"]: Part & {
					Snap: Snap;
					LeftFootAttachment: Attachment;
				};
				Humanoid: Humanoid & {
					HumanoidDescription: HumanoidDescription;
				};
				Highlight: Highlight;
				Clothing: Shirt;
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
				["Left Sleeve"]: Accessory & {
					Handle: Part & {
						OriginalSize: Vector3Value;
						LeftShoulderAttachment: Attachment;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
				};
				Pants: Pants;
				Pendant: Accessory & {
					Handle: Part & {
						OriginalSize: Vector3Value;
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
				Head: Part & {
					HatAttachment: Attachment;
					FaceFrontAttachment: Attachment;
					HairAttachment: Attachment;
					Mesh: SpecialMesh;
					FaceCenterAttachment: Attachment;
				};
				AnimSaves: Model & {
					IDLEDONTCRASH: KeyframeSequence;
					BASICDONTCRASH: KeyframeSequence;
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
				Face: Accessory & {
					Handle: Part & {
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						face: Decal;
						Mesh: SpecialMesh;
						FaceCenterAttachment: Attachment;
					};
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
				};
				TopHat: Accessory & {
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
				Belt: Accessory & {
					Handle: Part & {
						WaistCenterAttachment: Attachment;
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
				};
				["Body Colors"]: BodyColors;
				["Right Sleeve"]: Accessory & {
					Handle: Part & {
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						RightShoulderAttachment: Attachment;
						AvatarPartScaleType: StringValue;
					};
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
				};
				Hair: Accessory & {
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
			};
			Cabinet: Model;
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
			Handle: Part & {
				Trail: Trail;
				Mesh: SpecialMesh;
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
				Clothing: Shirt;
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
				["Left Sleeve"]: Accessory & {
					Handle: Part & {
						OriginalSize: Vector3Value;
						LeftShoulderAttachment: Attachment;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
				};
				Pants: Pants;
				Pendant: Accessory & {
					Handle: Part & {
						OriginalSize: Vector3Value;
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
				Head: Part & {
					HatAttachment: Attachment;
					FaceFrontAttachment: Attachment;
					HairAttachment: Attachment;
					Mesh: SpecialMesh;
					FaceCenterAttachment: Attachment;
				};
				AnimSaves: Model & {
					IDLEDONTCRASH: KeyframeSequence;
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
				Face: Accessory & {
					Handle: Part & {
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						face: Decal;
						Mesh: SpecialMesh;
						FaceCenterAttachment: Attachment;
					};
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
				};
				TopHat: Accessory & {
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
				Belt: Accessory & {
					Handle: Part & {
						WaistCenterAttachment: Attachment;
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
				};
				["Body Colors"]: BodyColors;
				["Right Sleeve"]: Accessory & {
					Handle: Part & {
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						RightShoulderAttachment: Attachment;
						AvatarPartScaleType: StringValue;
					};
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
				};
				Hair: Accessory & {
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
			SpawnLocation: SpawnLocation & {
				Decal: Decal;
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
				Clothing: Shirt;
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
				["Left Sleeve"]: Accessory & {
					Handle: Part & {
						OriginalSize: Vector3Value;
						LeftShoulderAttachment: Attachment;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
				};
				Pants: Pants;
				Pendant: Accessory & {
					Handle: Part & {
						OriginalSize: Vector3Value;
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
				Head: Part & {
					HatAttachment: Attachment;
					FaceFrontAttachment: Attachment;
					HairAttachment: Attachment;
					Mesh: SpecialMesh;
					FaceCenterAttachment: Attachment;
				};
				AnimSaves: Model & {
					IDLEDONTCRASH: KeyframeSequence;
					BASICDONTCRASH: KeyframeSequence;
					HURTDONTCRASH: KeyframeSequence;
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
				Face: Accessory & {
					Handle: Part & {
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						face: Decal;
						Mesh: SpecialMesh;
						FaceCenterAttachment: Attachment;
					};
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
				};
				TopHat: Accessory & {
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
				Belt: Accessory & {
					Handle: Part & {
						WaistCenterAttachment: Attachment;
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						AvatarPartScaleType: StringValue;
					};
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
				};
				["Body Colors"]: BodyColors;
				["Right Sleeve"]: Accessory & {
					Handle: Part & {
						OriginalSize: Vector3Value;
						AccessoryWeld: Weld;
						Highlight: Highlight;
						SpecialMesh: SpecialMesh;
						RightShoulderAttachment: Attachment;
						AvatarPartScaleType: StringValue;
					};
					ThumbnailConfiguration: Configuration & {
						ThumbnailCameraValue: CFrameValue;
						ThumbnailCameraTarget: ObjectValue;
					};
				};
				Hair: Accessory & {
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
			["Beast_Bestia rig"]: Model & {
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
				AnimSaves: Model & {
					Untitled: KeyframeSequence;
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
				EyeCoveringBlackHair: Accessory & {
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
				Head: Part & {
					HatAttachment: Attachment;
					HairAttachment: Attachment;
					angryface: Decal;
					FaceFrontAttachment: Attachment;
					face: Decal;
					Mesh: SpecialMesh;
					FaceCenterAttachment: Attachment;
				};
				Highlight: Highlight;
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
		};
	};
	Camera: Camera;
	combatants: Folder;
	fx: Folder;
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
}
