import { ClockClockwiseIcon as ClockClockwiseBoldIcon } from "../bold/ClockClockwise";
import { ClockClockwiseIcon as ClockClockwiseDuotoneIcon } from "../duotone/ClockClockwise";
import { ClockClockwiseIcon as ClockClockwiseFillIcon } from "../fill/ClockClockwise";
import { ClockClockwiseIcon as ClockClockwiseLightIcon } from "../light/ClockClockwise";
import { ClockClockwiseIcon as ClockClockwiseRegularIcon } from "../regular/ClockClockwise";
import { ClockClockwiseIcon as ClockClockwiseThinIcon } from "../thin/ClockClockwise";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ClockClockwiseThinIcon,
	light: ClockClockwiseLightIcon,
	regular: ClockClockwiseRegularIcon,
	bold: ClockClockwiseBoldIcon,
	fill: ClockClockwiseFillIcon,
	duotone: ClockClockwiseDuotoneIcon,
} as const;

export function ClockClockwiseIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ClockClockwiseIcon as ClockClockwise };
