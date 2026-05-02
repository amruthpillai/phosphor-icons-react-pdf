import { MapPinSimpleAreaIcon as MapPinSimpleAreaBoldIcon } from "../bold/MapPinSimpleArea";
import { MapPinSimpleAreaIcon as MapPinSimpleAreaDuotoneIcon } from "../duotone/MapPinSimpleArea";
import { MapPinSimpleAreaIcon as MapPinSimpleAreaFillIcon } from "../fill/MapPinSimpleArea";
import { MapPinSimpleAreaIcon as MapPinSimpleAreaLightIcon } from "../light/MapPinSimpleArea";
import { MapPinSimpleAreaIcon as MapPinSimpleAreaRegularIcon } from "../regular/MapPinSimpleArea";
import { MapPinSimpleAreaIcon as MapPinSimpleAreaThinIcon } from "../thin/MapPinSimpleArea";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MapPinSimpleAreaThinIcon,
	light: MapPinSimpleAreaLightIcon,
	regular: MapPinSimpleAreaRegularIcon,
	bold: MapPinSimpleAreaBoldIcon,
	fill: MapPinSimpleAreaFillIcon,
	duotone: MapPinSimpleAreaDuotoneIcon,
} as const;

export function MapPinSimpleAreaIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MapPinSimpleAreaIcon as MapPinSimpleArea };
