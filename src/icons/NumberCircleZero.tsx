import { NumberCircleZeroIcon as NumberCircleZeroBoldIcon } from "../bold/NumberCircleZero";
import { NumberCircleZeroIcon as NumberCircleZeroDuotoneIcon } from "../duotone/NumberCircleZero";
import { NumberCircleZeroIcon as NumberCircleZeroFillIcon } from "../fill/NumberCircleZero";
import { NumberCircleZeroIcon as NumberCircleZeroLightIcon } from "../light/NumberCircleZero";
import { NumberCircleZeroIcon as NumberCircleZeroRegularIcon } from "../regular/NumberCircleZero";
import { NumberCircleZeroIcon as NumberCircleZeroThinIcon } from "../thin/NumberCircleZero";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NumberCircleZeroThinIcon,
	light: NumberCircleZeroLightIcon,
	regular: NumberCircleZeroRegularIcon,
	bold: NumberCircleZeroBoldIcon,
	fill: NumberCircleZeroFillIcon,
	duotone: NumberCircleZeroDuotoneIcon,
} as const;

export function NumberCircleZeroIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NumberCircleZeroIcon as NumberCircleZero };
