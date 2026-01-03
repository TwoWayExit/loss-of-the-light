import { images } from "./images";
import { sounds } from "./sounds";

export type Assets = { [index: string]: string | Assets };

export default {
	images,
	sounds,
};
