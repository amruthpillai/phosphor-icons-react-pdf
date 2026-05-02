import { NumberCircleSixIcon as NumberCircleSixBoldIcon } from "../bold/NumberCircleSix";
import { NumberCircleSixIcon as NumberCircleSixDuotoneIcon } from "../duotone/NumberCircleSix";
import { NumberCircleSixIcon as NumberCircleSixFillIcon } from "../fill/NumberCircleSix";
import { NumberCircleSixIcon as NumberCircleSixLightIcon } from "../light/NumberCircleSix";
import { NumberCircleSixIcon as NumberCircleSixRegularIcon } from "../regular/NumberCircleSix";
import { NumberCircleSixIcon as NumberCircleSixThinIcon } from "../thin/NumberCircleSix";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NumberCircleSixThinIcon,
	light: NumberCircleSixLightIcon,
	regular: NumberCircleSixRegularIcon,
	bold: NumberCircleSixBoldIcon,
	fill: NumberCircleSixFillIcon,
	duotone: NumberCircleSixDuotoneIcon,
} as const;

export function NumberCircleSixIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NumberCircleSixIcon as NumberCircleSix };
