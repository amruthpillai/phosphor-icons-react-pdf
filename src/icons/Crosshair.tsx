import { CrosshairIcon as CrosshairBoldIcon } from "../bold/Crosshair";
import { CrosshairIcon as CrosshairDuotoneIcon } from "../duotone/Crosshair";
import { CrosshairIcon as CrosshairFillIcon } from "../fill/Crosshair";
import { CrosshairIcon as CrosshairLightIcon } from "../light/Crosshair";
import { CrosshairIcon as CrosshairRegularIcon } from "../regular/Crosshair";
import { CrosshairIcon as CrosshairThinIcon } from "../thin/Crosshair";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CrosshairThinIcon,
	light: CrosshairLightIcon,
	regular: CrosshairRegularIcon,
	bold: CrosshairBoldIcon,
	fill: CrosshairFillIcon,
	duotone: CrosshairDuotoneIcon,
} as const;

export function CrosshairIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CrosshairIcon as Crosshair };
