import { PlugChargingIcon as PlugChargingBoldIcon } from "../bold/PlugCharging";
import { PlugChargingIcon as PlugChargingDuotoneIcon } from "../duotone/PlugCharging";
import { PlugChargingIcon as PlugChargingFillIcon } from "../fill/PlugCharging";
import { PlugChargingIcon as PlugChargingLightIcon } from "../light/PlugCharging";
import { PlugChargingIcon as PlugChargingRegularIcon } from "../regular/PlugCharging";
import { PlugChargingIcon as PlugChargingThinIcon } from "../thin/PlugCharging";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PlugChargingThinIcon,
	light: PlugChargingLightIcon,
	regular: PlugChargingRegularIcon,
	bold: PlugChargingBoldIcon,
	fill: PlugChargingFillIcon,
	duotone: PlugChargingDuotoneIcon,
} as const;

export function PlugChargingIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PlugChargingIcon as PlugCharging };
