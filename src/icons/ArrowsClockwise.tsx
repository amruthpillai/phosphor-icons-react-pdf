import { ArrowsClockwiseIcon as ArrowsClockwiseBoldIcon } from "../bold/ArrowsClockwise";
import { ArrowsClockwiseIcon as ArrowsClockwiseDuotoneIcon } from "../duotone/ArrowsClockwise";
import { ArrowsClockwiseIcon as ArrowsClockwiseFillIcon } from "../fill/ArrowsClockwise";
import { ArrowsClockwiseIcon as ArrowsClockwiseLightIcon } from "../light/ArrowsClockwise";
import { ArrowsClockwiseIcon as ArrowsClockwiseRegularIcon } from "../regular/ArrowsClockwise";
import { ArrowsClockwiseIcon as ArrowsClockwiseThinIcon } from "../thin/ArrowsClockwise";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowsClockwiseThinIcon,
	light: ArrowsClockwiseLightIcon,
	regular: ArrowsClockwiseRegularIcon,
	bold: ArrowsClockwiseBoldIcon,
	fill: ArrowsClockwiseFillIcon,
	duotone: ArrowsClockwiseDuotoneIcon,
} as const;

export function ArrowsClockwiseIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowsClockwiseIcon as ArrowsClockwise };
