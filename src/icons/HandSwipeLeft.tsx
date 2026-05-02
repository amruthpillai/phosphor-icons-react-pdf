import { HandSwipeLeftIcon as HandSwipeLeftBoldIcon } from "../bold/HandSwipeLeft";
import { HandSwipeLeftIcon as HandSwipeLeftDuotoneIcon } from "../duotone/HandSwipeLeft";
import { HandSwipeLeftIcon as HandSwipeLeftFillIcon } from "../fill/HandSwipeLeft";
import { HandSwipeLeftIcon as HandSwipeLeftLightIcon } from "../light/HandSwipeLeft";
import { HandSwipeLeftIcon as HandSwipeLeftRegularIcon } from "../regular/HandSwipeLeft";
import { HandSwipeLeftIcon as HandSwipeLeftThinIcon } from "../thin/HandSwipeLeft";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HandSwipeLeftThinIcon,
	light: HandSwipeLeftLightIcon,
	regular: HandSwipeLeftRegularIcon,
	bold: HandSwipeLeftBoldIcon,
	fill: HandSwipeLeftFillIcon,
	duotone: HandSwipeLeftDuotoneIcon,
} as const;

export function HandSwipeLeftIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HandSwipeLeftIcon as HandSwipeLeft };
