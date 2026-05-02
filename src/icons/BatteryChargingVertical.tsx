import { BatteryChargingVerticalIcon as BatteryChargingVerticalBoldIcon } from "../bold/BatteryChargingVertical";
import { BatteryChargingVerticalIcon as BatteryChargingVerticalDuotoneIcon } from "../duotone/BatteryChargingVertical";
import { BatteryChargingVerticalIcon as BatteryChargingVerticalFillIcon } from "../fill/BatteryChargingVertical";
import { BatteryChargingVerticalIcon as BatteryChargingVerticalLightIcon } from "../light/BatteryChargingVertical";
import { BatteryChargingVerticalIcon as BatteryChargingVerticalRegularIcon } from "../regular/BatteryChargingVertical";
import { BatteryChargingVerticalIcon as BatteryChargingVerticalThinIcon } from "../thin/BatteryChargingVertical";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BatteryChargingVerticalThinIcon,
	light: BatteryChargingVerticalLightIcon,
	regular: BatteryChargingVerticalRegularIcon,
	bold: BatteryChargingVerticalBoldIcon,
	fill: BatteryChargingVerticalFillIcon,
	duotone: BatteryChargingVerticalDuotoneIcon,
} as const;

export function BatteryChargingVerticalIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BatteryChargingVerticalIcon as BatteryChargingVertical };
