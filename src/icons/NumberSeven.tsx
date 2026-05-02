import { NumberSevenIcon as NumberSevenBoldIcon } from "../bold/NumberSeven";
import { NumberSevenIcon as NumberSevenDuotoneIcon } from "../duotone/NumberSeven";
import { NumberSevenIcon as NumberSevenFillIcon } from "../fill/NumberSeven";
import { NumberSevenIcon as NumberSevenLightIcon } from "../light/NumberSeven";
import { NumberSevenIcon as NumberSevenRegularIcon } from "../regular/NumberSeven";
import { NumberSevenIcon as NumberSevenThinIcon } from "../thin/NumberSeven";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NumberSevenThinIcon,
	light: NumberSevenLightIcon,
	regular: NumberSevenRegularIcon,
	bold: NumberSevenBoldIcon,
	fill: NumberSevenFillIcon,
	duotone: NumberSevenDuotoneIcon,
} as const;

export function NumberSevenIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NumberSevenIcon as NumberSeven };
