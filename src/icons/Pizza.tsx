import { PizzaIcon as PizzaBoldIcon } from "../bold/Pizza";
import { PizzaIcon as PizzaDuotoneIcon } from "../duotone/Pizza";
import { PizzaIcon as PizzaFillIcon } from "../fill/Pizza";
import { PizzaIcon as PizzaLightIcon } from "../light/Pizza";
import { PizzaIcon as PizzaRegularIcon } from "../regular/Pizza";
import { PizzaIcon as PizzaThinIcon } from "../thin/Pizza";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PizzaThinIcon,
	light: PizzaLightIcon,
	regular: PizzaRegularIcon,
	bold: PizzaBoldIcon,
	fill: PizzaFillIcon,
	duotone: PizzaDuotoneIcon,
} as const;

export function PizzaIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PizzaIcon as Pizza };
