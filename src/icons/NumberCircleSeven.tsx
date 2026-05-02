import { NumberCircleSevenIcon as NumberCircleSevenBoldIcon } from "../bold/NumberCircleSeven";
import { NumberCircleSevenIcon as NumberCircleSevenDuotoneIcon } from "../duotone/NumberCircleSeven";
import { NumberCircleSevenIcon as NumberCircleSevenFillIcon } from "../fill/NumberCircleSeven";
import { NumberCircleSevenIcon as NumberCircleSevenLightIcon } from "../light/NumberCircleSeven";
import { NumberCircleSevenIcon as NumberCircleSevenRegularIcon } from "../regular/NumberCircleSeven";
import { NumberCircleSevenIcon as NumberCircleSevenThinIcon } from "../thin/NumberCircleSeven";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NumberCircleSevenThinIcon,
	light: NumberCircleSevenLightIcon,
	regular: NumberCircleSevenRegularIcon,
	bold: NumberCircleSevenBoldIcon,
	fill: NumberCircleSevenFillIcon,
	duotone: NumberCircleSevenDuotoneIcon,
} as const;

export function NumberCircleSevenIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NumberCircleSevenIcon as NumberCircleSeven };
