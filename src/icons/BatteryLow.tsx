import { BatteryLowIcon as BatteryLowBoldIcon } from "../bold/BatteryLow";
import { BatteryLowIcon as BatteryLowDuotoneIcon } from "../duotone/BatteryLow";
import { BatteryLowIcon as BatteryLowFillIcon } from "../fill/BatteryLow";
import { BatteryLowIcon as BatteryLowLightIcon } from "../light/BatteryLow";
import { BatteryLowIcon as BatteryLowRegularIcon } from "../regular/BatteryLow";
import { BatteryLowIcon as BatteryLowThinIcon } from "../thin/BatteryLow";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BatteryLowThinIcon,
	light: BatteryLowLightIcon,
	regular: BatteryLowRegularIcon,
	bold: BatteryLowBoldIcon,
	fill: BatteryLowFillIcon,
	duotone: BatteryLowDuotoneIcon,
} as const;

export function BatteryLowIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BatteryLowIcon as BatteryLow };
