import { ShoppingCartIcon as ShoppingCartBoldIcon } from "../bold/ShoppingCart";
import { ShoppingCartIcon as ShoppingCartDuotoneIcon } from "../duotone/ShoppingCart";
import { ShoppingCartIcon as ShoppingCartFillIcon } from "../fill/ShoppingCart";
import { ShoppingCartIcon as ShoppingCartLightIcon } from "../light/ShoppingCart";
import { ShoppingCartIcon as ShoppingCartRegularIcon } from "../regular/ShoppingCart";
import { ShoppingCartIcon as ShoppingCartThinIcon } from "../thin/ShoppingCart";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ShoppingCartThinIcon,
	light: ShoppingCartLightIcon,
	regular: ShoppingCartRegularIcon,
	bold: ShoppingCartBoldIcon,
	fill: ShoppingCartFillIcon,
	duotone: ShoppingCartDuotoneIcon,
} as const;

export function ShoppingCartIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ShoppingCartIcon as ShoppingCart };
