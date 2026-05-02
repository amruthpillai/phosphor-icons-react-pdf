import { MapPinPlusIcon as MapPinPlusBoldIcon } from "../bold/MapPinPlus";
import { MapPinPlusIcon as MapPinPlusDuotoneIcon } from "../duotone/MapPinPlus";
import { MapPinPlusIcon as MapPinPlusFillIcon } from "../fill/MapPinPlus";
import { MapPinPlusIcon as MapPinPlusLightIcon } from "../light/MapPinPlus";
import { MapPinPlusIcon as MapPinPlusRegularIcon } from "../regular/MapPinPlus";
import { MapPinPlusIcon as MapPinPlusThinIcon } from "../thin/MapPinPlus";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MapPinPlusThinIcon,
	light: MapPinPlusLightIcon,
	regular: MapPinPlusRegularIcon,
	bold: MapPinPlusBoldIcon,
	fill: MapPinPlusFillIcon,
	duotone: MapPinPlusDuotoneIcon,
} as const;

export function MapPinPlusIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MapPinPlusIcon as MapPinPlus };
