import { BatteryFullIcon as BatteryFullBoldIcon } from "../bold/BatteryFull";
import { BatteryFullIcon as BatteryFullDuotoneIcon } from "../duotone/BatteryFull";
import { BatteryFullIcon as BatteryFullFillIcon } from "../fill/BatteryFull";
import { BatteryFullIcon as BatteryFullLightIcon } from "../light/BatteryFull";
import { BatteryFullIcon as BatteryFullRegularIcon } from "../regular/BatteryFull";
import { BatteryFullIcon as BatteryFullThinIcon } from "../thin/BatteryFull";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BatteryFullThinIcon,
	light: BatteryFullLightIcon,
	regular: BatteryFullRegularIcon,
	bold: BatteryFullBoldIcon,
	fill: BatteryFullFillIcon,
	duotone: BatteryFullDuotoneIcon,
} as const;

export function BatteryFullIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BatteryFullIcon as BatteryFull };
