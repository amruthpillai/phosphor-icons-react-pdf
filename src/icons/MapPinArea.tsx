import { MapPinAreaIcon as MapPinAreaBoldIcon } from "../bold/MapPinArea";
import { MapPinAreaIcon as MapPinAreaDuotoneIcon } from "../duotone/MapPinArea";
import { MapPinAreaIcon as MapPinAreaFillIcon } from "../fill/MapPinArea";
import { MapPinAreaIcon as MapPinAreaLightIcon } from "../light/MapPinArea";
import { MapPinAreaIcon as MapPinAreaRegularIcon } from "../regular/MapPinArea";
import { MapPinAreaIcon as MapPinAreaThinIcon } from "../thin/MapPinArea";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MapPinAreaThinIcon,
	light: MapPinAreaLightIcon,
	regular: MapPinAreaRegularIcon,
	bold: MapPinAreaBoldIcon,
	fill: MapPinAreaFillIcon,
	duotone: MapPinAreaDuotoneIcon,
} as const;

export function MapPinAreaIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MapPinAreaIcon as MapPinArea };
