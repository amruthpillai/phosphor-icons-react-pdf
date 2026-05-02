import { NumberThreeIcon as NumberThreeBoldIcon } from "../bold/NumberThree";
import { NumberThreeIcon as NumberThreeDuotoneIcon } from "../duotone/NumberThree";
import { NumberThreeIcon as NumberThreeFillIcon } from "../fill/NumberThree";
import { NumberThreeIcon as NumberThreeLightIcon } from "../light/NumberThree";
import { NumberThreeIcon as NumberThreeRegularIcon } from "../regular/NumberThree";
import { NumberThreeIcon as NumberThreeThinIcon } from "../thin/NumberThree";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NumberThreeThinIcon,
	light: NumberThreeLightIcon,
	regular: NumberThreeRegularIcon,
	bold: NumberThreeBoldIcon,
	fill: NumberThreeFillIcon,
	duotone: NumberThreeDuotoneIcon,
} as const;

export function NumberThreeIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NumberThreeIcon as NumberThree };
