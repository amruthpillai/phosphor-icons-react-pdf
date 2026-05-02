import { SplitHorizontalIcon as SplitHorizontalBoldIcon } from "../bold/SplitHorizontal";
import { SplitHorizontalIcon as SplitHorizontalDuotoneIcon } from "../duotone/SplitHorizontal";
import { SplitHorizontalIcon as SplitHorizontalFillIcon } from "../fill/SplitHorizontal";
import { SplitHorizontalIcon as SplitHorizontalLightIcon } from "../light/SplitHorizontal";
import { SplitHorizontalIcon as SplitHorizontalRegularIcon } from "../regular/SplitHorizontal";
import { SplitHorizontalIcon as SplitHorizontalThinIcon } from "../thin/SplitHorizontal";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SplitHorizontalThinIcon,
	light: SplitHorizontalLightIcon,
	regular: SplitHorizontalRegularIcon,
	bold: SplitHorizontalBoldIcon,
	fill: SplitHorizontalFillIcon,
	duotone: SplitHorizontalDuotoneIcon,
} as const;

export function SplitHorizontalIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SplitHorizontalIcon as SplitHorizontal };
