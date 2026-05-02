import { NumberSquareThreeIcon as NumberSquareThreeBoldIcon } from "../bold/NumberSquareThree";
import { NumberSquareThreeIcon as NumberSquareThreeDuotoneIcon } from "../duotone/NumberSquareThree";
import { NumberSquareThreeIcon as NumberSquareThreeFillIcon } from "../fill/NumberSquareThree";
import { NumberSquareThreeIcon as NumberSquareThreeLightIcon } from "../light/NumberSquareThree";
import { NumberSquareThreeIcon as NumberSquareThreeRegularIcon } from "../regular/NumberSquareThree";
import { NumberSquareThreeIcon as NumberSquareThreeThinIcon } from "../thin/NumberSquareThree";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NumberSquareThreeThinIcon,
	light: NumberSquareThreeLightIcon,
	regular: NumberSquareThreeRegularIcon,
	bold: NumberSquareThreeBoldIcon,
	fill: NumberSquareThreeFillIcon,
	duotone: NumberSquareThreeDuotoneIcon,
} as const;

export function NumberSquareThreeIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NumberSquareThreeIcon as NumberSquareThree };
