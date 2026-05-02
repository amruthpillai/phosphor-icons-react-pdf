import { BatteryVerticalHighIcon as BatteryVerticalHighBoldIcon } from "../bold/BatteryVerticalHigh";
import { BatteryVerticalHighIcon as BatteryVerticalHighDuotoneIcon } from "../duotone/BatteryVerticalHigh";
import { BatteryVerticalHighIcon as BatteryVerticalHighFillIcon } from "../fill/BatteryVerticalHigh";
import { BatteryVerticalHighIcon as BatteryVerticalHighLightIcon } from "../light/BatteryVerticalHigh";
import { BatteryVerticalHighIcon as BatteryVerticalHighRegularIcon } from "../regular/BatteryVerticalHigh";
import { BatteryVerticalHighIcon as BatteryVerticalHighThinIcon } from "../thin/BatteryVerticalHigh";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BatteryVerticalHighThinIcon,
	light: BatteryVerticalHighLightIcon,
	regular: BatteryVerticalHighRegularIcon,
	bold: BatteryVerticalHighBoldIcon,
	fill: BatteryVerticalHighFillIcon,
	duotone: BatteryVerticalHighDuotoneIcon,
} as const;

export function BatteryVerticalHighIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BatteryVerticalHighIcon as BatteryVerticalHigh };
