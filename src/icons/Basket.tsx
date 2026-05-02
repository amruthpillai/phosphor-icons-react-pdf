import { BasketIcon as BasketBoldIcon } from "../bold/Basket";
import { BasketIcon as BasketDuotoneIcon } from "../duotone/Basket";
import { BasketIcon as BasketFillIcon } from "../fill/Basket";
import { BasketIcon as BasketLightIcon } from "../light/Basket";
import { BasketIcon as BasketRegularIcon } from "../regular/Basket";
import { BasketIcon as BasketThinIcon } from "../thin/Basket";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BasketThinIcon,
	light: BasketLightIcon,
	regular: BasketRegularIcon,
	bold: BasketBoldIcon,
	fill: BasketFillIcon,
	duotone: BasketDuotoneIcon,
} as const;

export function BasketIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BasketIcon as Basket };
