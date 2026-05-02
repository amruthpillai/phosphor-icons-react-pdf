import { MapPinLineIcon as MapPinLineBoldIcon } from "../bold/MapPinLine";
import { MapPinLineIcon as MapPinLineDuotoneIcon } from "../duotone/MapPinLine";
import { MapPinLineIcon as MapPinLineFillIcon } from "../fill/MapPinLine";
import { MapPinLineIcon as MapPinLineLightIcon } from "../light/MapPinLine";
import { MapPinLineIcon as MapPinLineRegularIcon } from "../regular/MapPinLine";
import { MapPinLineIcon as MapPinLineThinIcon } from "../thin/MapPinLine";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MapPinLineThinIcon,
	light: MapPinLineLightIcon,
	regular: MapPinLineRegularIcon,
	bold: MapPinLineBoldIcon,
	fill: MapPinLineFillIcon,
	duotone: MapPinLineDuotoneIcon,
} as const;

export function MapPinLineIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MapPinLineIcon as MapPinLine };
