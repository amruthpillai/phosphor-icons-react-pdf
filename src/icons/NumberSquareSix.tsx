import { NumberSquareSixIcon as NumberSquareSixBoldIcon } from "../bold/NumberSquareSix";
import { NumberSquareSixIcon as NumberSquareSixDuotoneIcon } from "../duotone/NumberSquareSix";
import { NumberSquareSixIcon as NumberSquareSixFillIcon } from "../fill/NumberSquareSix";
import { NumberSquareSixIcon as NumberSquareSixLightIcon } from "../light/NumberSquareSix";
import { NumberSquareSixIcon as NumberSquareSixRegularIcon } from "../regular/NumberSquareSix";
import { NumberSquareSixIcon as NumberSquareSixThinIcon } from "../thin/NumberSquareSix";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NumberSquareSixThinIcon,
	light: NumberSquareSixLightIcon,
	regular: NumberSquareSixRegularIcon,
	bold: NumberSquareSixBoldIcon,
	fill: NumberSquareSixFillIcon,
	duotone: NumberSquareSixDuotoneIcon,
} as const;

export function NumberSquareSixIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NumberSquareSixIcon as NumberSquareSix };
