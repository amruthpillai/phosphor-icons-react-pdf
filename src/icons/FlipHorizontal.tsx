import { FlipHorizontalIcon as FlipHorizontalBoldIcon } from "../bold/FlipHorizontal";
import { FlipHorizontalIcon as FlipHorizontalDuotoneIcon } from "../duotone/FlipHorizontal";
import { FlipHorizontalIcon as FlipHorizontalFillIcon } from "../fill/FlipHorizontal";
import { FlipHorizontalIcon as FlipHorizontalLightIcon } from "../light/FlipHorizontal";
import { FlipHorizontalIcon as FlipHorizontalRegularIcon } from "../regular/FlipHorizontal";
import { FlipHorizontalIcon as FlipHorizontalThinIcon } from "../thin/FlipHorizontal";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FlipHorizontalThinIcon,
	light: FlipHorizontalLightIcon,
	regular: FlipHorizontalRegularIcon,
	bold: FlipHorizontalBoldIcon,
	fill: FlipHorizontalFillIcon,
	duotone: FlipHorizontalDuotoneIcon,
} as const;

export function FlipHorizontalIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FlipHorizontalIcon as FlipHorizontal };
