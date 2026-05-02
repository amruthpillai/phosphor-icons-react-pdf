import { NumberSixIcon as NumberSixBoldIcon } from "../bold/NumberSix";
import { NumberSixIcon as NumberSixDuotoneIcon } from "../duotone/NumberSix";
import { NumberSixIcon as NumberSixFillIcon } from "../fill/NumberSix";
import { NumberSixIcon as NumberSixLightIcon } from "../light/NumberSix";
import { NumberSixIcon as NumberSixRegularIcon } from "../regular/NumberSix";
import { NumberSixIcon as NumberSixThinIcon } from "../thin/NumberSix";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NumberSixThinIcon,
	light: NumberSixLightIcon,
	regular: NumberSixRegularIcon,
	bold: NumberSixBoldIcon,
	fill: NumberSixFillIcon,
	duotone: NumberSixDuotoneIcon,
} as const;

export function NumberSixIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NumberSixIcon as NumberSix };
