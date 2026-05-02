import { HeartBreakIcon as HeartBreakBoldIcon } from "../bold/HeartBreak";
import { HeartBreakIcon as HeartBreakDuotoneIcon } from "../duotone/HeartBreak";
import { HeartBreakIcon as HeartBreakFillIcon } from "../fill/HeartBreak";
import { HeartBreakIcon as HeartBreakLightIcon } from "../light/HeartBreak";
import { HeartBreakIcon as HeartBreakRegularIcon } from "../regular/HeartBreak";
import { HeartBreakIcon as HeartBreakThinIcon } from "../thin/HeartBreak";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HeartBreakThinIcon,
	light: HeartBreakLightIcon,
	regular: HeartBreakRegularIcon,
	bold: HeartBreakBoldIcon,
	fill: HeartBreakFillIcon,
	duotone: HeartBreakDuotoneIcon,
} as const;

export function HeartBreakIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HeartBreakIcon as HeartBreak };
