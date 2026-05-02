import { DiceSixIcon as DiceSixBoldIcon } from "../bold/DiceSix";
import { DiceSixIcon as DiceSixDuotoneIcon } from "../duotone/DiceSix";
import { DiceSixIcon as DiceSixFillIcon } from "../fill/DiceSix";
import { DiceSixIcon as DiceSixLightIcon } from "../light/DiceSix";
import { DiceSixIcon as DiceSixRegularIcon } from "../regular/DiceSix";
import { DiceSixIcon as DiceSixThinIcon } from "../thin/DiceSix";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DiceSixThinIcon,
	light: DiceSixLightIcon,
	regular: DiceSixRegularIcon,
	bold: DiceSixBoldIcon,
	fill: DiceSixFillIcon,
	duotone: DiceSixDuotoneIcon,
} as const;

export function DiceSixIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DiceSixIcon as DiceSix };
