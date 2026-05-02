import { HandPointingIcon as HandPointingBoldIcon } from "../bold/HandPointing";
import { HandPointingIcon as HandPointingDuotoneIcon } from "../duotone/HandPointing";
import { HandPointingIcon as HandPointingFillIcon } from "../fill/HandPointing";
import { HandPointingIcon as HandPointingLightIcon } from "../light/HandPointing";
import { HandPointingIcon as HandPointingRegularIcon } from "../regular/HandPointing";
import { HandPointingIcon as HandPointingThinIcon } from "../thin/HandPointing";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HandPointingThinIcon,
	light: HandPointingLightIcon,
	regular: HandPointingRegularIcon,
	bold: HandPointingBoldIcon,
	fill: HandPointingFillIcon,
	duotone: HandPointingDuotoneIcon,
} as const;

export function HandPointingIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HandPointingIcon as HandPointing };
