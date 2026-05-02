import { BatteryVerticalFullIcon as BatteryVerticalFullBoldIcon } from "../bold/BatteryVerticalFull";
import { BatteryVerticalFullIcon as BatteryVerticalFullDuotoneIcon } from "../duotone/BatteryVerticalFull";
import { BatteryVerticalFullIcon as BatteryVerticalFullFillIcon } from "../fill/BatteryVerticalFull";
import { BatteryVerticalFullIcon as BatteryVerticalFullLightIcon } from "../light/BatteryVerticalFull";
import { BatteryVerticalFullIcon as BatteryVerticalFullRegularIcon } from "../regular/BatteryVerticalFull";
import { BatteryVerticalFullIcon as BatteryVerticalFullThinIcon } from "../thin/BatteryVerticalFull";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BatteryVerticalFullThinIcon,
	light: BatteryVerticalFullLightIcon,
	regular: BatteryVerticalFullRegularIcon,
	bold: BatteryVerticalFullBoldIcon,
	fill: BatteryVerticalFullFillIcon,
	duotone: BatteryVerticalFullDuotoneIcon,
} as const;

export function BatteryVerticalFullIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BatteryVerticalFullIcon as BatteryVerticalFull };
