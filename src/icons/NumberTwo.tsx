import { NumberTwoIcon as NumberTwoBoldIcon } from "../bold/NumberTwo";
import { NumberTwoIcon as NumberTwoDuotoneIcon } from "../duotone/NumberTwo";
import { NumberTwoIcon as NumberTwoFillIcon } from "../fill/NumberTwo";
import { NumberTwoIcon as NumberTwoLightIcon } from "../light/NumberTwo";
import { NumberTwoIcon as NumberTwoRegularIcon } from "../regular/NumberTwo";
import { NumberTwoIcon as NumberTwoThinIcon } from "../thin/NumberTwo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NumberTwoThinIcon,
	light: NumberTwoLightIcon,
	regular: NumberTwoRegularIcon,
	bold: NumberTwoBoldIcon,
	fill: NumberTwoFillIcon,
	duotone: NumberTwoDuotoneIcon,
} as const;

export function NumberTwoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NumberTwoIcon as NumberTwo };
