import { StackMinusIcon as StackMinusBoldIcon } from "../bold/StackMinus";
import { StackMinusIcon as StackMinusDuotoneIcon } from "../duotone/StackMinus";
import { StackMinusIcon as StackMinusFillIcon } from "../fill/StackMinus";
import { StackMinusIcon as StackMinusLightIcon } from "../light/StackMinus";
import { StackMinusIcon as StackMinusRegularIcon } from "../regular/StackMinus";
import { StackMinusIcon as StackMinusThinIcon } from "../thin/StackMinus";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: StackMinusThinIcon,
	light: StackMinusLightIcon,
	regular: StackMinusRegularIcon,
	bold: StackMinusBoldIcon,
	fill: StackMinusFillIcon,
	duotone: StackMinusDuotoneIcon,
} as const;

export function StackMinusIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { StackMinusIcon as StackMinus };
