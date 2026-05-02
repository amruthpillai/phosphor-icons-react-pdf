import { GlobeStandIcon as GlobeStandBoldIcon } from "../bold/GlobeStand";
import { GlobeStandIcon as GlobeStandDuotoneIcon } from "../duotone/GlobeStand";
import { GlobeStandIcon as GlobeStandFillIcon } from "../fill/GlobeStand";
import { GlobeStandIcon as GlobeStandLightIcon } from "../light/GlobeStand";
import { GlobeStandIcon as GlobeStandRegularIcon } from "../regular/GlobeStand";
import { GlobeStandIcon as GlobeStandThinIcon } from "../thin/GlobeStand";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GlobeStandThinIcon,
	light: GlobeStandLightIcon,
	regular: GlobeStandRegularIcon,
	bold: GlobeStandBoldIcon,
	fill: GlobeStandFillIcon,
	duotone: GlobeStandDuotoneIcon,
} as const;

export function GlobeStandIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GlobeStandIcon as GlobeStand };
