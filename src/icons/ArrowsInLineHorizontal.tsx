import { ArrowsInLineHorizontalIcon as ArrowsInLineHorizontalBoldIcon } from "../bold/ArrowsInLineHorizontal";
import { ArrowsInLineHorizontalIcon as ArrowsInLineHorizontalDuotoneIcon } from "../duotone/ArrowsInLineHorizontal";
import { ArrowsInLineHorizontalIcon as ArrowsInLineHorizontalFillIcon } from "../fill/ArrowsInLineHorizontal";
import { ArrowsInLineHorizontalIcon as ArrowsInLineHorizontalLightIcon } from "../light/ArrowsInLineHorizontal";
import { ArrowsInLineHorizontalIcon as ArrowsInLineHorizontalRegularIcon } from "../regular/ArrowsInLineHorizontal";
import { ArrowsInLineHorizontalIcon as ArrowsInLineHorizontalThinIcon } from "../thin/ArrowsInLineHorizontal";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowsInLineHorizontalThinIcon,
	light: ArrowsInLineHorizontalLightIcon,
	regular: ArrowsInLineHorizontalRegularIcon,
	bold: ArrowsInLineHorizontalBoldIcon,
	fill: ArrowsInLineHorizontalFillIcon,
	duotone: ArrowsInLineHorizontalDuotoneIcon,
} as const;

export function ArrowsInLineHorizontalIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowsInLineHorizontalIcon as ArrowsInLineHorizontal };
