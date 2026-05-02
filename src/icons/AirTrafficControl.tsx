import { AirTrafficControlIcon as AirTrafficControlBoldIcon } from "../bold/AirTrafficControl";
import { AirTrafficControlIcon as AirTrafficControlDuotoneIcon } from "../duotone/AirTrafficControl";
import { AirTrafficControlIcon as AirTrafficControlFillIcon } from "../fill/AirTrafficControl";
import { AirTrafficControlIcon as AirTrafficControlLightIcon } from "../light/AirTrafficControl";
import { AirTrafficControlIcon as AirTrafficControlRegularIcon } from "../regular/AirTrafficControl";
import { AirTrafficControlIcon as AirTrafficControlThinIcon } from "../thin/AirTrafficControl";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AirTrafficControlThinIcon,
	light: AirTrafficControlLightIcon,
	regular: AirTrafficControlRegularIcon,
	bold: AirTrafficControlBoldIcon,
	fill: AirTrafficControlFillIcon,
	duotone: AirTrafficControlDuotoneIcon,
} as const;

export function AirTrafficControlIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AirTrafficControlIcon as AirTrafficControl };
