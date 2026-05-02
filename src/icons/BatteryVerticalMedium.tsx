import { BatteryVerticalMediumIcon as BatteryVerticalMediumBoldIcon } from "../bold/BatteryVerticalMedium";
import { BatteryVerticalMediumIcon as BatteryVerticalMediumDuotoneIcon } from "../duotone/BatteryVerticalMedium";
import { BatteryVerticalMediumIcon as BatteryVerticalMediumFillIcon } from "../fill/BatteryVerticalMedium";
import { BatteryVerticalMediumIcon as BatteryVerticalMediumLightIcon } from "../light/BatteryVerticalMedium";
import { BatteryVerticalMediumIcon as BatteryVerticalMediumRegularIcon } from "../regular/BatteryVerticalMedium";
import { BatteryVerticalMediumIcon as BatteryVerticalMediumThinIcon } from "../thin/BatteryVerticalMedium";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BatteryVerticalMediumThinIcon,
	light: BatteryVerticalMediumLightIcon,
	regular: BatteryVerticalMediumRegularIcon,
	bold: BatteryVerticalMediumBoldIcon,
	fill: BatteryVerticalMediumFillIcon,
	duotone: BatteryVerticalMediumDuotoneIcon,
} as const;

export function BatteryVerticalMediumIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BatteryVerticalMediumIcon as BatteryVerticalMedium };
