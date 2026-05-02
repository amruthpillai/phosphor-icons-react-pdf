import { HandSwipeRightIcon as HandSwipeRightBoldIcon } from "../bold/HandSwipeRight";
import { HandSwipeRightIcon as HandSwipeRightDuotoneIcon } from "../duotone/HandSwipeRight";
import { HandSwipeRightIcon as HandSwipeRightFillIcon } from "../fill/HandSwipeRight";
import { HandSwipeRightIcon as HandSwipeRightLightIcon } from "../light/HandSwipeRight";
import { HandSwipeRightIcon as HandSwipeRightRegularIcon } from "../regular/HandSwipeRight";
import { HandSwipeRightIcon as HandSwipeRightThinIcon } from "../thin/HandSwipeRight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HandSwipeRightThinIcon,
	light: HandSwipeRightLightIcon,
	regular: HandSwipeRightRegularIcon,
	bold: HandSwipeRightBoldIcon,
	fill: HandSwipeRightFillIcon,
	duotone: HandSwipeRightDuotoneIcon,
} as const;

export function HandSwipeRightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HandSwipeRightIcon as HandSwipeRight };
