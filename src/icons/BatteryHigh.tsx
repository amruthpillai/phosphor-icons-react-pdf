import { BatteryHighIcon as BatteryHighBoldIcon } from "../bold/BatteryHigh";
import { BatteryHighIcon as BatteryHighDuotoneIcon } from "../duotone/BatteryHigh";
import { BatteryHighIcon as BatteryHighFillIcon } from "../fill/BatteryHigh";
import { BatteryHighIcon as BatteryHighLightIcon } from "../light/BatteryHigh";
import { BatteryHighIcon as BatteryHighRegularIcon } from "../regular/BatteryHigh";
import { BatteryHighIcon as BatteryHighThinIcon } from "../thin/BatteryHigh";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BatteryHighThinIcon,
	light: BatteryHighLightIcon,
	regular: BatteryHighRegularIcon,
	bold: BatteryHighBoldIcon,
	fill: BatteryHighFillIcon,
	duotone: BatteryHighDuotoneIcon,
} as const;

export function BatteryHighIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BatteryHighIcon as BatteryHigh };
