import { NumberFiveIcon as NumberFiveBoldIcon } from "../bold/NumberFive";
import { NumberFiveIcon as NumberFiveDuotoneIcon } from "../duotone/NumberFive";
import { NumberFiveIcon as NumberFiveFillIcon } from "../fill/NumberFive";
import { NumberFiveIcon as NumberFiveLightIcon } from "../light/NumberFive";
import { NumberFiveIcon as NumberFiveRegularIcon } from "../regular/NumberFive";
import { NumberFiveIcon as NumberFiveThinIcon } from "../thin/NumberFive";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NumberFiveThinIcon,
	light: NumberFiveLightIcon,
	regular: NumberFiveRegularIcon,
	bold: NumberFiveBoldIcon,
	fill: NumberFiveFillIcon,
	duotone: NumberFiveDuotoneIcon,
} as const;

export function NumberFiveIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NumberFiveIcon as NumberFive };
