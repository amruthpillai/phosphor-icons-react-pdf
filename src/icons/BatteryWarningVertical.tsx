import { BatteryWarningVerticalIcon as BatteryWarningVerticalBoldIcon } from "../bold/BatteryWarningVertical";
import { BatteryWarningVerticalIcon as BatteryWarningVerticalDuotoneIcon } from "../duotone/BatteryWarningVertical";
import { BatteryWarningVerticalIcon as BatteryWarningVerticalFillIcon } from "../fill/BatteryWarningVertical";
import { BatteryWarningVerticalIcon as BatteryWarningVerticalLightIcon } from "../light/BatteryWarningVertical";
import { BatteryWarningVerticalIcon as BatteryWarningVerticalRegularIcon } from "../regular/BatteryWarningVertical";
import { BatteryWarningVerticalIcon as BatteryWarningVerticalThinIcon } from "../thin/BatteryWarningVertical";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BatteryWarningVerticalThinIcon,
	light: BatteryWarningVerticalLightIcon,
	regular: BatteryWarningVerticalRegularIcon,
	bold: BatteryWarningVerticalBoldIcon,
	fill: BatteryWarningVerticalFillIcon,
	duotone: BatteryWarningVerticalDuotoneIcon,
} as const;

export function BatteryWarningVerticalIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BatteryWarningVerticalIcon as BatteryWarningVertical };
