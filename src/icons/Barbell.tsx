import { BarbellIcon as BarbellBoldIcon } from "../bold/Barbell";
import { BarbellIcon as BarbellDuotoneIcon } from "../duotone/Barbell";
import { BarbellIcon as BarbellFillIcon } from "../fill/Barbell";
import { BarbellIcon as BarbellLightIcon } from "../light/Barbell";
import { BarbellIcon as BarbellRegularIcon } from "../regular/Barbell";
import { BarbellIcon as BarbellThinIcon } from "../thin/Barbell";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BarbellThinIcon,
	light: BarbellLightIcon,
	regular: BarbellRegularIcon,
	bold: BarbellBoldIcon,
	fill: BarbellFillIcon,
	duotone: BarbellDuotoneIcon,
} as const;

export function BarbellIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BarbellIcon as Barbell };
