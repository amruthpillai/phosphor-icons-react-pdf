import { ArrowsOutLineHorizontalIcon as ArrowsOutLineHorizontalBoldIcon } from "../bold/ArrowsOutLineHorizontal";
import { ArrowsOutLineHorizontalIcon as ArrowsOutLineHorizontalDuotoneIcon } from "../duotone/ArrowsOutLineHorizontal";
import { ArrowsOutLineHorizontalIcon as ArrowsOutLineHorizontalFillIcon } from "../fill/ArrowsOutLineHorizontal";
import { ArrowsOutLineHorizontalIcon as ArrowsOutLineHorizontalLightIcon } from "../light/ArrowsOutLineHorizontal";
import { ArrowsOutLineHorizontalIcon as ArrowsOutLineHorizontalRegularIcon } from "../regular/ArrowsOutLineHorizontal";
import { ArrowsOutLineHorizontalIcon as ArrowsOutLineHorizontalThinIcon } from "../thin/ArrowsOutLineHorizontal";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowsOutLineHorizontalThinIcon,
	light: ArrowsOutLineHorizontalLightIcon,
	regular: ArrowsOutLineHorizontalRegularIcon,
	bold: ArrowsOutLineHorizontalBoldIcon,
	fill: ArrowsOutLineHorizontalFillIcon,
	duotone: ArrowsOutLineHorizontalDuotoneIcon,
} as const;

export function ArrowsOutLineHorizontalIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowsOutLineHorizontalIcon as ArrowsOutLineHorizontal };
