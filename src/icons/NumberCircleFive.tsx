import { NumberCircleFiveIcon as NumberCircleFiveBoldIcon } from "../bold/NumberCircleFive";
import { NumberCircleFiveIcon as NumberCircleFiveDuotoneIcon } from "../duotone/NumberCircleFive";
import { NumberCircleFiveIcon as NumberCircleFiveFillIcon } from "../fill/NumberCircleFive";
import { NumberCircleFiveIcon as NumberCircleFiveLightIcon } from "../light/NumberCircleFive";
import { NumberCircleFiveIcon as NumberCircleFiveRegularIcon } from "../regular/NumberCircleFive";
import { NumberCircleFiveIcon as NumberCircleFiveThinIcon } from "../thin/NumberCircleFive";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NumberCircleFiveThinIcon,
	light: NumberCircleFiveLightIcon,
	regular: NumberCircleFiveRegularIcon,
	bold: NumberCircleFiveBoldIcon,
	fill: NumberCircleFiveFillIcon,
	duotone: NumberCircleFiveDuotoneIcon,
} as const;

export function NumberCircleFiveIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NumberCircleFiveIcon as NumberCircleFive };
