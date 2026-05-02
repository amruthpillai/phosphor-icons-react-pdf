import { NumberSquareZeroIcon as NumberSquareZeroBoldIcon } from "../bold/NumberSquareZero";
import { NumberSquareZeroIcon as NumberSquareZeroDuotoneIcon } from "../duotone/NumberSquareZero";
import { NumberSquareZeroIcon as NumberSquareZeroFillIcon } from "../fill/NumberSquareZero";
import { NumberSquareZeroIcon as NumberSquareZeroLightIcon } from "../light/NumberSquareZero";
import { NumberSquareZeroIcon as NumberSquareZeroRegularIcon } from "../regular/NumberSquareZero";
import { NumberSquareZeroIcon as NumberSquareZeroThinIcon } from "../thin/NumberSquareZero";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NumberSquareZeroThinIcon,
	light: NumberSquareZeroLightIcon,
	regular: NumberSquareZeroRegularIcon,
	bold: NumberSquareZeroBoldIcon,
	fill: NumberSquareZeroFillIcon,
	duotone: NumberSquareZeroDuotoneIcon,
} as const;

export function NumberSquareZeroIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NumberSquareZeroIcon as NumberSquareZero };
