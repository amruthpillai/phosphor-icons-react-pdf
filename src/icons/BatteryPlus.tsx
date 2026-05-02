import { BatteryPlusIcon as BatteryPlusBoldIcon } from "../bold/BatteryPlus";
import { BatteryPlusIcon as BatteryPlusDuotoneIcon } from "../duotone/BatteryPlus";
import { BatteryPlusIcon as BatteryPlusFillIcon } from "../fill/BatteryPlus";
import { BatteryPlusIcon as BatteryPlusLightIcon } from "../light/BatteryPlus";
import { BatteryPlusIcon as BatteryPlusRegularIcon } from "../regular/BatteryPlus";
import { BatteryPlusIcon as BatteryPlusThinIcon } from "../thin/BatteryPlus";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BatteryPlusThinIcon,
	light: BatteryPlusLightIcon,
	regular: BatteryPlusRegularIcon,
	bold: BatteryPlusBoldIcon,
	fill: BatteryPlusFillIcon,
	duotone: BatteryPlusDuotoneIcon,
} as const;

export function BatteryPlusIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BatteryPlusIcon as BatteryPlus };
