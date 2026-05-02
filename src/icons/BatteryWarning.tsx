import { BatteryWarningIcon as BatteryWarningBoldIcon } from "../bold/BatteryWarning";
import { BatteryWarningIcon as BatteryWarningDuotoneIcon } from "../duotone/BatteryWarning";
import { BatteryWarningIcon as BatteryWarningFillIcon } from "../fill/BatteryWarning";
import { BatteryWarningIcon as BatteryWarningLightIcon } from "../light/BatteryWarning";
import { BatteryWarningIcon as BatteryWarningRegularIcon } from "../regular/BatteryWarning";
import { BatteryWarningIcon as BatteryWarningThinIcon } from "../thin/BatteryWarning";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BatteryWarningThinIcon,
	light: BatteryWarningLightIcon,
	regular: BatteryWarningRegularIcon,
	bold: BatteryWarningBoldIcon,
	fill: BatteryWarningFillIcon,
	duotone: BatteryWarningDuotoneIcon,
} as const;

export function BatteryWarningIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BatteryWarningIcon as BatteryWarning };
