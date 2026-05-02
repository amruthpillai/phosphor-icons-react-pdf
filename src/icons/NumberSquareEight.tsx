import { NumberSquareEightIcon as NumberSquareEightBoldIcon } from "../bold/NumberSquareEight";
import { NumberSquareEightIcon as NumberSquareEightDuotoneIcon } from "../duotone/NumberSquareEight";
import { NumberSquareEightIcon as NumberSquareEightFillIcon } from "../fill/NumberSquareEight";
import { NumberSquareEightIcon as NumberSquareEightLightIcon } from "../light/NumberSquareEight";
import { NumberSquareEightIcon as NumberSquareEightRegularIcon } from "../regular/NumberSquareEight";
import { NumberSquareEightIcon as NumberSquareEightThinIcon } from "../thin/NumberSquareEight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NumberSquareEightThinIcon,
	light: NumberSquareEightLightIcon,
	regular: NumberSquareEightRegularIcon,
	bold: NumberSquareEightBoldIcon,
	fill: NumberSquareEightFillIcon,
	duotone: NumberSquareEightDuotoneIcon,
} as const;

export function NumberSquareEightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NumberSquareEightIcon as NumberSquareEight };
