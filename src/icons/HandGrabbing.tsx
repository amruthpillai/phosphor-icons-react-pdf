import { HandGrabbingIcon as HandGrabbingBoldIcon } from "../bold/HandGrabbing";
import { HandGrabbingIcon as HandGrabbingDuotoneIcon } from "../duotone/HandGrabbing";
import { HandGrabbingIcon as HandGrabbingFillIcon } from "../fill/HandGrabbing";
import { HandGrabbingIcon as HandGrabbingLightIcon } from "../light/HandGrabbing";
import { HandGrabbingIcon as HandGrabbingRegularIcon } from "../regular/HandGrabbing";
import { HandGrabbingIcon as HandGrabbingThinIcon } from "../thin/HandGrabbing";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HandGrabbingThinIcon,
	light: HandGrabbingLightIcon,
	regular: HandGrabbingRegularIcon,
	bold: HandGrabbingBoldIcon,
	fill: HandGrabbingFillIcon,
	duotone: HandGrabbingDuotoneIcon,
} as const;

export function HandGrabbingIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HandGrabbingIcon as HandGrabbing };
