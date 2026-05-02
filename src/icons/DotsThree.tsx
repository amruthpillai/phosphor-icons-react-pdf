import { DotsThreeIcon as DotsThreeBoldIcon } from "../bold/DotsThree";
import { DotsThreeIcon as DotsThreeDuotoneIcon } from "../duotone/DotsThree";
import { DotsThreeIcon as DotsThreeFillIcon } from "../fill/DotsThree";
import { DotsThreeIcon as DotsThreeLightIcon } from "../light/DotsThree";
import { DotsThreeIcon as DotsThreeRegularIcon } from "../regular/DotsThree";
import { DotsThreeIcon as DotsThreeThinIcon } from "../thin/DotsThree";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DotsThreeThinIcon,
	light: DotsThreeLightIcon,
	regular: DotsThreeRegularIcon,
	bold: DotsThreeBoldIcon,
	fill: DotsThreeFillIcon,
	duotone: DotsThreeDuotoneIcon,
} as const;

export function DotsThreeIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DotsThreeIcon as DotsThree };
