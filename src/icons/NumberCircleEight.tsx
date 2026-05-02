import { NumberCircleEightIcon as NumberCircleEightBoldIcon } from "../bold/NumberCircleEight";
import { NumberCircleEightIcon as NumberCircleEightDuotoneIcon } from "../duotone/NumberCircleEight";
import { NumberCircleEightIcon as NumberCircleEightFillIcon } from "../fill/NumberCircleEight";
import { NumberCircleEightIcon as NumberCircleEightLightIcon } from "../light/NumberCircleEight";
import { NumberCircleEightIcon as NumberCircleEightRegularIcon } from "../regular/NumberCircleEight";
import { NumberCircleEightIcon as NumberCircleEightThinIcon } from "../thin/NumberCircleEight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NumberCircleEightThinIcon,
	light: NumberCircleEightLightIcon,
	regular: NumberCircleEightRegularIcon,
	bold: NumberCircleEightBoldIcon,
	fill: NumberCircleEightFillIcon,
	duotone: NumberCircleEightDuotoneIcon,
} as const;

export function NumberCircleEightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NumberCircleEightIcon as NumberCircleEight };
