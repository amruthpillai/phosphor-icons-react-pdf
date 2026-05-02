import { TruckIcon as TruckBoldIcon } from "../bold/Truck";
import { TruckIcon as TruckDuotoneIcon } from "../duotone/Truck";
import { TruckIcon as TruckFillIcon } from "../fill/Truck";
import { TruckIcon as TruckLightIcon } from "../light/Truck";
import { TruckIcon as TruckRegularIcon } from "../regular/Truck";
import { TruckIcon as TruckThinIcon } from "../thin/Truck";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TruckThinIcon,
	light: TruckLightIcon,
	regular: TruckRegularIcon,
	bold: TruckBoldIcon,
	fill: TruckFillIcon,
	duotone: TruckDuotoneIcon,
} as const;

export function TruckIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TruckIcon as Truck };
