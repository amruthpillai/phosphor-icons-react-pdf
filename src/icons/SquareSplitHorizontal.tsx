import { SquareSplitHorizontalIcon as SquareSplitHorizontalBoldIcon } from "../bold/SquareSplitHorizontal";
import { SquareSplitHorizontalIcon as SquareSplitHorizontalDuotoneIcon } from "../duotone/SquareSplitHorizontal";
import { SquareSplitHorizontalIcon as SquareSplitHorizontalFillIcon } from "../fill/SquareSplitHorizontal";
import { SquareSplitHorizontalIcon as SquareSplitHorizontalLightIcon } from "../light/SquareSplitHorizontal";
import { SquareSplitHorizontalIcon as SquareSplitHorizontalRegularIcon } from "../regular/SquareSplitHorizontal";
import { SquareSplitHorizontalIcon as SquareSplitHorizontalThinIcon } from "../thin/SquareSplitHorizontal";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SquareSplitHorizontalThinIcon,
	light: SquareSplitHorizontalLightIcon,
	regular: SquareSplitHorizontalRegularIcon,
	bold: SquareSplitHorizontalBoldIcon,
	fill: SquareSplitHorizontalFillIcon,
	duotone: SquareSplitHorizontalDuotoneIcon,
} as const;

export function SquareSplitHorizontalIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SquareSplitHorizontalIcon as SquareSplitHorizontal };
