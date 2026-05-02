import { BatteryVerticalLowIcon as BatteryVerticalLowBoldIcon } from "../bold/BatteryVerticalLow";
import { BatteryVerticalLowIcon as BatteryVerticalLowDuotoneIcon } from "../duotone/BatteryVerticalLow";
import { BatteryVerticalLowIcon as BatteryVerticalLowFillIcon } from "../fill/BatteryVerticalLow";
import { BatteryVerticalLowIcon as BatteryVerticalLowLightIcon } from "../light/BatteryVerticalLow";
import { BatteryVerticalLowIcon as BatteryVerticalLowRegularIcon } from "../regular/BatteryVerticalLow";
import { BatteryVerticalLowIcon as BatteryVerticalLowThinIcon } from "../thin/BatteryVerticalLow";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BatteryVerticalLowThinIcon,
	light: BatteryVerticalLowLightIcon,
	regular: BatteryVerticalLowRegularIcon,
	bold: BatteryVerticalLowBoldIcon,
	fill: BatteryVerticalLowFillIcon,
	duotone: BatteryVerticalLowDuotoneIcon,
} as const;

export function BatteryVerticalLowIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BatteryVerticalLowIcon as BatteryVerticalLow };
