import { FireTruckIcon as FireTruckBoldIcon } from "../bold/FireTruck";
import { FireTruckIcon as FireTruckDuotoneIcon } from "../duotone/FireTruck";
import { FireTruckIcon as FireTruckFillIcon } from "../fill/FireTruck";
import { FireTruckIcon as FireTruckLightIcon } from "../light/FireTruck";
import { FireTruckIcon as FireTruckRegularIcon } from "../regular/FireTruck";
import { FireTruckIcon as FireTruckThinIcon } from "../thin/FireTruck";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FireTruckThinIcon,
	light: FireTruckLightIcon,
	regular: FireTruckRegularIcon,
	bold: FireTruckBoldIcon,
	fill: FireTruckFillIcon,
	duotone: FireTruckDuotoneIcon,
} as const;

export function FireTruckIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FireTruckIcon as FireTruck };
