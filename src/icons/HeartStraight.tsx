import { HeartStraightIcon as HeartStraightBoldIcon } from "../bold/HeartStraight";
import { HeartStraightIcon as HeartStraightDuotoneIcon } from "../duotone/HeartStraight";
import { HeartStraightIcon as HeartStraightFillIcon } from "../fill/HeartStraight";
import { HeartStraightIcon as HeartStraightLightIcon } from "../light/HeartStraight";
import { HeartStraightIcon as HeartStraightRegularIcon } from "../regular/HeartStraight";
import { HeartStraightIcon as HeartStraightThinIcon } from "../thin/HeartStraight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HeartStraightThinIcon,
	light: HeartStraightLightIcon,
	regular: HeartStraightRegularIcon,
	bold: HeartStraightBoldIcon,
	fill: HeartStraightFillIcon,
	duotone: HeartStraightDuotoneIcon,
} as const;

export function HeartStraightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HeartStraightIcon as HeartStraight };
