import { ArrowClockwiseIcon as ArrowClockwiseBoldIcon } from "../bold/ArrowClockwise";
import { ArrowClockwiseIcon as ArrowClockwiseDuotoneIcon } from "../duotone/ArrowClockwise";
import { ArrowClockwiseIcon as ArrowClockwiseFillIcon } from "../fill/ArrowClockwise";
import { ArrowClockwiseIcon as ArrowClockwiseLightIcon } from "../light/ArrowClockwise";
import { ArrowClockwiseIcon as ArrowClockwiseRegularIcon } from "../regular/ArrowClockwise";
import { ArrowClockwiseIcon as ArrowClockwiseThinIcon } from "../thin/ArrowClockwise";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowClockwiseThinIcon,
	light: ArrowClockwiseLightIcon,
	regular: ArrowClockwiseRegularIcon,
	bold: ArrowClockwiseBoldIcon,
	fill: ArrowClockwiseFillIcon,
	duotone: ArrowClockwiseDuotoneIcon,
} as const;

export function ArrowClockwiseIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowClockwiseIcon as ArrowClockwise };
