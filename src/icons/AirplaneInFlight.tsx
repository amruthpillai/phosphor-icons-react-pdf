import { AirplaneInFlightIcon as AirplaneInFlightBoldIcon } from "../bold/AirplaneInFlight";
import { AirplaneInFlightIcon as AirplaneInFlightDuotoneIcon } from "../duotone/AirplaneInFlight";
import { AirplaneInFlightIcon as AirplaneInFlightFillIcon } from "../fill/AirplaneInFlight";
import { AirplaneInFlightIcon as AirplaneInFlightLightIcon } from "../light/AirplaneInFlight";
import { AirplaneInFlightIcon as AirplaneInFlightRegularIcon } from "../regular/AirplaneInFlight";
import { AirplaneInFlightIcon as AirplaneInFlightThinIcon } from "../thin/AirplaneInFlight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AirplaneInFlightThinIcon,
	light: AirplaneInFlightLightIcon,
	regular: AirplaneInFlightRegularIcon,
	bold: AirplaneInFlightBoldIcon,
	fill: AirplaneInFlightFillIcon,
	duotone: AirplaneInFlightDuotoneIcon,
} as const;

export function AirplaneInFlightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AirplaneInFlightIcon as AirplaneInFlight };
