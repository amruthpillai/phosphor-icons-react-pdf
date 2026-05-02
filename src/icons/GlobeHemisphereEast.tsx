import { GlobeHemisphereEastIcon as GlobeHemisphereEastBoldIcon } from "../bold/GlobeHemisphereEast";
import { GlobeHemisphereEastIcon as GlobeHemisphereEastDuotoneIcon } from "../duotone/GlobeHemisphereEast";
import { GlobeHemisphereEastIcon as GlobeHemisphereEastFillIcon } from "../fill/GlobeHemisphereEast";
import { GlobeHemisphereEastIcon as GlobeHemisphereEastLightIcon } from "../light/GlobeHemisphereEast";
import { GlobeHemisphereEastIcon as GlobeHemisphereEastRegularIcon } from "../regular/GlobeHemisphereEast";
import { GlobeHemisphereEastIcon as GlobeHemisphereEastThinIcon } from "../thin/GlobeHemisphereEast";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GlobeHemisphereEastThinIcon,
	light: GlobeHemisphereEastLightIcon,
	regular: GlobeHemisphereEastRegularIcon,
	bold: GlobeHemisphereEastBoldIcon,
	fill: GlobeHemisphereEastFillIcon,
	duotone: GlobeHemisphereEastDuotoneIcon,
} as const;

export function GlobeHemisphereEastIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GlobeHemisphereEastIcon as GlobeHemisphereEast };
