import { CarBatteryIcon as CarBatteryBoldIcon } from "../bold/CarBattery";
import { CarBatteryIcon as CarBatteryDuotoneIcon } from "../duotone/CarBattery";
import { CarBatteryIcon as CarBatteryFillIcon } from "../fill/CarBattery";
import { CarBatteryIcon as CarBatteryLightIcon } from "../light/CarBattery";
import { CarBatteryIcon as CarBatteryRegularIcon } from "../regular/CarBattery";
import { CarBatteryIcon as CarBatteryThinIcon } from "../thin/CarBattery";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CarBatteryThinIcon,
	light: CarBatteryLightIcon,
	regular: CarBatteryRegularIcon,
	bold: CarBatteryBoldIcon,
	fill: CarBatteryFillIcon,
	duotone: CarBatteryDuotoneIcon,
} as const;

export function CarBatteryIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CarBatteryIcon as CarBattery };
