import { CirclesThreeIcon as CirclesThreeBoldIcon } from "../bold/CirclesThree";
import { CirclesThreeIcon as CirclesThreeDuotoneIcon } from "../duotone/CirclesThree";
import { CirclesThreeIcon as CirclesThreeFillIcon } from "../fill/CirclesThree";
import { CirclesThreeIcon as CirclesThreeLightIcon } from "../light/CirclesThree";
import { CirclesThreeIcon as CirclesThreeRegularIcon } from "../regular/CirclesThree";
import { CirclesThreeIcon as CirclesThreeThinIcon } from "../thin/CirclesThree";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CirclesThreeThinIcon,
	light: CirclesThreeLightIcon,
	regular: CirclesThreeRegularIcon,
	bold: CirclesThreeBoldIcon,
	fill: CirclesThreeFillIcon,
	duotone: CirclesThreeDuotoneIcon,
} as const;

export function CirclesThreeIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CirclesThreeIcon as CirclesThree };
