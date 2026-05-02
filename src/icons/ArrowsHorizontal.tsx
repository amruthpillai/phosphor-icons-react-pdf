import { ArrowsHorizontalIcon as ArrowsHorizontalBoldIcon } from "../bold/ArrowsHorizontal";
import { ArrowsHorizontalIcon as ArrowsHorizontalDuotoneIcon } from "../duotone/ArrowsHorizontal";
import { ArrowsHorizontalIcon as ArrowsHorizontalFillIcon } from "../fill/ArrowsHorizontal";
import { ArrowsHorizontalIcon as ArrowsHorizontalLightIcon } from "../light/ArrowsHorizontal";
import { ArrowsHorizontalIcon as ArrowsHorizontalRegularIcon } from "../regular/ArrowsHorizontal";
import { ArrowsHorizontalIcon as ArrowsHorizontalThinIcon } from "../thin/ArrowsHorizontal";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowsHorizontalThinIcon,
	light: ArrowsHorizontalLightIcon,
	regular: ArrowsHorizontalRegularIcon,
	bold: ArrowsHorizontalBoldIcon,
	fill: ArrowsHorizontalFillIcon,
	duotone: ArrowsHorizontalDuotoneIcon,
} as const;

export function ArrowsHorizontalIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowsHorizontalIcon as ArrowsHorizontal };
