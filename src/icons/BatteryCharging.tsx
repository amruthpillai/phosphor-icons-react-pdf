import { BatteryChargingIcon as BatteryChargingBoldIcon } from "../bold/BatteryCharging";
import { BatteryChargingIcon as BatteryChargingDuotoneIcon } from "../duotone/BatteryCharging";
import { BatteryChargingIcon as BatteryChargingFillIcon } from "../fill/BatteryCharging";
import { BatteryChargingIcon as BatteryChargingLightIcon } from "../light/BatteryCharging";
import { BatteryChargingIcon as BatteryChargingRegularIcon } from "../regular/BatteryCharging";
import { BatteryChargingIcon as BatteryChargingThinIcon } from "../thin/BatteryCharging";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BatteryChargingThinIcon,
	light: BatteryChargingLightIcon,
	regular: BatteryChargingRegularIcon,
	bold: BatteryChargingBoldIcon,
	fill: BatteryChargingFillIcon,
	duotone: BatteryChargingDuotoneIcon,
} as const;

export function BatteryChargingIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BatteryChargingIcon as BatteryCharging };
