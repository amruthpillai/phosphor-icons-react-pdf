import { BatteryEmptyIcon as BatteryEmptyBoldIcon } from "../bold/BatteryEmpty";
import { BatteryEmptyIcon as BatteryEmptyDuotoneIcon } from "../duotone/BatteryEmpty";
import { BatteryEmptyIcon as BatteryEmptyFillIcon } from "../fill/BatteryEmpty";
import { BatteryEmptyIcon as BatteryEmptyLightIcon } from "../light/BatteryEmpty";
import { BatteryEmptyIcon as BatteryEmptyRegularIcon } from "../regular/BatteryEmpty";
import { BatteryEmptyIcon as BatteryEmptyThinIcon } from "../thin/BatteryEmpty";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BatteryEmptyThinIcon,
	light: BatteryEmptyLightIcon,
	regular: BatteryEmptyRegularIcon,
	bold: BatteryEmptyBoldIcon,
	fill: BatteryEmptyFillIcon,
	duotone: BatteryEmptyDuotoneIcon,
} as const;

export function BatteryEmptyIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BatteryEmptyIcon as BatteryEmpty };
