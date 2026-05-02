import { AirplaneTakeoffIcon as AirplaneTakeoffBoldIcon } from "../bold/AirplaneTakeoff";
import { AirplaneTakeoffIcon as AirplaneTakeoffDuotoneIcon } from "../duotone/AirplaneTakeoff";
import { AirplaneTakeoffIcon as AirplaneTakeoffFillIcon } from "../fill/AirplaneTakeoff";
import { AirplaneTakeoffIcon as AirplaneTakeoffLightIcon } from "../light/AirplaneTakeoff";
import { AirplaneTakeoffIcon as AirplaneTakeoffRegularIcon } from "../regular/AirplaneTakeoff";
import { AirplaneTakeoffIcon as AirplaneTakeoffThinIcon } from "../thin/AirplaneTakeoff";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AirplaneTakeoffThinIcon,
	light: AirplaneTakeoffLightIcon,
	regular: AirplaneTakeoffRegularIcon,
	bold: AirplaneTakeoffBoldIcon,
	fill: AirplaneTakeoffFillIcon,
	duotone: AirplaneTakeoffDuotoneIcon,
} as const;

export function AirplaneTakeoffIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AirplaneTakeoffIcon as AirplaneTakeoff };
