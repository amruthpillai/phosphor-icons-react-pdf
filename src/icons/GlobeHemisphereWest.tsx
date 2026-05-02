import { GlobeHemisphereWestIcon as GlobeHemisphereWestBoldIcon } from "../bold/GlobeHemisphereWest";
import { GlobeHemisphereWestIcon as GlobeHemisphereWestDuotoneIcon } from "../duotone/GlobeHemisphereWest";
import { GlobeHemisphereWestIcon as GlobeHemisphereWestFillIcon } from "../fill/GlobeHemisphereWest";
import { GlobeHemisphereWestIcon as GlobeHemisphereWestLightIcon } from "../light/GlobeHemisphereWest";
import { GlobeHemisphereWestIcon as GlobeHemisphereWestRegularIcon } from "../regular/GlobeHemisphereWest";
import { GlobeHemisphereWestIcon as GlobeHemisphereWestThinIcon } from "../thin/GlobeHemisphereWest";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GlobeHemisphereWestThinIcon,
	light: GlobeHemisphereWestLightIcon,
	regular: GlobeHemisphereWestRegularIcon,
	bold: GlobeHemisphereWestBoldIcon,
	fill: GlobeHemisphereWestFillIcon,
	duotone: GlobeHemisphereWestDuotoneIcon,
} as const;

export function GlobeHemisphereWestIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GlobeHemisphereWestIcon as GlobeHemisphereWest };
