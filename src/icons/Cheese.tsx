import { CheeseIcon as CheeseBoldIcon } from "../bold/Cheese";
import { CheeseIcon as CheeseDuotoneIcon } from "../duotone/Cheese";
import { CheeseIcon as CheeseFillIcon } from "../fill/Cheese";
import { CheeseIcon as CheeseLightIcon } from "../light/Cheese";
import { CheeseIcon as CheeseRegularIcon } from "../regular/Cheese";
import { CheeseIcon as CheeseThinIcon } from "../thin/Cheese";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CheeseThinIcon,
	light: CheeseLightIcon,
	regular: CheeseRegularIcon,
	bold: CheeseBoldIcon,
	fill: CheeseFillIcon,
	duotone: CheeseDuotoneIcon,
} as const;

export function CheeseIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CheeseIcon as Cheese };
