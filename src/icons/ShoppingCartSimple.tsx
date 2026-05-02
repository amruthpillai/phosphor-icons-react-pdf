import { ShoppingCartSimpleIcon as ShoppingCartSimpleBoldIcon } from "../bold/ShoppingCartSimple";
import { ShoppingCartSimpleIcon as ShoppingCartSimpleDuotoneIcon } from "../duotone/ShoppingCartSimple";
import { ShoppingCartSimpleIcon as ShoppingCartSimpleFillIcon } from "../fill/ShoppingCartSimple";
import { ShoppingCartSimpleIcon as ShoppingCartSimpleLightIcon } from "../light/ShoppingCartSimple";
import { ShoppingCartSimpleIcon as ShoppingCartSimpleRegularIcon } from "../regular/ShoppingCartSimple";
import { ShoppingCartSimpleIcon as ShoppingCartSimpleThinIcon } from "../thin/ShoppingCartSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ShoppingCartSimpleThinIcon,
	light: ShoppingCartSimpleLightIcon,
	regular: ShoppingCartSimpleRegularIcon,
	bold: ShoppingCartSimpleBoldIcon,
	fill: ShoppingCartSimpleFillIcon,
	duotone: ShoppingCartSimpleDuotoneIcon,
} as const;

export function ShoppingCartSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ShoppingCartSimpleIcon as ShoppingCartSimple };
