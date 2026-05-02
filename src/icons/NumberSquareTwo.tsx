import { NumberSquareTwoIcon as NumberSquareTwoBoldIcon } from "../bold/NumberSquareTwo";
import { NumberSquareTwoIcon as NumberSquareTwoDuotoneIcon } from "../duotone/NumberSquareTwo";
import { NumberSquareTwoIcon as NumberSquareTwoFillIcon } from "../fill/NumberSquareTwo";
import { NumberSquareTwoIcon as NumberSquareTwoLightIcon } from "../light/NumberSquareTwo";
import { NumberSquareTwoIcon as NumberSquareTwoRegularIcon } from "../regular/NumberSquareTwo";
import { NumberSquareTwoIcon as NumberSquareTwoThinIcon } from "../thin/NumberSquareTwo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NumberSquareTwoThinIcon,
	light: NumberSquareTwoLightIcon,
	regular: NumberSquareTwoRegularIcon,
	bold: NumberSquareTwoBoldIcon,
	fill: NumberSquareTwoFillIcon,
	duotone: NumberSquareTwoDuotoneIcon,
} as const;

export function NumberSquareTwoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NumberSquareTwoIcon as NumberSquareTwo };
