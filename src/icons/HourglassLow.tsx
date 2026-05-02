import { HourglassLowIcon as HourglassLowBoldIcon } from "../bold/HourglassLow";
import { HourglassLowIcon as HourglassLowDuotoneIcon } from "../duotone/HourglassLow";
import { HourglassLowIcon as HourglassLowFillIcon } from "../fill/HourglassLow";
import { HourglassLowIcon as HourglassLowLightIcon } from "../light/HourglassLow";
import { HourglassLowIcon as HourglassLowRegularIcon } from "../regular/HourglassLow";
import { HourglassLowIcon as HourglassLowThinIcon } from "../thin/HourglassLow";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HourglassLowThinIcon,
	light: HourglassLowLightIcon,
	regular: HourglassLowRegularIcon,
	bold: HourglassLowBoldIcon,
	fill: HourglassLowFillIcon,
	duotone: HourglassLowDuotoneIcon,
} as const;

export function HourglassLowIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HourglassLowIcon as HourglassLow };
