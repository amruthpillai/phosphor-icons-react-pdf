import { IntersectThreeIcon as IntersectThreeBoldIcon } from "../bold/IntersectThree";
import { IntersectThreeIcon as IntersectThreeDuotoneIcon } from "../duotone/IntersectThree";
import { IntersectThreeIcon as IntersectThreeFillIcon } from "../fill/IntersectThree";
import { IntersectThreeIcon as IntersectThreeLightIcon } from "../light/IntersectThree";
import { IntersectThreeIcon as IntersectThreeRegularIcon } from "../regular/IntersectThree";
import { IntersectThreeIcon as IntersectThreeThinIcon } from "../thin/IntersectThree";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: IntersectThreeThinIcon,
	light: IntersectThreeLightIcon,
	regular: IntersectThreeRegularIcon,
	bold: IntersectThreeBoldIcon,
	fill: IntersectThreeFillIcon,
	duotone: IntersectThreeDuotoneIcon,
} as const;

export function IntersectThreeIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { IntersectThreeIcon as IntersectThree };
