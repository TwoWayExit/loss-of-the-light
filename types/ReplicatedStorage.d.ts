interface ReplicatedStorage extends Instance {
	TS: Folder & {
		utils: Folder & {
			uuid: ModuleScript;
			network: ModuleScript;
			dialogue: ModuleScript;
			["lifecycle-hooks"]: ModuleScript;
			level: ModuleScript;
			path: ModuleScript;
			trace: ModuleScript;
			skills: ModuleScript;
			essentials: ModuleScript;
		};
		network: Folder & {
			middleware: ModuleScript;
			global: ModuleScript;
		};
		models: Folder & {
			character: ModuleScript;
			["player-networked"]: ModuleScript;
			["player-collidable"]: ModuleScript;
			lotl_client: ModuleScript;
			battle: ModuleScript;
			player: ModuleScript;
			player: ModuleScript;
		};
		config: ModuleScript;
		settings: Folder & {
			fov_current: ModuleScript;
			mv_sidespeed: ModuleScript;
			mv_forwardspeed: ModuleScript;
		};
		replicas: ModuleScript;
		modules: Folder & {
			levels: ModuleScript;
			["user-command"]: ModuleScript;
			["stats-defs"]: ModuleScript;
			skills: Folder & {
				["basic-skill"]: ModuleScript;
			};
			skillsets: Folder & {
				["malemc-skillset"]: ModuleScript;
				["daryl-skillset"]: ModuleScript;
			};
			["view-vectors"]: ModuleScript;
		};
		components: Folder & {
			["player-animate"]: ModuleScript;
			["uuid-component"]: ModuleScript;
			["disposable-component"]: ModuleScript;
			lotl_movement: ModuleScript;
			enemy: ModuleScript;
		};
		slices: ModuleScript & {
			players: ModuleScript;
			battles: ModuleScript;
		};
	};
	combatants: Folder & {
		MaleMC: Model & {
			["Left Leg"]: Part & {
				Snap: Snap;
				LeftFootAttachment: Attachment;
			};
			Humanoid: Humanoid & {
				HumanoidDescription: HumanoidDescription;
				Animator: Animator;
			};
			Highlight: Highlight;
			Clothing: Shirt;
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
					TouchInterest: TouchTransmitter;
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
					TouchInterest: TouchTransmitter;
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
			anims: Folder & {
				hurt: Animation;
				idle: Animation;
				basic: Animation;
			};
			AnimSaves: Model & {
				IDLEDONTCRASH: KeyframeSequence;
				HURTDONTCRASH: KeyframeSequence;
				["IDLEDONTCRASH w/ Lam"]: KeyframeSequence;
				BASICDONTCRASH: KeyframeSequence;
				["BASICDONTCRASH w/lam"]: KeyframeSequence;
			};
			Suit: Accessory & {
				ThumbnailConfiguration: Configuration & {
					ThumbnailCameraTarget: ObjectValue;
					ThumbnailCameraValue: CFrameValue;
				};
				Handle: Part & {
					OriginalSize: Vector3Value;
					TouchInterest: TouchTransmitter;
					BodyBackAttachment: Attachment;
					Highlight: Highlight;
					SpecialMesh: SpecialMesh;
					AvatarPartScaleType: StringValue;
				};
			};
			Face: Accessory & {
				Handle: Part & {
					OriginalSize: Vector3Value;
					TouchInterest: TouchTransmitter;
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
					TouchInterest: TouchTransmitter;
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
				Handle: Motor6D;
				RightGripAttachment: Attachment;
				RightShoulderAttachment: Attachment;
			};
			["Left Arm"]: Part & {
				LeftGripAttachment: Attachment;
				LeftShoulderAttachment: Attachment;
			};
			Belt: Accessory & {
				Handle: Part & {
					WaistCenterAttachment: Attachment;
					OriginalSize: Vector3Value;
					TouchInterest: TouchTransmitter;
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
					TouchInterest: TouchTransmitter;
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
					TouchInterest: TouchTransmitter;
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
			anims: Folder & {
				hurt: Animation;
				idle: Animation;
				basic: Animation;
			};
			["Body Colors"]: BodyColors;
			MessyHairstyleAccessory: Accessory & {
				Handle: Part & {
					TouchInterest: TouchTransmitter;
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
					TouchInterest: TouchTransmitter;
					AccessoryWeld: Weld;
					LeftCollarAttachment: Attachment;
					SpecialMesh: SpecialMesh;
					AvatarPartScaleType: StringValue;
				};
			};
			Fedora: Accessory & {
				Handle: Part & {
					HatAttachment: Attachment;
					TouchInterest: TouchTransmitter;
					AccessoryWeld: Weld;
					SpecialMesh: SpecialMesh;
					AvatarPartScaleType: StringValue;
				};
			};
			Shirt: Shirt;
		};
	};
	rbxts_include: Folder & {
		RuntimeLib: ModuleScript;
		Promise: ModuleScript;
		node_modules: Folder & {
			["@flamework"]: Folder & {
				core: Folder & {
					out: ModuleScript & {
						flamework: ModuleScript;
						utility: ModuleScript;
						reflect: ModuleScript;
						modding: ModuleScript;
						metadata: ModuleScript;
					};
				};
				components: Folder & {
					node_modules: Folder & {
						["@rbxts"]: Folder & {
							t: Folder & {
								lib: Folder & {
									ts: ModuleScript;
								};
							};
						};
					};
					out: ModuleScript & {
						components: ModuleScript;
						baseComponent: ModuleScript;
						componentTracker: ModuleScript;
						utility: ModuleScript;
					};
				};
				networking: Folder & {
					out: ModuleScript & {
						["function"]: Folder & {
							createFunctionSender: ModuleScript;
							createFunctionReceiver: ModuleScript;
							errors: ModuleScript;
						};
						events: Folder & {
							createServerMethod: ModuleScript;
							createNetworkingEvent: ModuleScript;
							createGenericHandler: ModuleScript;
							createClientMethod: ModuleScript;
						};
						functions: Folder & {
							createServerMethod: ModuleScript;
							createNetworkingFunction: ModuleScript;
							createGenericHandler: ModuleScript;
							createClientMethod: ModuleScript;
						};
						util: Folder & {
							createSignalContainer: ModuleScript;
							getNamespaceConfig: ModuleScript;
							timeoutPromise: ModuleScript;
						};
						event: Folder & {
							createEvent: ModuleScript;
							createRemoteInstance: ModuleScript;
						};
						middleware: Folder & {
							createMiddlewareProcessor: ModuleScript;
							createGuardMiddleware: ModuleScript;
							skip: ModuleScript;
						};
					};
				};
			};
			["@twowayexit"]: Folder & {
				["dev-con"]: Folder & {
					out: ModuleScript & {
						modules: Folder & {
							["settings-list"]: ModuleScript;
							internal: ModuleScript;
							signals: ModuleScript;
							["commands-list"]: ModuleScript;
						};
						commands: Folder & {
							con_clear: ModuleScript;
							donut_spin: ModuleScript;
							bind: ModuleScript;
							unbindall: ModuleScript;
							con_close: ModuleScript;
							unbind: ModuleScript;
							help: ModuleScript;
							echo: ModuleScript;
						};
						settings: Folder & {
							ui_core_playerlist: ModuleScript;
							ui_core_backpack: ModuleScript;
							ui_core_chat: ModuleScript;
							ui_core_health: ModuleScript;
							con_allowspam: ModuleScript;
							ui_core_all: ModuleScript;
							fov_current: ModuleScript;
							sv_password: ModuleScript;
						};
						utils: Folder & {
							["input-profiler"]: ModuleScript;
							commands: ModuleScript;
							settings: ModuleScript;
							binds: ModuleScript;
							extensions: ModuleScript;
							essentials: ModuleScript;
						};
						app: Folder & {
							contexts: Folder & {
								["error-text"]: ModuleScript;
								theme: ModuleScript;
							};
							["stats-producer"]: ModuleScript;
							slices: Folder & {
								console: ModuleScript;
								["inactive-texts"]: ModuleScript;
								["selected-result"]: ModuleScript;
								["console-bar"]: ModuleScript;
								history: ModuleScript;
								warning: ModuleScript;
								stats: ModuleScript;
								prompting: ModuleScript;
								theme: ModuleScript;
								results: ModuleScript;
							};
							producer: ModuleScript;
							ui: Folder & {
								warning: ModuleScript;
								console: ModuleScript;
								stats: ModuleScript;
								modal: ModuleScript;
								["console-bar-bg"]: ModuleScript;
								["dev-console"]: ModuleScript;
								["console-bar"]: ModuleScript;
								["warning-description"]: ModuleScript;
								["mobile-button"]: ModuleScript;
								["warning-message"]: ModuleScript;
								shadow: ModuleScript;
								["console-text"]: ModuleScript;
								["console-bg"]: ModuleScript;
								frame: ModuleScript;
								result: ModuleScript;
								results: ModuleScript;
							};
							providers: Folder & {
								["rem-provider"]: ModuleScript;
							};
							hooks: Folder & {
								["use-px"]: ModuleScript;
								["use-rem"]: ModuleScript;
							};
						};
						config: ModuleScript;
					};
				};
			};
			["@rbxts"]: Folder & {
				profileservice: Folder & {
					src: ModuleScript;
				};
				["object-utils"]: ModuleScript;
				ripple: Folder & {
					src: ModuleScript & {
						config: ModuleScript;
						solvers: Folder & {
							tween: ModuleScript;
							spring: ModuleScript;
							linear: ModuleScript;
							immediate: ModuleScript;
						};
						utils: Folder & {
							assign: ModuleScript;
							spy: ModuleScript;
							snapshot: ModuleScript;
							intermediate: ModuleScript;
							merge: ModuleScript;
						};
						createMotion: ModuleScript;
						types: ModuleScript;
					};
				};
				["react-roblox"]: ModuleScript;
				react: ModuleScript & {
					tags: ModuleScript;
				};
				ReactLua: Folder & {
					node_modules: Folder & {
						["@jsdotlua"]: Folder & {
							number: Folder & {
								["package"]: ModuleScript;
								src: ModuleScript & {
									MAX_SAFE_INTEGER: ModuleScript;
									isSafeInteger: ModuleScript;
									toExponential: ModuleScript;
									isNaN: ModuleScript;
									isInteger: ModuleScript;
									isFinite: ModuleScript;
									MIN_SAFE_INTEGER: ModuleScript;
								};
							};
							console: Folder & {
								["package"]: ModuleScript;
								src: ModuleScript & {
									makeConsoleImpl: ModuleScript;
								};
							};
							["react-roblox"]: ModuleScript & {
								client: Folder & {
									roblox: Folder & {
										RobloxComponentProps: ModuleScript;
										SingleEventManager: ModuleScript;
										getDefaultInstanceProperty: ModuleScript;
									};
									ReactRobloxHostConfig: ModuleScript;
									ReactRobloxRoot: ModuleScript;
									ReactRoblox: ModuleScript;
									ReactRobloxComponentTree: ModuleScript;
									["ReactRobloxHostTypes.roblox"]: ModuleScript;
									ReactRobloxComponent: ModuleScript;
								};
								["ReactReconciler.roblox"]: ModuleScript;
							};
							["react-devtools-shared"]: ModuleScript & {
								["jest.config"]: ModuleScript;
								hook: ModuleScript;
								bridge: ModuleScript;
								constants: ModuleScript;
								utils: ModuleScript;
								devtools: ModuleScript & {
									views: Folder & {
										Components: Folder & {
											types: ModuleScript;
										};
										Profiler: Folder & {
											InteractionsChartBuilder: ModuleScript;
											utils: ModuleScript;
											CommitTreeBuilder: ModuleScript;
											RankedChartBuilder: ModuleScript;
											FlamegraphChartBuilder: ModuleScript;
											types: ModuleScript;
										};
									};
									utils: ModuleScript;
									cache: ModuleScript;
									types: ModuleScript;
									ProfilingCache: ModuleScript;
									store: ModuleScript;
									ProfilerStore: ModuleScript;
								};
								events: ModuleScript;
								hydration: ModuleScript;
								["clipboardjs.mock"]: ModuleScript;
								storage: ModuleScript;
								backend: ModuleScript & {
									console: ModuleScript;
									utils: ModuleScript;
									ReactSymbols: ModuleScript;
									renderer: ModuleScript;
									agent: ModuleScript;
									NativeStyleEditor: Folder & {
										types: ModuleScript;
									};
									types: ModuleScript;
								};
								types: ModuleScript;
							};
							["instance-of"]: Folder & {
								["package"]: ModuleScript;
								src: ModuleScript & {
									["instanceof"]: ModuleScript;
								};
							};
							["react-cache"]: ModuleScript & {
								ReactCacheOld: ModuleScript;
								LRU: ModuleScript;
							};
							["luau-polyfill"]: Folder & {
								["package"]: ModuleScript;
								src: ModuleScript & {
									Promise: ModuleScript;
									["extends"]: ModuleScript;
									AssertionError: ModuleScript & {
										["AssertionError.global"]: ModuleScript;
									};
									Error: ModuleScript & {
										["Error.global"]: ModuleScript;
									};
									encodeURIComponent: ModuleScript;
								};
							};
							math: Folder & {
								["package"]: ModuleScript;
								src: ModuleScript & {
									clz32: ModuleScript;
								};
							};
							timers: Folder & {
								["package"]: ModuleScript;
								src: ModuleScript & {
									makeIntervalImpl: ModuleScript;
									makeTimerImpl: ModuleScript;
								};
							};
							["react-test-renderer"]: ModuleScript & {
								ReactTestRenderer: ModuleScript;
								roblox: Folder & {
									RobloxComponentProps: ModuleScript;
								};
								ReactTestHostConfig: ModuleScript;
							};
							promise: Folder & {
								lib: ModuleScript;
								["package"]: ModuleScript;
							};
							string: Folder & {
								["package"]: ModuleScript;
								src: ModuleScript & {
									endsWith: ModuleScript;
									indexOf: ModuleScript;
									lastIndexOf: ModuleScript;
									trimStart: ModuleScript;
									trim: ModuleScript;
									findOr: ModuleScript;
									substr: ModuleScript;
									slice: ModuleScript;
									startsWith: ModuleScript;
									charCodeAt: ModuleScript;
									trimEnd: ModuleScript;
									includes: ModuleScript;
									split: ModuleScript;
								};
							};
							shared: ModuleScript & {
								["UninitializedState.roblox"]: ModuleScript;
								console: ModuleScript;
								ReactComponentStackFrame: ModuleScript;
								invariant: ModuleScript;
								ReactTypes: ModuleScript;
								objectIs: ModuleScript;
								ReactInstanceMap: ModuleScript;
								["Type.roblox"]: ModuleScript;
								["ConsolePatchingDev.roblox"]: ModuleScript;
								["ErrorHandling.roblox"]: ModuleScript;
								shallowEqual: ModuleScript;
								ReactElementType: ModuleScript;
								isValidElementType: ModuleScript;
								invokeGuardedCallbackImpl: ModuleScript;
								getComponentName: ModuleScript;
								formatProdErrorMessage: ModuleScript;
								ReactFeatureFlags: ModuleScript;
								PropMarkers: Folder & {
									Change: ModuleScript;
									Event: ModuleScript;
									Tag: ModuleScript;
								};
								consoleWithStackDev: ModuleScript;
								ReactErrorUtils: ModuleScript;
								["enqueueTask.roblox"]: ModuleScript;
								checkPropTypes: ModuleScript;
								ReactSharedInternals: ModuleScript & {
									ReactDebugCurrentFrame: ModuleScript;
									ReactCurrentOwner: ModuleScript;
									ReactCurrentDispatcher: ModuleScript;
									IsSomeRendererActing: ModuleScript;
									ReactCurrentBatchConfig: ModuleScript;
								};
								ReactVersion: ModuleScript;
								ReactSymbols: ModuleScript;
								["flowtypes.roblox"]: ModuleScript;
								["Symbol.roblox"]: ModuleScript;
								ExecutionEnvironment: ModuleScript;
								ReactFiberHostConfig: ModuleScript & {
									WithNoTestSelectors: ModuleScript;
									WithNoHydration: ModuleScript;
									WithNoPersistence: ModuleScript;
								};
							};
							scheduler: ModuleScript & {
								SchedulerPriorities: ModuleScript;
								TracingSubscriptions: ModuleScript;
								SchedulerMinHeap: ModuleScript;
								Scheduler: ModuleScript;
								Tracing: ModuleScript;
								forks: Folder & {
									["SchedulerHostConfig.mock"]: ModuleScript;
									["SchedulerHostConfig.default"]: ModuleScript;
								};
								unstable_mock: ModuleScript;
								SchedulerProfiling: ModuleScript;
								SchedulerHostConfig: ModuleScript;
								SchedulerFeatureFlags: ModuleScript;
							};
							["roact-compat"]: ModuleScript & {
								warnOnce: ModuleScript;
								Portal: ModuleScript;
								setGlobalConfig: ModuleScript;
								oneChild: ModuleScript;
								createFragment: ModuleScript;
								RoactTree: ModuleScript;
							};
							["react-shallow-renderer"]: ModuleScript;
							collections: Folder & {
								["package"]: ModuleScript;
								src: ModuleScript & {
									Map: ModuleScript & {
										Map: ModuleScript;
										coerceToTable: ModuleScript;
										coerceToMap: ModuleScript;
									};
									Object: ModuleScript & {
										values: ModuleScript;
										assign: ModuleScript;
										is: ModuleScript;
										seal: ModuleScript;
										entries: ModuleScript;
										preventExtensions: ModuleScript;
										isFrozen: ModuleScript;
										keys: ModuleScript;
										freeze: ModuleScript;
										None: ModuleScript;
									};
									Set: ModuleScript;
									Array: ModuleScript & {
										flat: ModuleScript;
										indexOf: ModuleScript;
										every: ModuleScript;
										slice: ModuleScript;
										sort: ModuleScript;
										shift: ModuleScript;
										map: ModuleScript;
										isArray: ModuleScript;
										findIndex: ModuleScript;
										unshift: ModuleScript;
										splice: ModuleScript;
										filter: ModuleScript;
										find: ModuleScript;
										forEach: ModuleScript;
										reverse: ModuleScript;
										includes: ModuleScript;
										concat: ModuleScript;
										from: ModuleScript & {
											fromString: ModuleScript;
											fromArray: ModuleScript;
											fromSet: ModuleScript;
											fromMap: ModuleScript;
										};
										join: ModuleScript;
										flatMap: ModuleScript;
										reduce: ModuleScript;
										some: ModuleScript;
									};
									inspect: ModuleScript;
									WeakMap: ModuleScript;
								};
							};
							["react-devtools-extensions"]: ModuleScript & {
								backend: ModuleScript;
							};
							["react-reconciler"]: ModuleScript & {
								ReactRootTags: ModuleScript;
								["ReactFiberDevToolsHook.new"]: ModuleScript;
								["ReactFiberWorkLoop.new"]: ModuleScript;
								ReactTestSelectors: ModuleScript;
								["ReactFiberHotReloading.new"]: ModuleScript;
								ReactCapturedValue: ModuleScript;
								["ReactFiberUnwindWork.new"]: ModuleScript;
								["ReactFiberNewContext.new"]: ModuleScript;
								["ReactProfilerTimer.new"]: ModuleScript;
								ReactInternalTypes: ModuleScript;
								["ReactFiber.new"]: ModuleScript;
								["ReactFiberCommitWork.new"]: ModuleScript;
								ReactFiberTransition: ModuleScript;
								RobloxReactProfiling: ModuleScript;
								forks: Folder & {
									["ReactFiberHostConfig.test"]: ModuleScript;
								};
								["ReactStrictModeWarnings.new"]: ModuleScript;
								ReactPortal: ModuleScript;
								SchedulingProfiler: ModuleScript;
								["SchedulerWithReactIntegration.new"]: ModuleScript;
								ReactWorkTags: ModuleScript;
								ReactFiberHostConfig: ModuleScript;
								ReactTypeOfMode: ModuleScript;
								ReactFiberOffscreenComponent: ModuleScript;
								["ReactUpdateQueue.new"]: ModuleScript;
								ReactFiberLane: ModuleScript;
								["ReactFiberClassComponent.new"]: ModuleScript;
								ReactHookEffectTags: ModuleScript;
								ReactFiberWorkInProgress: ModuleScript;
								ReactFiberTreeReflection: ModuleScript;
								["ReactChildFiber.new"]: ModuleScript;
								MaxInts: ModuleScript;
								["ReactFiberLazyComponent.new"]: ModuleScript;
								ReactFiberErrorDialog: ModuleScript;
								["ReactFiberBeginWork.new"]: ModuleScript;
								ReactFiberFlags: ModuleScript;
								DebugTracing: ModuleScript;
								ReactFiberErrorLogger: ModuleScript;
								["ReactFiberHooks.new"]: ModuleScript;
								["ReactFiberSchedulerPriorities.roblox"]: ModuleScript;
								["ReactFiberHydrationContext.new"]: ModuleScript;
								ReactFiberReconciler: ModuleScript;
								["ReactFiberContext.new"]: ModuleScript;
								["ReactFiberSuspenseContext.new"]: ModuleScript;
								["ReactFiberStack.new"]: ModuleScript;
								["ReactFiberHostContext.new"]: ModuleScript;
								["ReactMutableSource.new"]: ModuleScript;
								ReactCurrentFiber: ModuleScript;
								ReactFiberComponentStack: ModuleScript;
								["ReactFiberSuspenseComponent.new"]: ModuleScript;
								["ReactFiberCompleteWork.new"]: ModuleScript;
								["ReactFiberReconciler.new"]: ModuleScript;
								["ReactFiberRoot.new"]: ModuleScript;
								["ReactFiberThrow.new"]: ModuleScript;
							};
							["react-is"]: ModuleScript;
							react: ModuleScript & {
								["None.roblox"]: ModuleScript;
								ReactLazy: ModuleScript;
								ReactElementValidator: ModuleScript;
								["createSignal.roblox"]: ModuleScript;
								ReactElement: ModuleScript;
								ReactMutableSource: ModuleScript;
								ReactContext: ModuleScript;
								ReactBaseClasses: ModuleScript;
								ReactNoopUpdateQueue: ModuleScript;
								ReactMemo: ModuleScript;
								ReactCreateRef: ModuleScript;
								ReactForwardRef: ModuleScript;
								React: ModuleScript;
								["ReactBinding.roblox"]: ModuleScript;
								ReactHooks: ModuleScript;
								ReactChildren: ModuleScript;
							};
							["es7-types"]: Folder & {
								["package"]: ModuleScript;
								src: ModuleScript;
							};
							boolean: Folder & {
								["package"]: ModuleScript;
								src: ModuleScript & {
									toJSBoolean: ModuleScript;
								};
							};
							ReactDebugTools: ModuleScript & {
								ReactDebugTools: ModuleScript;
								ReactDebugHooks: ModuleScript;
							};
						};
						commander: Folder & {
							["package-support"]: ModuleScript;
							["package"]: ModuleScript;
							lib: Folder;
							typings: Folder;
						};
						[".luau-aliases"]: Folder & {
							["@jsdotlua"]: Folder & {
								number: ModuleScript;
								console: ModuleScript;
								["react-roblox"]: ModuleScript;
								["react-is"]: ModuleScript;
								["instance-of"]: ModuleScript;
								["react-cache"]: ModuleScript;
								["es7-types"]: ModuleScript;
								math: ModuleScript;
								["react-debug-tools"]: ModuleScript;
								["react-test-renderer"]: ModuleScript;
								promise: ModuleScript;
								timers: ModuleScript;
								string: ModuleScript;
								shared: ModuleScript;
								scheduler: ModuleScript;
								["roact-compat"]: ModuleScript;
								["react-reconciler"]: ModuleScript;
								["react-devtools-extensions"]: ModuleScript;
								["react-shallow-renderer"]: ModuleScript;
								collections: ModuleScript;
								react: ModuleScript;
								["react-devtools-shared"]: ModuleScript;
								boolean: ModuleScript;
								["luau-polyfill"]: ModuleScript;
							};
							["symbol-luau"]: ModuleScript;
						};
						["symbol-luau"]: Folder & {
							["package"]: ModuleScript;
							src: ModuleScript & {
								["Registry.global"]: ModuleScript;
								Symbol: ModuleScript;
							};
							LICENSE: StringValue;
						};
						npmluau: Folder & {
							["package"]: ModuleScript;
							src: Folder;
							["luau-types-re-export"]: Folder & {
								pkg: Folder & {
									["package"]: ModuleScript;
								};
							};
							LICENSE: StringValue;
						};
						walkdir: Folder & {
							["package"]: ModuleScript;
							test: Folder & {
								dir: Folder & {
									["nested-symlink"]: Folder;
									symlinks: Folder & {
										dir1: Folder;
										dir2: Folder;
									};
									foo: Folder & {
										a: Folder & {
											b: Folder & {
												c: Folder;
											};
										};
									};
								};
								comparison: Folder & {
									["package"]: ModuleScript;
								};
							};
						};
						[".bin"]: Folder;
					};
					ReactShallowRenderer: ModuleScript;
					ReactRoblox: ModuleScript;
					ReactDevtoolsShared: ModuleScript;
					ReactIs: ModuleScript;
					Shared: ModuleScript;
					ReactReconciler: ModuleScript;
					RoactCompat: ModuleScript;
					Scheduler: ModuleScript;
					ReactTestRenderer: ModuleScript;
					React: ModuleScript;
					ReactDevtoolsExtensions: ModuleScript;
					ReactDebugTools: ModuleScript;
					ReactCache: ModuleScript;
				};
				["react-reflex"]: ModuleScript & {
					React: ModuleScript;
					hooks: Folder & {
						useSelector: ModuleScript;
						useSelectorCreator: ModuleScript;
						useProducer: ModuleScript;
					};
					components: Folder & {
						ReflexContext: ModuleScript;
						ReflexProvider: ModuleScript;
					};
					Reflex: ModuleScript;
				};
				trove: Folder & {
					out: ModuleScript;
				};
				types: Folder & {
					include: Folder & {
						generated: Folder;
					};
				};
				["promise-child"]: ModuleScript;
				["pretty-react-hooks"]: Folder & {
					out: ModuleScript & {
						["use-latest"]: ModuleScript & {
							["use-latest"]: ModuleScript;
						};
						utils: Folder & {
							binding: ModuleScript;
							hoarcekat: ModuleScript;
							["shallow-equal"]: ModuleScript;
							math: ModuleScript;
							testez: ModuleScript;
						};
						["use-binding-state"]: ModuleScript & {
							["use-binding-state"]: ModuleScript;
						};
						["use-unmount-effect"]: ModuleScript & {
							["use-unmount-effect"]: ModuleScript;
						};
						["use-update-effect"]: ModuleScript & {
							["use-update-effect"]: ModuleScript;
						};
						["use-previous"]: ModuleScript & {
							["use-previous"]: ModuleScript;
						};
						["use-interval"]: ModuleScript & {
							["use-interval"]: ModuleScript;
						};
						["use-debounce-callback"]: ModuleScript & {
							["use-debounce-callback"]: ModuleScript;
						};
						["use-spring"]: ModuleScript & {
							["use-spring"]: ModuleScript;
						};
						["use-motion"]: ModuleScript & {
							["use-motion"]: ModuleScript;
						};
						["use-defer-state"]: ModuleScript & {
							["use-defer-state"]: ModuleScript;
						};
						["use-tagged"]: ModuleScript & {
							["use-tagged"]: ModuleScript;
						};
						["use-key-press"]: ModuleScript & {
							["use-key-press"]: ModuleScript;
						};
						["use-timeout"]: ModuleScript & {
							["use-timeout"]: ModuleScript;
						};
						["use-composed-ref"]: ModuleScript & {
							["use-composed-ref"]: ModuleScript;
						};
						["use-async-callback"]: ModuleScript & {
							["use-async-callback"]: ModuleScript;
						};
						["use-throttle-state"]: ModuleScript & {
							["use-throttle-state"]: ModuleScript;
						};
						["use-defer-callback"]: ModuleScript & {
							["use-defer-callback"]: ModuleScript;
						};
						["use-latest-callback"]: ModuleScript & {
							["use-latest-callback"]: ModuleScript;
						};
						["use-event-listener"]: ModuleScript & {
							["use-event-listener"]: ModuleScript;
						};
						["use-throttle-callback"]: ModuleScript & {
							["use-throttle-callback"]: ModuleScript;
						};
						["use-update"]: ModuleScript & {
							["use-update"]: ModuleScript;
						};
						["use-async-effect"]: ModuleScript & {
							["use-async-effect"]: ModuleScript;
						};
						["use-binding-listener"]: ModuleScript & {
							["use-binding-listener"]: ModuleScript;
						};
						["use-async"]: ModuleScript & {
							["use-async"]: ModuleScript;
						};
						["use-debounce-effect"]: ModuleScript & {
							["use-debounce-effect"]: ModuleScript;
						};
						["use-viewport"]: ModuleScript & {
							["use-viewport"]: ModuleScript;
						};
						["use-throttle-effect"]: ModuleScript & {
							["use-throttle-effect"]: ModuleScript;
						};
						["use-defer-effect"]: ModuleScript & {
							["use-defer-effect"]: ModuleScript;
						};
						["use-debounce-state"]: ModuleScript & {
							["use-debounce-state"]: ModuleScript;
						};
						["use-timer"]: ModuleScript & {
							["use-timer"]: ModuleScript;
						};
						["use-lifetime"]: ModuleScript & {
							["use-lifetime"]: ModuleScript;
						};
						["use-camera"]: ModuleScript & {
							["use-camera"]: ModuleScript;
						};
						["use-mount-effect"]: ModuleScript & {
							["use-mount-effect"]: ModuleScript;
						};
						["use-mouse"]: ModuleScript & {
							["use-mouse"]: ModuleScript;
						};
					};
				};
				["validate-tree"]: ModuleScript;
				t: Folder & {
					lib: Folder & {
						ts: ModuleScript;
					};
				};
				goodsignal: Folder & {
					src: ModuleScript;
					out: ModuleScript;
				};
				["set-timeout"]: Folder & {
					out: ModuleScript & {
						["set-countdown"]: ModuleScript;
						["set-interval"]: ModuleScript;
						["debounce.spec"]: ModuleScript;
						["set-timeout"]: ModuleScript;
						throttle: ModuleScript;
						["set-timeout.spec"]: ModuleScript;
						["throttle.spec"]: ModuleScript;
						["set-interval.spec"]: ModuleScript;
						["set-countdown.spec"]: ModuleScript;
						debounce: ModuleScript;
					};
				};
				maid: Folder & {
					Maid: ModuleScript;
				};
				["promise-character"]: ModuleScript;
				reflex: Folder & {
					src: ModuleScript & {
						createProducer: ModuleScript;
						broadcast: ModuleScript & {
							createBroadcastReceiver: ModuleScript;
							createBroadcaster: ModuleScript;
							hydrate: ModuleScript;
						};
						Promise: ModuleScript;
						createSelector: ModuleScript;
						utils: Folder & {
							shallowEqual: ModuleScript;
							testSelector: ModuleScript;
							createSelectArrayDiffs: ModuleScript;
							setInterval: ModuleScript;
						};
						combineProducers: ModuleScript;
						middleware: Folder & {
							loggerMiddleware: ModuleScript;
						};
						applyMiddleware: ModuleScript;
						types: ModuleScript;
					};
				};
				services: ModuleScript;
				beacon: Folder & {
					out: ModuleScript;
				};
				clack: Folder & {
					out: ModuleScript & {
						touch: ModuleScript;
						prefer: ModuleScript;
						keyboard: ModuleScript;
						gamepad: ModuleScript;
						mouse: ModuleScript;
						types: ModuleScript;
					};
				};
				janitor: Folder & {
					src: ModuleScript & {
						Promise: ModuleScript;
					};
				};
				["compiler-types"]: Folder & {
					types: Folder;
				};
				["fast-replica"]: Folder & {
					node_modules: Folder & {
						["@rbxts"]: Folder & {
							t: Folder & {
								lib: Folder & {
									ts: ModuleScript;
								};
							};
						};
					};
					out: ModuleScript & {
						path: ModuleScript;
						utils: ModuleScript;
						["replica-server"]: ModuleScript;
						remotes: ModuleScript & {
							constructor: ModuleScript;
						};
						types: Folder;
						["replica-client"]: ModuleScript;
					};
				};
				signal: ModuleScript;
			};
		};
	};
}
