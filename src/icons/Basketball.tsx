import { BasketballIcon as BasketballBoldIcon } from "../bold/Basketball";
import { BasketballIcon as BasketballDuotoneIcon } from "../duotone/Basketball";
import { BasketballIcon as BasketballFillIcon } from "../fill/Basketball";
import { BasketballIcon as BasketballLightIcon } from "../light/Basketball";
import { BasketballIcon as BasketballRegularIcon } from "../regular/Basketball";
import { BasketballIcon as BasketballThinIcon } from "../thin/Basketball";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BasketballThinIcon,
	light: BasketballLightIcon,
	regular: BasketballRegularIcon,
	bold: BasketballBoldIcon,
	fill: BasketballFillIcon,
	duotone: BasketballDuotoneIcon,
} as const;

export function BasketballIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BasketballIcon as Basketball };
