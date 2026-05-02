import { HeartHalfIcon as HeartHalfBoldIcon } from "../bold/HeartHalf";
import { HeartHalfIcon as HeartHalfDuotoneIcon } from "../duotone/HeartHalf";
import { HeartHalfIcon as HeartHalfFillIcon } from "../fill/HeartHalf";
import { HeartHalfIcon as HeartHalfLightIcon } from "../light/HeartHalf";
import { HeartHalfIcon as HeartHalfRegularIcon } from "../regular/HeartHalf";
import { HeartHalfIcon as HeartHalfThinIcon } from "../thin/HeartHalf";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HeartHalfThinIcon,
	light: HeartHalfLightIcon,
	regular: HeartHalfRegularIcon,
	bold: HeartHalfBoldIcon,
	fill: HeartHalfFillIcon,
	duotone: HeartHalfDuotoneIcon,
} as const;

export function HeartHalfIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HeartHalfIcon as HeartHalf };
