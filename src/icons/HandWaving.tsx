import { HandWavingIcon as HandWavingBoldIcon } from "../bold/HandWaving";
import { HandWavingIcon as HandWavingDuotoneIcon } from "../duotone/HandWaving";
import { HandWavingIcon as HandWavingFillIcon } from "../fill/HandWaving";
import { HandWavingIcon as HandWavingLightIcon } from "../light/HandWaving";
import { HandWavingIcon as HandWavingRegularIcon } from "../regular/HandWaving";
import { HandWavingIcon as HandWavingThinIcon } from "../thin/HandWaving";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HandWavingThinIcon,
	light: HandWavingLightIcon,
	regular: HandWavingRegularIcon,
	bold: HandWavingBoldIcon,
	fill: HandWavingFillIcon,
	duotone: HandWavingDuotoneIcon,
} as const;

export function HandWavingIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HandWavingIcon as HandWaving };
