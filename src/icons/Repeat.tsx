import { RepeatIcon as RepeatBoldIcon } from "../bold/Repeat";
import { RepeatIcon as RepeatDuotoneIcon } from "../duotone/Repeat";
import { RepeatIcon as RepeatFillIcon } from "../fill/Repeat";
import { RepeatIcon as RepeatLightIcon } from "../light/Repeat";
import { RepeatIcon as RepeatRegularIcon } from "../regular/Repeat";
import { RepeatIcon as RepeatThinIcon } from "../thin/Repeat";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: RepeatThinIcon,
	light: RepeatLightIcon,
	regular: RepeatRegularIcon,
	bold: RepeatBoldIcon,
	fill: RepeatFillIcon,
	duotone: RepeatDuotoneIcon,
} as const;

export function RepeatIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { RepeatIcon as Repeat };
