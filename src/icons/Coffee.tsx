import { CoffeeIcon as CoffeeBoldIcon } from "../bold/Coffee";
import { CoffeeIcon as CoffeeDuotoneIcon } from "../duotone/Coffee";
import { CoffeeIcon as CoffeeFillIcon } from "../fill/Coffee";
import { CoffeeIcon as CoffeeLightIcon } from "../light/Coffee";
import { CoffeeIcon as CoffeeRegularIcon } from "../regular/Coffee";
import { CoffeeIcon as CoffeeThinIcon } from "../thin/Coffee";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CoffeeThinIcon,
	light: CoffeeLightIcon,
	regular: CoffeeRegularIcon,
	bold: CoffeeBoldIcon,
	fill: CoffeeFillIcon,
	duotone: CoffeeDuotoneIcon,
} as const;

export function CoffeeIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CoffeeIcon as Coffee };
