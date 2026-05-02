import { AirplaneTaxiingIcon as AirplaneTaxiingBoldIcon } from "../bold/AirplaneTaxiing";
import { AirplaneTaxiingIcon as AirplaneTaxiingDuotoneIcon } from "../duotone/AirplaneTaxiing";
import { AirplaneTaxiingIcon as AirplaneTaxiingFillIcon } from "../fill/AirplaneTaxiing";
import { AirplaneTaxiingIcon as AirplaneTaxiingLightIcon } from "../light/AirplaneTaxiing";
import { AirplaneTaxiingIcon as AirplaneTaxiingRegularIcon } from "../regular/AirplaneTaxiing";
import { AirplaneTaxiingIcon as AirplaneTaxiingThinIcon } from "../thin/AirplaneTaxiing";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AirplaneTaxiingThinIcon,
	light: AirplaneTaxiingLightIcon,
	regular: AirplaneTaxiingRegularIcon,
	bold: AirplaneTaxiingBoldIcon,
	fill: AirplaneTaxiingFillIcon,
	duotone: AirplaneTaxiingDuotoneIcon,
} as const;

export function AirplaneTaxiingIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AirplaneTaxiingIcon as AirplaneTaxiing };
