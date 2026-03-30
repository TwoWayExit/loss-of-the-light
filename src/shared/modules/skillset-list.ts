import { malemcSkillset } from "./skillsets/malemc-skillset";

const skillsets = {
	malemc: malemcSkillset,
} as const;

export type SkillsetList = typeof skillsets;

export default skillsets;
