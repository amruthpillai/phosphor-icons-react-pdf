import { BagIcon as BagBoldIcon } from "../bold/Bag";
import { BagIcon as BagDuotoneIcon } from "../duotone/Bag";
import { BagIcon as BagFillIcon } from "../fill/Bag";
import { BagIcon as BagLightIcon } from "../light/Bag";
import { BagIcon as BagRegularIcon } from "../regular/Bag";
import { BagIcon as BagThinIcon } from "../thin/Bag";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BagThinIcon,
	light: BagLightIcon,
	regular: BagRegularIcon,
	bold: BagBoldIcon,
	fill: BagFillIcon,
	duotone: BagDuotoneIcon,
} as const;

export function BagIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BagIcon as Bag };
