import { ShoppingBagIcon as ShoppingBagBoldIcon } from "../bold/ShoppingBag";
import { ShoppingBagIcon as ShoppingBagDuotoneIcon } from "../duotone/ShoppingBag";
import { ShoppingBagIcon as ShoppingBagFillIcon } from "../fill/ShoppingBag";
import { ShoppingBagIcon as ShoppingBagLightIcon } from "../light/ShoppingBag";
import { ShoppingBagIcon as ShoppingBagRegularIcon } from "../regular/ShoppingBag";
import { ShoppingBagIcon as ShoppingBagThinIcon } from "../thin/ShoppingBag";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ShoppingBagThinIcon,
	light: ShoppingBagLightIcon,
	regular: ShoppingBagRegularIcon,
	bold: ShoppingBagBoldIcon,
	fill: ShoppingBagFillIcon,
	duotone: ShoppingBagDuotoneIcon,
} as const;

export function ShoppingBagIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ShoppingBagIcon as ShoppingBag };
