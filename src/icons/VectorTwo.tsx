import { VectorTwoIcon as VectorTwoBoldIcon } from "../bold/VectorTwo";
import { VectorTwoIcon as VectorTwoDuotoneIcon } from "../duotone/VectorTwo";
import { VectorTwoIcon as VectorTwoFillIcon } from "../fill/VectorTwo";
import { VectorTwoIcon as VectorTwoLightIcon } from "../light/VectorTwo";
import { VectorTwoIcon as VectorTwoRegularIcon } from "../regular/VectorTwo";
import { VectorTwoIcon as VectorTwoThinIcon } from "../thin/VectorTwo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: VectorTwoThinIcon,
	light: VectorTwoLightIcon,
	regular: VectorTwoRegularIcon,
	bold: VectorTwoBoldIcon,
	fill: VectorTwoFillIcon,
	duotone: VectorTwoDuotoneIcon,
} as const;

export function VectorTwoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { VectorTwoIcon as VectorTwo };
