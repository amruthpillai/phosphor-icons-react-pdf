import { BatteryPlusVerticalIcon as BatteryPlusVerticalBoldIcon } from "../bold/BatteryPlusVertical";
import { BatteryPlusVerticalIcon as BatteryPlusVerticalDuotoneIcon } from "../duotone/BatteryPlusVertical";
import { BatteryPlusVerticalIcon as BatteryPlusVerticalFillIcon } from "../fill/BatteryPlusVertical";
import { BatteryPlusVerticalIcon as BatteryPlusVerticalLightIcon } from "../light/BatteryPlusVertical";
import { BatteryPlusVerticalIcon as BatteryPlusVerticalRegularIcon } from "../regular/BatteryPlusVertical";
import { BatteryPlusVerticalIcon as BatteryPlusVerticalThinIcon } from "../thin/BatteryPlusVertical";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BatteryPlusVerticalThinIcon,
	light: BatteryPlusVerticalLightIcon,
	regular: BatteryPlusVerticalRegularIcon,
	bold: BatteryPlusVerticalBoldIcon,
	fill: BatteryPlusVerticalFillIcon,
	duotone: BatteryPlusVerticalDuotoneIcon,
} as const;

export function BatteryPlusVerticalIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BatteryPlusVerticalIcon as BatteryPlusVertical };
