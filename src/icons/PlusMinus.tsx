import { PlusMinusIcon as PlusMinusBoldIcon } from "../bold/PlusMinus";
import { PlusMinusIcon as PlusMinusDuotoneIcon } from "../duotone/PlusMinus";
import { PlusMinusIcon as PlusMinusFillIcon } from "../fill/PlusMinus";
import { PlusMinusIcon as PlusMinusLightIcon } from "../light/PlusMinus";
import { PlusMinusIcon as PlusMinusRegularIcon } from "../regular/PlusMinus";
import { PlusMinusIcon as PlusMinusThinIcon } from "../thin/PlusMinus";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PlusMinusThinIcon,
	light: PlusMinusLightIcon,
	regular: PlusMinusRegularIcon,
	bold: PlusMinusBoldIcon,
	fill: PlusMinusFillIcon,
	duotone: PlusMinusDuotoneIcon,
} as const;

export function PlusMinusIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PlusMinusIcon as PlusMinus };
