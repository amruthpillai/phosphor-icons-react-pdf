import { BusIcon as BusBoldIcon } from "../bold/Bus";
import { BusIcon as BusDuotoneIcon } from "../duotone/Bus";
import { BusIcon as BusFillIcon } from "../fill/Bus";
import { BusIcon as BusLightIcon } from "../light/Bus";
import { BusIcon as BusRegularIcon } from "../regular/Bus";
import { BusIcon as BusThinIcon } from "../thin/Bus";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BusThinIcon,
	light: BusLightIcon,
	regular: BusRegularIcon,
	bold: BusBoldIcon,
	fill: BusFillIcon,
	duotone: BusDuotoneIcon,
} as const;

export function BusIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BusIcon as Bus };
