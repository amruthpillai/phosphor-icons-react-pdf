import { HeartStraightBreakIcon as HeartStraightBreakBoldIcon } from "../bold/HeartStraightBreak";
import { HeartStraightBreakIcon as HeartStraightBreakDuotoneIcon } from "../duotone/HeartStraightBreak";
import { HeartStraightBreakIcon as HeartStraightBreakFillIcon } from "../fill/HeartStraightBreak";
import { HeartStraightBreakIcon as HeartStraightBreakLightIcon } from "../light/HeartStraightBreak";
import { HeartStraightBreakIcon as HeartStraightBreakRegularIcon } from "../regular/HeartStraightBreak";
import { HeartStraightBreakIcon as HeartStraightBreakThinIcon } from "../thin/HeartStraightBreak";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HeartStraightBreakThinIcon,
	light: HeartStraightBreakLightIcon,
	regular: HeartStraightBreakRegularIcon,
	bold: HeartStraightBreakBoldIcon,
	fill: HeartStraightBreakFillIcon,
	duotone: HeartStraightBreakDuotoneIcon,
} as const;

export function HeartStraightBreakIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HeartStraightBreakIcon as HeartStraightBreak };
