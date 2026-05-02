import { ClockCounterClockwiseIcon as ClockCounterClockwiseBoldIcon } from "../bold/ClockCounterClockwise";
import { ClockCounterClockwiseIcon as ClockCounterClockwiseDuotoneIcon } from "../duotone/ClockCounterClockwise";
import { ClockCounterClockwiseIcon as ClockCounterClockwiseFillIcon } from "../fill/ClockCounterClockwise";
import { ClockCounterClockwiseIcon as ClockCounterClockwiseLightIcon } from "../light/ClockCounterClockwise";
import { ClockCounterClockwiseIcon as ClockCounterClockwiseRegularIcon } from "../regular/ClockCounterClockwise";
import { ClockCounterClockwiseIcon as ClockCounterClockwiseThinIcon } from "../thin/ClockCounterClockwise";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ClockCounterClockwiseThinIcon,
	light: ClockCounterClockwiseLightIcon,
	regular: ClockCounterClockwiseRegularIcon,
	bold: ClockCounterClockwiseBoldIcon,
	fill: ClockCounterClockwiseFillIcon,
	duotone: ClockCounterClockwiseDuotoneIcon,
} as const;

export function ClockCounterClockwiseIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ClockCounterClockwiseIcon as ClockCounterClockwise };
