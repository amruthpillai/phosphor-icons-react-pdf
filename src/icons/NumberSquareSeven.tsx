import { NumberSquareSevenIcon as NumberSquareSevenBoldIcon } from "../bold/NumberSquareSeven";
import { NumberSquareSevenIcon as NumberSquareSevenDuotoneIcon } from "../duotone/NumberSquareSeven";
import { NumberSquareSevenIcon as NumberSquareSevenFillIcon } from "../fill/NumberSquareSeven";
import { NumberSquareSevenIcon as NumberSquareSevenLightIcon } from "../light/NumberSquareSeven";
import { NumberSquareSevenIcon as NumberSquareSevenRegularIcon } from "../regular/NumberSquareSeven";
import { NumberSquareSevenIcon as NumberSquareSevenThinIcon } from "../thin/NumberSquareSeven";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NumberSquareSevenThinIcon,
	light: NumberSquareSevenLightIcon,
	regular: NumberSquareSevenRegularIcon,
	bold: NumberSquareSevenBoldIcon,
	fill: NumberSquareSevenFillIcon,
	duotone: NumberSquareSevenDuotoneIcon,
} as const;

export function NumberSquareSevenIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NumberSquareSevenIcon as NumberSquareSeven };
