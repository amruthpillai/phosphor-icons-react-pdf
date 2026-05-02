import { StarHalfIcon as StarHalfBoldIcon } from "../bold/StarHalf";
import { StarHalfIcon as StarHalfDuotoneIcon } from "../duotone/StarHalf";
import { StarHalfIcon as StarHalfFillIcon } from "../fill/StarHalf";
import { StarHalfIcon as StarHalfLightIcon } from "../light/StarHalf";
import { StarHalfIcon as StarHalfRegularIcon } from "../regular/StarHalf";
import { StarHalfIcon as StarHalfThinIcon } from "../thin/StarHalf";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: StarHalfThinIcon,
	light: StarHalfLightIcon,
	regular: StarHalfRegularIcon,
	bold: StarHalfBoldIcon,
	fill: StarHalfFillIcon,
	duotone: StarHalfDuotoneIcon,
} as const;

export function StarHalfIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { StarHalfIcon as StarHalf };
