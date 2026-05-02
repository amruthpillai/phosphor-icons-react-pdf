import { NumberZeroIcon as NumberZeroBoldIcon } from "../bold/NumberZero";
import { NumberZeroIcon as NumberZeroDuotoneIcon } from "../duotone/NumberZero";
import { NumberZeroIcon as NumberZeroFillIcon } from "../fill/NumberZero";
import { NumberZeroIcon as NumberZeroLightIcon } from "../light/NumberZero";
import { NumberZeroIcon as NumberZeroRegularIcon } from "../regular/NumberZero";
import { NumberZeroIcon as NumberZeroThinIcon } from "../thin/NumberZero";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NumberZeroThinIcon,
	light: NumberZeroLightIcon,
	regular: NumberZeroRegularIcon,
	bold: NumberZeroBoldIcon,
	fill: NumberZeroFillIcon,
	duotone: NumberZeroDuotoneIcon,
} as const;

export function NumberZeroIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NumberZeroIcon as NumberZero };
