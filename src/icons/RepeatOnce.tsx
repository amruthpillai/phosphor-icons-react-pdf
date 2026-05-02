import { RepeatOnceIcon as RepeatOnceBoldIcon } from "../bold/RepeatOnce";
import { RepeatOnceIcon as RepeatOnceDuotoneIcon } from "../duotone/RepeatOnce";
import { RepeatOnceIcon as RepeatOnceFillIcon } from "../fill/RepeatOnce";
import { RepeatOnceIcon as RepeatOnceLightIcon } from "../light/RepeatOnce";
import { RepeatOnceIcon as RepeatOnceRegularIcon } from "../regular/RepeatOnce";
import { RepeatOnceIcon as RepeatOnceThinIcon } from "../thin/RepeatOnce";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: RepeatOnceThinIcon,
	light: RepeatOnceLightIcon,
	regular: RepeatOnceRegularIcon,
	bold: RepeatOnceBoldIcon,
	fill: RepeatOnceFillIcon,
	duotone: RepeatOnceDuotoneIcon,
} as const;

export function RepeatOnceIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { RepeatOnceIcon as RepeatOnce };
