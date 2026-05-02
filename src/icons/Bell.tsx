import { BellIcon as BellBoldIcon } from "../bold/Bell";
import { BellIcon as BellDuotoneIcon } from "../duotone/Bell";
import { BellIcon as BellFillIcon } from "../fill/Bell";
import { BellIcon as BellLightIcon } from "../light/Bell";
import { BellIcon as BellRegularIcon } from "../regular/Bell";
import { BellIcon as BellThinIcon } from "../thin/Bell";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BellThinIcon,
	light: BellLightIcon,
	regular: BellRegularIcon,
	bold: BellBoldIcon,
	fill: BellFillIcon,
	duotone: BellDuotoneIcon,
} as const;

export function BellIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BellIcon as Bell };
