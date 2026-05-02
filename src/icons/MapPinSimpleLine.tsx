import { MapPinSimpleLineIcon as MapPinSimpleLineBoldIcon } from "../bold/MapPinSimpleLine";
import { MapPinSimpleLineIcon as MapPinSimpleLineDuotoneIcon } from "../duotone/MapPinSimpleLine";
import { MapPinSimpleLineIcon as MapPinSimpleLineFillIcon } from "../fill/MapPinSimpleLine";
import { MapPinSimpleLineIcon as MapPinSimpleLineLightIcon } from "../light/MapPinSimpleLine";
import { MapPinSimpleLineIcon as MapPinSimpleLineRegularIcon } from "../regular/MapPinSimpleLine";
import { MapPinSimpleLineIcon as MapPinSimpleLineThinIcon } from "../thin/MapPinSimpleLine";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MapPinSimpleLineThinIcon,
	light: MapPinSimpleLineLightIcon,
	regular: MapPinSimpleLineRegularIcon,
	bold: MapPinSimpleLineBoldIcon,
	fill: MapPinSimpleLineFillIcon,
	duotone: MapPinSimpleLineDuotoneIcon,
} as const;

export function MapPinSimpleLineIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MapPinSimpleLineIcon as MapPinSimpleLine };
