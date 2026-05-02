import { VectorThreeIcon as VectorThreeBoldIcon } from "../bold/VectorThree";
import { VectorThreeIcon as VectorThreeDuotoneIcon } from "../duotone/VectorThree";
import { VectorThreeIcon as VectorThreeFillIcon } from "../fill/VectorThree";
import { VectorThreeIcon as VectorThreeLightIcon } from "../light/VectorThree";
import { VectorThreeIcon as VectorThreeRegularIcon } from "../regular/VectorThree";
import { VectorThreeIcon as VectorThreeThinIcon } from "../thin/VectorThree";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: VectorThreeThinIcon,
	light: VectorThreeLightIcon,
	regular: VectorThreeRegularIcon,
	bold: VectorThreeBoldIcon,
	fill: VectorThreeFillIcon,
	duotone: VectorThreeDuotoneIcon,
} as const;

export function VectorThreeIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { VectorThreeIcon as VectorThree };
