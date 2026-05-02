import { FileVueIcon as FileVueBoldIcon } from "../bold/FileVue";
import { FileVueIcon as FileVueDuotoneIcon } from "../duotone/FileVue";
import { FileVueIcon as FileVueFillIcon } from "../fill/FileVue";
import { FileVueIcon as FileVueLightIcon } from "../light/FileVue";
import { FileVueIcon as FileVueRegularIcon } from "../regular/FileVue";
import { FileVueIcon as FileVueThinIcon } from "../thin/FileVue";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FileVueThinIcon,
	light: FileVueLightIcon,
	regular: FileVueRegularIcon,
	bold: FileVueBoldIcon,
	fill: FileVueFillIcon,
	duotone: FileVueDuotoneIcon,
} as const;

export function FileVueIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FileVueIcon as FileVue };
