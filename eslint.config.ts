import { defineConfig, globalIgnores } from "eslint/config";
import robloxTs from "eslint-plugin-roblox-ts";

export default defineConfig([globalIgnores(["out"]), robloxTs.configs.recommended]);
