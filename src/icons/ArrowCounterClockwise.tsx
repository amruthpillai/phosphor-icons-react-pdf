import { ArrowCounterClockwiseIcon as ArrowCounterClockwiseBoldIcon } from "../bold/ArrowCounterClockwise";
import { ArrowCounterClockwiseIcon as ArrowCounterClockwiseDuotoneIcon } from "../duotone/ArrowCounterClockwise";
import { ArrowCounterClockwiseIcon as ArrowCounterClockwiseFillIcon } from "../fill/ArrowCounterClockwise";
import { ArrowCounterClockwiseIcon as ArrowCounterClockwiseLightIcon } from "../light/ArrowCounterClockwise";
import { ArrowCounterClockwiseIcon as ArrowCounterClockwiseRegularIcon } from "../regular/ArrowCounterClockwise";
import { ArrowCounterClockwiseIcon as ArrowCounterClockwiseThinIcon } from "../thin/ArrowCounterClockwise";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowCounterClockwiseThinIcon,
	light: ArrowCounterClockwiseLightIcon,
	regular: ArrowCounterClockwiseRegularIcon,
	bold: ArrowCounterClockwiseBoldIcon,
	fill: ArrowCounterClockwiseFillIcon,
	duotone: ArrowCounterClockwiseDuotoneIcon,
} as const;

export function ArrowCounterClockwiseIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowCounterClockwiseIcon as ArrowCounterClockwise };
