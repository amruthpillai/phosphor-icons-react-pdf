import { CoffeeBeanIcon as CoffeeBeanBoldIcon } from "../bold/CoffeeBean";
import { CoffeeBeanIcon as CoffeeBeanDuotoneIcon } from "../duotone/CoffeeBean";
import { CoffeeBeanIcon as CoffeeBeanFillIcon } from "../fill/CoffeeBean";
import { CoffeeBeanIcon as CoffeeBeanLightIcon } from "../light/CoffeeBean";
import { CoffeeBeanIcon as CoffeeBeanRegularIcon } from "../regular/CoffeeBean";
import { CoffeeBeanIcon as CoffeeBeanThinIcon } from "../thin/CoffeeBean";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CoffeeBeanThinIcon,
	light: CoffeeBeanLightIcon,
	regular: CoffeeBeanRegularIcon,
	bold: CoffeeBeanBoldIcon,
	fill: CoffeeBeanFillIcon,
	duotone: CoffeeBeanDuotoneIcon,
} as const;

export function CoffeeBeanIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CoffeeBeanIcon as CoffeeBean };
