import { MapTrifoldIcon as MapTrifoldBoldIcon } from "../bold/MapTrifold";
import { MapTrifoldIcon as MapTrifoldDuotoneIcon } from "../duotone/MapTrifold";
import { MapTrifoldIcon as MapTrifoldFillIcon } from "../fill/MapTrifold";
import { MapTrifoldIcon as MapTrifoldLightIcon } from "../light/MapTrifold";
import { MapTrifoldIcon as MapTrifoldRegularIcon } from "../regular/MapTrifold";
import { MapTrifoldIcon as MapTrifoldThinIcon } from "../thin/MapTrifold";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MapTrifoldThinIcon,
	light: MapTrifoldLightIcon,
	regular: MapTrifoldRegularIcon,
	bold: MapTrifoldBoldIcon,
	fill: MapTrifoldFillIcon,
	duotone: MapTrifoldDuotoneIcon,
} as const;

export function MapTrifoldIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MapTrifoldIcon as MapTrifold };
