import { HourglassSimpleLowIcon as HourglassSimpleLowBoldIcon } from "../bold/HourglassSimpleLow";
import { HourglassSimpleLowIcon as HourglassSimpleLowDuotoneIcon } from "../duotone/HourglassSimpleLow";
import { HourglassSimpleLowIcon as HourglassSimpleLowFillIcon } from "../fill/HourglassSimpleLow";
import { HourglassSimpleLowIcon as HourglassSimpleLowLightIcon } from "../light/HourglassSimpleLow";
import { HourglassSimpleLowIcon as HourglassSimpleLowRegularIcon } from "../regular/HourglassSimpleLow";
import { HourglassSimpleLowIcon as HourglassSimpleLowThinIcon } from "../thin/HourglassSimpleLow";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HourglassSimpleLowThinIcon,
	light: HourglassSimpleLowLightIcon,
	regular: HourglassSimpleLowRegularIcon,
	bold: HourglassSimpleLowBoldIcon,
	fill: HourglassSimpleLowFillIcon,
	duotone: HourglassSimpleLowDuotoneIcon,
} as const;

export function HourglassSimpleLowIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HourglassSimpleLowIcon as HourglassSimpleLow };
