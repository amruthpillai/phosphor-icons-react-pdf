import { ClockIcon as ClockBoldIcon } from "../bold/Clock";
import { ClockIcon as ClockDuotoneIcon } from "../duotone/Clock";
import { ClockIcon as ClockFillIcon } from "../fill/Clock";
import { ClockIcon as ClockLightIcon } from "../light/Clock";
import { ClockIcon as ClockRegularIcon } from "../regular/Clock";
import { ClockIcon as ClockThinIcon } from "../thin/Clock";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ClockThinIcon,
	light: ClockLightIcon,
	regular: ClockRegularIcon,
	bold: ClockBoldIcon,
	fill: ClockFillIcon,
	duotone: ClockDuotoneIcon,
} as const;

export function ClockIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ClockIcon as Clock };
