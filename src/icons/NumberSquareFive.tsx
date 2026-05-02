import { NumberSquareFiveIcon as NumberSquareFiveBoldIcon } from "../bold/NumberSquareFive";
import { NumberSquareFiveIcon as NumberSquareFiveDuotoneIcon } from "../duotone/NumberSquareFive";
import { NumberSquareFiveIcon as NumberSquareFiveFillIcon } from "../fill/NumberSquareFive";
import { NumberSquareFiveIcon as NumberSquareFiveLightIcon } from "../light/NumberSquareFive";
import { NumberSquareFiveIcon as NumberSquareFiveRegularIcon } from "../regular/NumberSquareFive";
import { NumberSquareFiveIcon as NumberSquareFiveThinIcon } from "../thin/NumberSquareFive";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NumberSquareFiveThinIcon,
	light: NumberSquareFiveLightIcon,
	regular: NumberSquareFiveRegularIcon,
	bold: NumberSquareFiveBoldIcon,
	fill: NumberSquareFiveFillIcon,
	duotone: NumberSquareFiveDuotoneIcon,
} as const;

export function NumberSquareFiveIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NumberSquareFiveIcon as NumberSquareFive };
