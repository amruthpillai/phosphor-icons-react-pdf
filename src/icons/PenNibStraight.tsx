import { PenNibStraightIcon as PenNibStraightBoldIcon } from "../bold/PenNibStraight";
import { PenNibStraightIcon as PenNibStraightDuotoneIcon } from "../duotone/PenNibStraight";
import { PenNibStraightIcon as PenNibStraightFillIcon } from "../fill/PenNibStraight";
import { PenNibStraightIcon as PenNibStraightLightIcon } from "../light/PenNibStraight";
import { PenNibStraightIcon as PenNibStraightRegularIcon } from "../regular/PenNibStraight";
import { PenNibStraightIcon as PenNibStraightThinIcon } from "../thin/PenNibStraight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PenNibStraightThinIcon,
	light: PenNibStraightLightIcon,
	regular: PenNibStraightRegularIcon,
	bold: PenNibStraightBoldIcon,
	fill: PenNibStraightFillIcon,
	duotone: PenNibStraightDuotoneIcon,
} as const;

export function PenNibStraightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PenNibStraightIcon as PenNibStraight };
