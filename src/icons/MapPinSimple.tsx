import { MapPinSimpleIcon as MapPinSimpleBoldIcon } from "../bold/MapPinSimple";
import { MapPinSimpleIcon as MapPinSimpleDuotoneIcon } from "../duotone/MapPinSimple";
import { MapPinSimpleIcon as MapPinSimpleFillIcon } from "../fill/MapPinSimple";
import { MapPinSimpleIcon as MapPinSimpleLightIcon } from "../light/MapPinSimple";
import { MapPinSimpleIcon as MapPinSimpleRegularIcon } from "../regular/MapPinSimple";
import { MapPinSimpleIcon as MapPinSimpleThinIcon } from "../thin/MapPinSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MapPinSimpleThinIcon,
	light: MapPinSimpleLightIcon,
	regular: MapPinSimpleRegularIcon,
	bold: MapPinSimpleBoldIcon,
	fill: MapPinSimpleFillIcon,
	duotone: MapPinSimpleDuotoneIcon,
} as const;

export function MapPinSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MapPinSimpleIcon as MapPinSimple };
