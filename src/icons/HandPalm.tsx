import { HandPalmIcon as HandPalmBoldIcon } from "../bold/HandPalm";
import { HandPalmIcon as HandPalmDuotoneIcon } from "../duotone/HandPalm";
import { HandPalmIcon as HandPalmFillIcon } from "../fill/HandPalm";
import { HandPalmIcon as HandPalmLightIcon } from "../light/HandPalm";
import { HandPalmIcon as HandPalmRegularIcon } from "../regular/HandPalm";
import { HandPalmIcon as HandPalmThinIcon } from "../thin/HandPalm";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HandPalmThinIcon,
	light: HandPalmLightIcon,
	regular: HandPalmRegularIcon,
	bold: HandPalmBoldIcon,
	fill: HandPalmFillIcon,
	duotone: HandPalmDuotoneIcon,
} as const;

export function HandPalmIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HandPalmIcon as HandPalm };
