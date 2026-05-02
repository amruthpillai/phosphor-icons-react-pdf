import { HandsPrayingIcon as HandsPrayingBoldIcon } from "../bold/HandsPraying";
import { HandsPrayingIcon as HandsPrayingDuotoneIcon } from "../duotone/HandsPraying";
import { HandsPrayingIcon as HandsPrayingFillIcon } from "../fill/HandsPraying";
import { HandsPrayingIcon as HandsPrayingLightIcon } from "../light/HandsPraying";
import { HandsPrayingIcon as HandsPrayingRegularIcon } from "../regular/HandsPraying";
import { HandsPrayingIcon as HandsPrayingThinIcon } from "../thin/HandsPraying";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HandsPrayingThinIcon,
	light: HandsPrayingLightIcon,
	regular: HandsPrayingRegularIcon,
	bold: HandsPrayingBoldIcon,
	fill: HandsPrayingFillIcon,
	duotone: HandsPrayingDuotoneIcon,
} as const;

export function HandsPrayingIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HandsPrayingIcon as HandsPraying };
