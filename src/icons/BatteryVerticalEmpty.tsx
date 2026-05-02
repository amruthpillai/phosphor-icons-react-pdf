import { BatteryVerticalEmptyIcon as BatteryVerticalEmptyBoldIcon } from "../bold/BatteryVerticalEmpty";
import { BatteryVerticalEmptyIcon as BatteryVerticalEmptyDuotoneIcon } from "../duotone/BatteryVerticalEmpty";
import { BatteryVerticalEmptyIcon as BatteryVerticalEmptyFillIcon } from "../fill/BatteryVerticalEmpty";
import { BatteryVerticalEmptyIcon as BatteryVerticalEmptyLightIcon } from "../light/BatteryVerticalEmpty";
import { BatteryVerticalEmptyIcon as BatteryVerticalEmptyRegularIcon } from "../regular/BatteryVerticalEmpty";
import { BatteryVerticalEmptyIcon as BatteryVerticalEmptyThinIcon } from "../thin/BatteryVerticalEmpty";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BatteryVerticalEmptyThinIcon,
	light: BatteryVerticalEmptyLightIcon,
	regular: BatteryVerticalEmptyRegularIcon,
	bold: BatteryVerticalEmptyBoldIcon,
	fill: BatteryVerticalEmptyFillIcon,
	duotone: BatteryVerticalEmptyDuotoneIcon,
} as const;

export function BatteryVerticalEmptyIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BatteryVerticalEmptyIcon as BatteryVerticalEmpty };
