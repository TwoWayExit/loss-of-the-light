interface ReplicatedStorage extends Instance {
	TS: Folder & {
		assets: ModuleScript & {
			sounds: ModuleScript;
			animations: ModuleScript;
			images: ModuleScript;
		};
		lib: Folder & {
			path: ModuleScript;
			network: ModuleScript;
			uuid: ModuleScript;
			dialogue: ModuleScript;
			trace: ModuleScript;
			["lifecycle-hooks"]: ModuleScript;
			util: ModuleScript;
		};
		modules: Folder & {
			["view-vectors"]: ModuleScript;
			levels: ModuleScript;
			combatants: Folder & {
				["malemc-combatant"]: ModuleScript;
			};
			["user-command"]: ModuleScript;
			["stats-defs"]: ModuleScript;
			skills: Folder & {
				["basic-skill"]: ModuleScript;
			};
			skillsets: ModuleScript & {
				["malemc-skillset"]: ModuleScript;
			};
			["combatant-list"]: ModuleScript;
		};
		config: ModuleScript;
		settings: Folder & {
			mv_forwardspeed: ModuleScript;
			mv_sidespeed: ModuleScript;
			fov_current: ModuleScript;
		};
		network: Folder & {
			global: ModuleScript;
			middleware: ModuleScript;
		};
		models: Folder & {
			["player-collidable"]: ModuleScript;
			["auto-control"]: ModuleScript;
			skills: ModuleScript;
			player: ModuleScript;
			battle: ModuleScript;
			["player-networked"]: ModuleScript;
			["combatant-builder"]: ModuleScript;
			lotl_client: ModuleScript;
			level: ModuleScript;
			["generic-auto-control"]: ModuleScript;
			character: ModuleScript;
		};
		atoms: Folder & {
			players: ModuleScript;
			battles: ModuleScript;
			["sv-vars"]: ModuleScript;
		};
		components: Folder & {
			["lotl_player-animate"]: ModuleScript;
			lotl_movement: ModuleScript;
			["uuid-component"]: ModuleScript;
			["disposable-component"]: ModuleScript;
		};
	};
	combatants: Folder & {
		malemc: Model & {
			["Left Leg"]: Part & {
				Snap: Snap;
				LeftFootAttachment: Attachment;
			};
			Humanoid: Humanoid & {
				HumanoidDescription: HumanoidDescription;
				Animator: Animator;
			};
			Highlight: Highlight;
			AnimSaves: Model & {
				IDLEDONTCRASH: KeyframeSequence;
				HURTDONTCRASH: KeyframeSequence;
				["IDLEDONTCRASH w/ Lam"]: KeyframeSequence;
				BASICDONTCRASH: KeyframeSequence;
				["BASICDONTCRASH w/lam"]: KeyframeSequence;
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
					TouchInterest: TouchTransmitter;
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
					TouchInterest: TouchTransmitter;
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
					TouchInterest: TouchTransmitter;
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
					TouchInterest: TouchTransmitter;
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
			anims: Folder & {
				hurt: Animation;
				idle: Animation;
				basic: Animation;
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
					TouchInterest: TouchTransmitter;
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
					TouchInterest: TouchTransmitter;
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
					TouchInterest: TouchTransmitter;
					HairAttachment: Attachment;
					AccessoryWeld: Weld;
					SpecialMesh: SpecialMesh;
					AvatarPartScaleType: StringValue;
				};
			};
		};
	};
	rbxts_include: Folder & {
		RuntimeLib: ModuleScript;
		Promise: ModuleScript;
		node_modules: Folder & {
			["@flamework"]: Folder & {
				core: Folder & {
					out: ModuleScript & {
						utility: ModuleScript;
						flamework: ModuleScript;
						prelude: ModuleScript;
						reflect: ModuleScript;
						modding: ModuleScript;
						metadata: ModuleScript;
					};
				};
				components: Folder & {
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
						app: Folder & {
							hooks: Folder & {
								["use-px"]: ModuleScript;
								["use-rem"]: ModuleScript;
							};
							slices: Folder & {
								console: ModuleScript;
								["inactive-texts"]: ModuleScript;
								["selected-result"]: ModuleScript;
								["console-bar"]: ModuleScript;
								history: ModuleScript;
								stats: ModuleScript;
								prompting: ModuleScript;
								theme: ModuleScript;
								results: ModuleScript;
							};
							producer: ModuleScript;
							ui: Folder & {
								console: ModuleScript;
								modal: ModuleScript;
								["console-bar-bg"]: ModuleScript;
								["dev-console"]: ModuleScript;
								["console-bar"]: ModuleScript;
								["mobile-button"]: ModuleScript;
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
							contexts: Folder & {
								theme: ModuleScript;
							};
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
						config: ModuleScript;
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
					};
				};
			};
			["@rbxts"]: Folder & {
				["ui-labs"]: Folder & {
					src: ModuleScript & {
						Controls: Folder & {
							ControlConversion: ModuleScript;
							PrimitiveControls: ModuleScript;
							ControlUtils: ModuleScript;
							Utils: ModuleScript;
							DatatypeControls: ModuleScript;
							AdvancedControls: ModuleScript;
						};
						Libraries: Folder;
						StoryCreators: ModuleScript;
						ControlTypings: Folder;
						Version: ModuleScript;
						Environment: ModuleScript;
						Typing: Folder;
						Utils: ModuleScript;
						Types: ModuleScript;
					};
				};
				["behavior-tree-5"]: ModuleScript & {
					BehaviorTreeCreator: ModuleScript;
					BehaviorTree3: ModuleScript;
				};
				["react-globals"]: ModuleScript;
				["compiler-types"]: Folder & {
					types: Folder;
				};
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
				charm: ModuleScript & {
					wally: ModuleScript;
					src: ModuleScript & {
						mapped: ModuleScript;
						computed: ModuleScript;
						atom: ModuleScript;
						effect: ModuleScript;
						observe: ModuleScript;
						subscribe: ModuleScript;
						store: ModuleScript;
						types: ModuleScript;
					};
				};
				t: Folder & {
					lib: Folder & {
						ts: ModuleScript;
					};
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
				lapis: Folder & {
					out: ModuleScript & {
						Promise: ModuleScript;
						lapis: ModuleScript & {
							AutoSave: ModuleScript;
							freezeDeep: ModuleScript;
							noYield: ModuleScript;
							Internal: ModuleScript;
							Data: ModuleScript & {
								Throttle: ModuleScript;
							};
							["init.test"]: ModuleScript;
							Migration: ModuleScript;
							Config: ModuleScript;
							["Document.test"]: ModuleScript;
							PromiseTypes: ModuleScript;
							Collection: ModuleScript;
							copyDeep: ModuleScript;
							Error: ModuleScript;
							Document: ModuleScript;
						};
					};
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
				janitor: Folder & {
					src: ModuleScript & {
						Promise: ModuleScript;
						FastDefer: ModuleScript;
					};
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
							["use-latest.spec"]: ModuleScript;
						};
						utils: Folder & {
							binding: ModuleScript;
							hoarcekat: ModuleScript;
							["shallow-equal"]: ModuleScript;
							math: ModuleScript;
							testez: ModuleScript;
						};
						["use-binding-state"]: ModuleScript & {
							["use-binding-state.spec"]: ModuleScript;
							["use-binding-state"]: ModuleScript;
						};
						["use-unmount-effect"]: ModuleScript & {
							["use-unmount-effect.spec"]: ModuleScript;
							["use-unmount-effect"]: ModuleScript;
						};
						["use-update-effect"]: ModuleScript & {
							["use-update-effect.spec"]: ModuleScript;
							["use-update-effect"]: ModuleScript;
						};
						["use-previous"]: ModuleScript & {
							["use-previous"]: ModuleScript;
							["use-previous.spec"]: ModuleScript;
						};
						["use-interval"]: ModuleScript & {
							["use-interval.spec"]: ModuleScript;
							["use-interval"]: ModuleScript;
						};
						["use-debounce-callback"]: ModuleScript & {
							["use-debounce-callback"]: ModuleScript;
							["use-debounce-callback.spec"]: ModuleScript;
						};
						["use-spring"]: ModuleScript & {
							["use-spring"]: ModuleScript;
							["use-spring.spec"]: ModuleScript;
						};
						["use-motion"]: ModuleScript & {
							["use-motion"]: ModuleScript;
							["use-motion.spec"]: ModuleScript;
						};
						["use-defer-state"]: ModuleScript & {
							["use-defer-state"]: ModuleScript;
							["use-defer-state.spec"]: ModuleScript;
						};
						["use-tagged"]: ModuleScript & {
							["use-tagged.spec"]: ModuleScript;
							["use-tagged"]: ModuleScript;
						};
						["use-key-press"]: ModuleScript & {
							["use-key-press"]: ModuleScript;
							["use-key-press.spec"]: ModuleScript;
						};
						["use-timeout"]: ModuleScript & {
							["use-timeout"]: ModuleScript;
							["use-timeout.spec"]: ModuleScript;
						};
						["use-composed-ref"]: ModuleScript & {
							["use-composed-ref.spec"]: ModuleScript;
							["use-composed-ref"]: ModuleScript;
						};
						["use-async-callback"]: ModuleScript & {
							["use-async-callback"]: ModuleScript;
							["use-async-callback.spec"]: ModuleScript;
						};
						["use-throttle-state"]: ModuleScript & {
							["use-throttle-state.spec"]: ModuleScript;
							["use-throttle-state"]: ModuleScript;
						};
						["use-defer-callback"]: ModuleScript & {
							["use-defer-callback.spec"]: ModuleScript;
							["use-defer-callback"]: ModuleScript;
						};
						["use-latest-callback"]: ModuleScript & {
							["use-latest-callback.spec"]: ModuleScript;
							["use-latest-callback"]: ModuleScript;
						};
						["use-event-listener"]: ModuleScript & {
							["use-event-listener"]: ModuleScript;
							["use-event-listener.spec"]: ModuleScript;
						};
						["use-throttle-callback"]: ModuleScript & {
							["use-throttle-callback.spec"]: ModuleScript;
							["use-throttle-callback"]: ModuleScript;
						};
						["use-update"]: ModuleScript & {
							["use-update.spec"]: ModuleScript;
							["use-update"]: ModuleScript;
						};
						["use-async-effect"]: ModuleScript & {
							["use-async-effect"]: ModuleScript;
							["use-async-effect.spec"]: ModuleScript;
						};
						["use-viewport"]: ModuleScript & {
							["use-viewport"]: ModuleScript;
							["use-viewport.spec"]: ModuleScript;
						};
						["use-binding-listener"]: ModuleScript & {
							["use-binding-listener"]: ModuleScript;
							["use-binding-listener.spec"]: ModuleScript;
						};
						["use-async"]: ModuleScript & {
							["use-async.spec"]: ModuleScript;
							["use-async"]: ModuleScript;
						};
						["init.spec"]: ModuleScript;
						["use-debounce-effect"]: ModuleScript & {
							["use-debounce-effect"]: ModuleScript;
							["use-debounce-effect.spec"]: ModuleScript;
						};
						["use-timer"]: ModuleScript & {
							["use-timer"]: ModuleScript;
							["use-timer.spec"]: ModuleScript;
						};
						["use-defer-effect"]: ModuleScript & {
							["use-defer-effect.spec"]: ModuleScript;
							["use-defer-effect"]: ModuleScript;
						};
						["use-debounce-state"]: ModuleScript & {
							["use-debounce-state"]: ModuleScript;
							["use-debounce-state.spec"]: ModuleScript;
						};
						["use-throttle-effect"]: ModuleScript & {
							["use-throttle-effect.spec"]: ModuleScript;
							["use-throttle-effect"]: ModuleScript;
						};
						["use-lifetime"]: ModuleScript & {
							["use-lifetime"]: ModuleScript;
							["use-lifetime.spec"]: ModuleScript;
						};
						["use-camera"]: ModuleScript & {
							["use-camera.spec"]: ModuleScript;
							["use-camera"]: ModuleScript;
						};
						["use-mount-effect"]: ModuleScript & {
							["use-mount-effect"]: ModuleScript;
							["use-mount-effect.spec"]: ModuleScript;
						};
						["use-mouse"]: ModuleScript & {
							["use-mouse.spec"]: ModuleScript;
							["use-mouse"]: ModuleScript;
						};
					};
				};
				trove: Folder & {
					out: ModuleScript;
				};
				["better-immut"]: Folder & {
					src: ModuleScript & {
						isDraft: ModuleScript;
						makeDraftSafeReadOnly: ModuleScript;
						Draft: ModuleScript;
						produce: ModuleScript;
						finishDraft: ModuleScript;
						isDraftable: ModuleScript;
						getClone: ModuleScript;
						readDraft: ModuleScript;
						table: ModuleScript;
						original: ModuleScript;
						makeDraftSafe: ModuleScript;
						None: ModuleScript;
					};
				};
				beacon: Folder & {
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
				["react-devtools-core"]: ModuleScript;
				["react-roblox"]: ModuleScript;
				services: ModuleScript;
				["react-charm"]: ModuleScript & {
					wally: ModuleScript;
					src: ModuleScript;
				};
				react: ModuleScript & {
					tags: ModuleScript;
				};
				["charm-sync"]: ModuleScript & {
					wally: ModuleScript;
					src: ModuleScript & {
						flatten: ModuleScript;
						patch: ModuleScript;
						types: ModuleScript;
						interval: ModuleScript;
						client: ModuleScript;
						validate: ModuleScript;
						server: ModuleScript;
					};
				};
				["validate-tree"]: ModuleScript;
				signal: ModuleScript;
			};
			["@rbxts-js"]: Folder & {
				Number: ModuleScript & {
					MAX_SAFE_INTEGER: ModuleScript;
					isSafeInteger: ModuleScript;
					toExponential: ModuleScript;
					isNaN: ModuleScript;
					isInteger: ModuleScript;
					isFinite: ModuleScript;
					MIN_SAFE_INTEGER: ModuleScript;
				};
				Console: ModuleScript & {
					makeConsoleImpl: ModuleScript;
				};
				InstanceOf: ModuleScript & {
					["instanceof"]: ModuleScript;
				};
				ReactDevtoolsShared: ModuleScript & {
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
						views: Folder & {
							Highlighter: ModuleScript & {
								Highlighter: ModuleScript;
								Overlay: Folder & {
									Overlay: ModuleScript;
									OverlayRect: ModuleScript;
									OverlayTip: ModuleScript;
								};
							};
						};
						console: ModuleScript;
						NativeStyleEditor: Folder & {
							types: ModuleScript;
						};
						ReactSymbols: ModuleScript;
						renderer: ModuleScript;
						agent: ModuleScript;
						utils: ModuleScript;
						types: ModuleScript;
					};
					types: ModuleScript;
				};
				SafeFlags: ModuleScript;
				Scheduler: ModuleScript & {
					SchedulerPriorities: ModuleScript;
					NoYield: ModuleScript;
					TracingSubscriptions: ModuleScript;
					SchedulerMinHeap: ModuleScript;
					forks: Folder & {
						["SchedulerHostConfig.mock"]: ModuleScript;
						["SchedulerHostConfig.default"]: ModuleScript;
					};
					Scheduler: ModuleScript;
					Tracing: ModuleScript;
					unstable_mock: ModuleScript;
					SchedulerProfiling: ModuleScript;
					SchedulerHostConfig: ModuleScript;
					SchedulerFeatureFlags: ModuleScript;
				};
				LuauPolyfill: ModuleScript & {
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
				Math: ModuleScript & {
					clz32: ModuleScript;
				};
				ES7Types: ModuleScript;
				ReactGlobals: ModuleScript & {
					["ReactGlobals.global"]: ModuleScript;
				};
				Shared: ModuleScript & {
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
					ReactFeatureFlags: ModuleScript;
					ReactElementType: ModuleScript;
					shallowEqual: ModuleScript;
					isValidElementType: ModuleScript;
					invokeGuardedCallbackImpl: ModuleScript;
					getComponentName: ModuleScript;
					formatProdErrorMessage: ModuleScript;
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
				Symbol: ModuleScript & {
					["Registry.global"]: ModuleScript;
					Symbol: ModuleScript;
				};
				ReactTelemetry: ModuleScript & {
					customFields: ModuleScript;
					reportCounter: ModuleScript;
					ReactTelemetry: ModuleScript;
				};
				ReactIs: ModuleScript;
				ReactRoblox: ModuleScript & {
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
				Promise: ModuleScript;
				ReactReconciler: ModuleScript & {
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
					forks: Folder & {
						["ReactFiberHostConfig.test"]: ModuleScript;
					};
					SchedulingProfiler: ModuleScript;
					["ReactStrictModeWarnings.new"]: ModuleScript;
					ReactPortal: ModuleScript;
					["SchedulerWithReactIntegration.new"]: ModuleScript;
					RobloxReactProfiling: ModuleScript;
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
				Timers: ModuleScript & {
					makeIntervalImpl: ModuleScript;
					makeTimerImpl: ModuleScript;
				};
				String: ModuleScript & {
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
				Collections: ModuleScript & {
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
				React: ModuleScript & {
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
				ReactDevtoolsCore: ModuleScript & {
					utils: Folder & {
						serializeTable: ModuleScript;
					};
					backend: ModuleScript;
					setupAttachHook: ModuleScript;
				};
				Boolean: ModuleScript & {
					toJSBoolean: ModuleScript;
				};
				ReactDebugTools: ModuleScript & {
					ReactDebugTools: ModuleScript;
					ReactDebugHooks: ModuleScript;
				};
			};
		};
	};
}
