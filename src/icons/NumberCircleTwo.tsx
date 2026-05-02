import { NumberCircleTwoIcon as NumberCircleTwoBoldIcon } from "../bold/NumberCircleTwo";
import { NumberCircleTwoIcon as NumberCircleTwoDuotoneIcon } from "../duotone/NumberCircleTwo";
import { NumberCircleTwoIcon as NumberCircleTwoFillIcon } from "../fill/NumberCircleTwo";
import { NumberCircleTwoIcon as NumberCircleTwoLightIcon } from "../light/NumberCircleTwo";
import { NumberCircleTwoIcon as NumberCircleTwoRegularIcon } from "../regular/NumberCircleTwo";
import { NumberCircleTwoIcon as NumberCircleTwoThinIcon } from "../thin/NumberCircleTwo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NumberCircleTwoThinIcon,
	light: NumberCircleTwoLightIcon,
	regular: NumberCircleTwoRegularIcon,
	bold: NumberCircleTwoBoldIcon,
	fill: NumberCircleTwoFillIcon,
	duotone: NumberCircleTwoDuotoneIcon,
} as const;

export function NumberCircleTwoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NumberCircleTwoIcon as NumberCircleTwo };
