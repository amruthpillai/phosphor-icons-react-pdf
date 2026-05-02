import { ArrowsCounterClockwiseIcon as ArrowsCounterClockwiseBoldIcon } from "../bold/ArrowsCounterClockwise";
import { ArrowsCounterClockwiseIcon as ArrowsCounterClockwiseDuotoneIcon } from "../duotone/ArrowsCounterClockwise";
import { ArrowsCounterClockwiseIcon as ArrowsCounterClockwiseFillIcon } from "../fill/ArrowsCounterClockwise";
import { ArrowsCounterClockwiseIcon as ArrowsCounterClockwiseLightIcon } from "../light/ArrowsCounterClockwise";
import { ArrowsCounterClockwiseIcon as ArrowsCounterClockwiseRegularIcon } from "../regular/ArrowsCounterClockwise";
import { ArrowsCounterClockwiseIcon as ArrowsCounterClockwiseThinIcon } from "../thin/ArrowsCounterClockwise";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowsCounterClockwiseThinIcon,
	light: ArrowsCounterClockwiseLightIcon,
	regular: ArrowsCounterClockwiseRegularIcon,
	bold: ArrowsCounterClockwiseBoldIcon,
	fill: ArrowsCounterClockwiseFillIcon,
	duotone: ArrowsCounterClockwiseDuotoneIcon,
} as const;

export function ArrowsCounterClockwiseIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowsCounterClockwiseIcon as ArrowsCounterClockwise };
