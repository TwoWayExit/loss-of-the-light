import { Controller, OnInit } from "@flamework/core";
import { Config, DevCon } from "@twowayexit/dev-con";
import { settings } from "client/modules/settings";
import { commands } from "../../modules/commands";
import { extensions } from "./extensions";
import { binds } from "client/modules/binds";

@Controller({
	loadOrder: 0,
})
export class DevConController implements OnInit {
	onInit() {
		Config.stats = `Two-Way Exit dev-con %s (%s)
--------------------------------

╔╗────────────────╔═╗─╔╗╔╗─────╔╗──────╔╗─╔╗
║║────────────────║╔╝╔╝╚╣║─────║║──────║║╔╝╚╗
║║──╔══╦══╦══╗╔══╦╝╚╗╚╗╔╣╚═╦══╗║║──╔╦══╣╚╩╗╔╝
║║─╔╣╔╗║══╣══╣║╔╗╠╗╔╝─║║║╔╗║║═╣║║─╔╬╣╔╗║╔╗║║
║╚═╝║╚╝╠══╠══║║╚╝║║║──║╚╣║║║║═╣║╚═╝║║╚╝║║║║╚╗
╚═══╩══╩══╩══╝╚══╝╚╝──╚═╩╝╚╩══╝╚═══╩╩═╗╠╝╚╩═╝
────────────────────────────────────╔═╝║
────────────────────────────────────╚══╝
--------------------------------
%s (Loss of the Light %s Server %s-sv)
Connected to %s

typescript version: %s
build no: %s
branch: %s
compile time: %s
job id: %s

© 2022-2025 LapisThe. All rights reserved.`;

		DevCon.init(extensions, settings, commands, binds, {
			primaryColor: new Color3(0.14, 0, 0.47),
			secondaryColor: new Color3(0.02, 0, 0.37),
		});

		settings.setSetting("ui_core_playerlist", false);
	}
}
