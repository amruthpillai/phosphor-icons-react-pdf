import { NumberSquareOneIcon as NumberSquareOneBoldIcon } from "../bold/NumberSquareOne";
import { NumberSquareOneIcon as NumberSquareOneDuotoneIcon } from "../duotone/NumberSquareOne";
import { NumberSquareOneIcon as NumberSquareOneFillIcon } from "../fill/NumberSquareOne";
import { NumberSquareOneIcon as NumberSquareOneLightIcon } from "../light/NumberSquareOne";
import { NumberSquareOneIcon as NumberSquareOneRegularIcon } from "../regular/NumberSquareOne";
import { NumberSquareOneIcon as NumberSquareOneThinIcon } from "../thin/NumberSquareOne";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NumberSquareOneThinIcon,
	light: NumberSquareOneLightIcon,
	regular: NumberSquareOneRegularIcon,
	bold: NumberSquareOneBoldIcon,
	fill: NumberSquareOneFillIcon,
	duotone: NumberSquareOneDuotoneIcon,
} as const;

export function NumberSquareOneIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NumberSquareOneIcon as NumberSquareOne };
