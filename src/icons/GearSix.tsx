import { GearSixIcon as GearSixBoldIcon } from "../bold/GearSix";
import { GearSixIcon as GearSixDuotoneIcon } from "../duotone/GearSix";
import { GearSixIcon as GearSixFillIcon } from "../fill/GearSix";
import { GearSixIcon as GearSixLightIcon } from "../light/GearSix";
import { GearSixIcon as GearSixRegularIcon } from "../regular/GearSix";
import { GearSixIcon as GearSixThinIcon } from "../thin/GearSix";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GearSixThinIcon,
	light: GearSixLightIcon,
	regular: GearSixRegularIcon,
	bold: GearSixBoldIcon,
	fill: GearSixFillIcon,
	duotone: GearSixDuotoneIcon,
} as const;

export function GearSixIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GearSixIcon as GearSix };
