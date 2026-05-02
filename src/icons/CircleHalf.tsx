import { CircleHalfIcon as CircleHalfBoldIcon } from "../bold/CircleHalf";
import { CircleHalfIcon as CircleHalfDuotoneIcon } from "../duotone/CircleHalf";
import { CircleHalfIcon as CircleHalfFillIcon } from "../fill/CircleHalf";
import { CircleHalfIcon as CircleHalfLightIcon } from "../light/CircleHalf";
import { CircleHalfIcon as CircleHalfRegularIcon } from "../regular/CircleHalf";
import { CircleHalfIcon as CircleHalfThinIcon } from "../thin/CircleHalf";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CircleHalfThinIcon,
	light: CircleHalfLightIcon,
	regular: CircleHalfRegularIcon,
	bold: CircleHalfBoldIcon,
	fill: CircleHalfFillIcon,
	duotone: CircleHalfDuotoneIcon,
} as const;

export function CircleHalfIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CircleHalfIcon as CircleHalf };
