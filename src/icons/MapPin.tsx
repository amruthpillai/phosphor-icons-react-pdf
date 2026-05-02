import { MapPinIcon as MapPinBoldIcon } from "../bold/MapPin";
import { MapPinIcon as MapPinDuotoneIcon } from "../duotone/MapPin";
import { MapPinIcon as MapPinFillIcon } from "../fill/MapPin";
import { MapPinIcon as MapPinLightIcon } from "../light/MapPin";
import { MapPinIcon as MapPinRegularIcon } from "../regular/MapPin";
import { MapPinIcon as MapPinThinIcon } from "../thin/MapPin";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MapPinThinIcon,
	light: MapPinLightIcon,
	regular: MapPinRegularIcon,
	bold: MapPinBoldIcon,
	fill: MapPinFillIcon,
	duotone: MapPinDuotoneIcon,
} as const;

export function MapPinIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MapPinIcon as MapPin };
