import { ChargingStationIcon as ChargingStationBoldIcon } from "../bold/ChargingStation";
import { ChargingStationIcon as ChargingStationDuotoneIcon } from "../duotone/ChargingStation";
import { ChargingStationIcon as ChargingStationFillIcon } from "../fill/ChargingStation";
import { ChargingStationIcon as ChargingStationLightIcon } from "../light/ChargingStation";
import { ChargingStationIcon as ChargingStationRegularIcon } from "../regular/ChargingStation";
import { ChargingStationIcon as ChargingStationThinIcon } from "../thin/ChargingStation";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ChargingStationThinIcon,
	light: ChargingStationLightIcon,
	regular: ChargingStationRegularIcon,
	bold: ChargingStationBoldIcon,
	fill: ChargingStationFillIcon,
	duotone: ChargingStationDuotoneIcon,
} as const;

export function ChargingStationIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ChargingStationIcon as ChargingStation };
