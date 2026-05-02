import { NumberCircleThreeIcon as NumberCircleThreeBoldIcon } from "../bold/NumberCircleThree";
import { NumberCircleThreeIcon as NumberCircleThreeDuotoneIcon } from "../duotone/NumberCircleThree";
import { NumberCircleThreeIcon as NumberCircleThreeFillIcon } from "../fill/NumberCircleThree";
import { NumberCircleThreeIcon as NumberCircleThreeLightIcon } from "../light/NumberCircleThree";
import { NumberCircleThreeIcon as NumberCircleThreeRegularIcon } from "../regular/NumberCircleThree";
import { NumberCircleThreeIcon as NumberCircleThreeThinIcon } from "../thin/NumberCircleThree";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NumberCircleThreeThinIcon,
	light: NumberCircleThreeLightIcon,
	regular: NumberCircleThreeRegularIcon,
	bold: NumberCircleThreeBoldIcon,
	fill: NumberCircleThreeFillIcon,
	duotone: NumberCircleThreeDuotoneIcon,
} as const;

export function NumberCircleThreeIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NumberCircleThreeIcon as NumberCircleThree };
