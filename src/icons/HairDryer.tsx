import { HairDryerIcon as HairDryerBoldIcon } from "../bold/HairDryer";
import { HairDryerIcon as HairDryerDuotoneIcon } from "../duotone/HairDryer";
import { HairDryerIcon as HairDryerFillIcon } from "../fill/HairDryer";
import { HairDryerIcon as HairDryerLightIcon } from "../light/HairDryer";
import { HairDryerIcon as HairDryerRegularIcon } from "../regular/HairDryer";
import { HairDryerIcon as HairDryerThinIcon } from "../thin/HairDryer";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HairDryerThinIcon,
	light: HairDryerLightIcon,
	regular: HairDryerRegularIcon,
	bold: HairDryerBoldIcon,
	fill: HairDryerFillIcon,
	duotone: HairDryerDuotoneIcon,
} as const;

export function HairDryerIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HairDryerIcon as HairDryer };
