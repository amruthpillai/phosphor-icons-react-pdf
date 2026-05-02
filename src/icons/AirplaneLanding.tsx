import { AirplaneLandingIcon as AirplaneLandingBoldIcon } from "../bold/AirplaneLanding";
import { AirplaneLandingIcon as AirplaneLandingDuotoneIcon } from "../duotone/AirplaneLanding";
import { AirplaneLandingIcon as AirplaneLandingFillIcon } from "../fill/AirplaneLanding";
import { AirplaneLandingIcon as AirplaneLandingLightIcon } from "../light/AirplaneLanding";
import { AirplaneLandingIcon as AirplaneLandingRegularIcon } from "../regular/AirplaneLanding";
import { AirplaneLandingIcon as AirplaneLandingThinIcon } from "../thin/AirplaneLanding";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AirplaneLandingThinIcon,
	light: AirplaneLandingLightIcon,
	regular: AirplaneLandingRegularIcon,
	bold: AirplaneLandingBoldIcon,
	fill: AirplaneLandingFillIcon,
	duotone: AirplaneLandingDuotoneIcon,
} as const;

export function AirplaneLandingIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AirplaneLandingIcon as AirplaneLanding };
