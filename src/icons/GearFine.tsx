import { GearFineIcon as GearFineBoldIcon } from "../bold/GearFine";
import { GearFineIcon as GearFineDuotoneIcon } from "../duotone/GearFine";
import { GearFineIcon as GearFineFillIcon } from "../fill/GearFine";
import { GearFineIcon as GearFineLightIcon } from "../light/GearFine";
import { GearFineIcon as GearFineRegularIcon } from "../regular/GearFine";
import { GearFineIcon as GearFineThinIcon } from "../thin/GearFine";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GearFineThinIcon,
	light: GearFineLightIcon,
	regular: GearFineRegularIcon,
	bold: GearFineBoldIcon,
	fill: GearFineFillIcon,
	duotone: GearFineDuotoneIcon,
} as const;

export function GearFineIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GearFineIcon as GearFine };
