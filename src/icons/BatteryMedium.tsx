import { BatteryMediumIcon as BatteryMediumBoldIcon } from "../bold/BatteryMedium";
import { BatteryMediumIcon as BatteryMediumDuotoneIcon } from "../duotone/BatteryMedium";
import { BatteryMediumIcon as BatteryMediumFillIcon } from "../fill/BatteryMedium";
import { BatteryMediumIcon as BatteryMediumLightIcon } from "../light/BatteryMedium";
import { BatteryMediumIcon as BatteryMediumRegularIcon } from "../regular/BatteryMedium";
import { BatteryMediumIcon as BatteryMediumThinIcon } from "../thin/BatteryMedium";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BatteryMediumThinIcon,
	light: BatteryMediumLightIcon,
	regular: BatteryMediumRegularIcon,
	bold: BatteryMediumBoldIcon,
	fill: BatteryMediumFillIcon,
	duotone: BatteryMediumDuotoneIcon,
} as const;

export function BatteryMediumIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BatteryMediumIcon as BatteryMedium };
