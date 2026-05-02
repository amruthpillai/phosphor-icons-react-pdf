import { HashStraightIcon as HashStraightBoldIcon } from "../bold/HashStraight";
import { HashStraightIcon as HashStraightDuotoneIcon } from "../duotone/HashStraight";
import { HashStraightIcon as HashStraightFillIcon } from "../fill/HashStraight";
import { HashStraightIcon as HashStraightLightIcon } from "../light/HashStraight";
import { HashStraightIcon as HashStraightRegularIcon } from "../regular/HashStraight";
import { HashStraightIcon as HashStraightThinIcon } from "../thin/HashStraight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HashStraightThinIcon,
	light: HashStraightLightIcon,
	regular: HashStraightRegularIcon,
	bold: HashStraightBoldIcon,
	fill: HashStraightFillIcon,
	duotone: HashStraightDuotoneIcon,
} as const;

export function HashStraightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HashStraightIcon as HashStraight };
