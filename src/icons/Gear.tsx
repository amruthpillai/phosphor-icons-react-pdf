import { GearIcon as GearBoldIcon } from "../bold/Gear";
import { GearIcon as GearDuotoneIcon } from "../duotone/Gear";
import { GearIcon as GearFillIcon } from "../fill/Gear";
import { GearIcon as GearLightIcon } from "../light/Gear";
import { GearIcon as GearRegularIcon } from "../regular/Gear";
import { GearIcon as GearThinIcon } from "../thin/Gear";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GearThinIcon,
	light: GearLightIcon,
	regular: GearRegularIcon,
	bold: GearBoldIcon,
	fill: GearFillIcon,
	duotone: GearDuotoneIcon,
} as const;

export function GearIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GearIcon as Gear };
