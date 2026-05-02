import { AirplaneTiltIcon as AirplaneTiltBoldIcon } from "../bold/AirplaneTilt";
import { AirplaneTiltIcon as AirplaneTiltDuotoneIcon } from "../duotone/AirplaneTilt";
import { AirplaneTiltIcon as AirplaneTiltFillIcon } from "../fill/AirplaneTilt";
import { AirplaneTiltIcon as AirplaneTiltLightIcon } from "../light/AirplaneTilt";
import { AirplaneTiltIcon as AirplaneTiltRegularIcon } from "../regular/AirplaneTilt";
import { AirplaneTiltIcon as AirplaneTiltThinIcon } from "../thin/AirplaneTilt";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AirplaneTiltThinIcon,
	light: AirplaneTiltLightIcon,
	regular: AirplaneTiltRegularIcon,
	bold: AirplaneTiltBoldIcon,
	fill: AirplaneTiltFillIcon,
	duotone: AirplaneTiltDuotoneIcon,
} as const;

export function AirplaneTiltIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AirplaneTiltIcon as AirplaneTilt };
