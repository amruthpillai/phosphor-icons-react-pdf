import { SlidersHorizontalIcon as SlidersHorizontalBoldIcon } from "../bold/SlidersHorizontal";
import { SlidersHorizontalIcon as SlidersHorizontalDuotoneIcon } from "../duotone/SlidersHorizontal";
import { SlidersHorizontalIcon as SlidersHorizontalFillIcon } from "../fill/SlidersHorizontal";
import { SlidersHorizontalIcon as SlidersHorizontalLightIcon } from "../light/SlidersHorizontal";
import { SlidersHorizontalIcon as SlidersHorizontalRegularIcon } from "../regular/SlidersHorizontal";
import { SlidersHorizontalIcon as SlidersHorizontalThinIcon } from "../thin/SlidersHorizontal";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SlidersHorizontalThinIcon,
	light: SlidersHorizontalLightIcon,
	regular: SlidersHorizontalRegularIcon,
	bold: SlidersHorizontalBoldIcon,
	fill: SlidersHorizontalFillIcon,
	duotone: SlidersHorizontalDuotoneIcon,
} as const;

export function SlidersHorizontalIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SlidersHorizontalIcon as SlidersHorizontal };
