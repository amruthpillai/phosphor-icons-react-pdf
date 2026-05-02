import { FadersHorizontalIcon as FadersHorizontalBoldIcon } from "../bold/FadersHorizontal";
import { FadersHorizontalIcon as FadersHorizontalDuotoneIcon } from "../duotone/FadersHorizontal";
import { FadersHorizontalIcon as FadersHorizontalFillIcon } from "../fill/FadersHorizontal";
import { FadersHorizontalIcon as FadersHorizontalLightIcon } from "../light/FadersHorizontal";
import { FadersHorizontalIcon as FadersHorizontalRegularIcon } from "../regular/FadersHorizontal";
import { FadersHorizontalIcon as FadersHorizontalThinIcon } from "../thin/FadersHorizontal";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FadersHorizontalThinIcon,
	light: FadersHorizontalLightIcon,
	regular: FadersHorizontalRegularIcon,
	bold: FadersHorizontalBoldIcon,
	fill: FadersHorizontalFillIcon,
	duotone: FadersHorizontalDuotoneIcon,
} as const;

export function FadersHorizontalIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FadersHorizontalIcon as FadersHorizontal };
