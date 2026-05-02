import { NavigationArrowIcon as NavigationArrowBoldIcon } from "../bold/NavigationArrow";
import { NavigationArrowIcon as NavigationArrowDuotoneIcon } from "../duotone/NavigationArrow";
import { NavigationArrowIcon as NavigationArrowFillIcon } from "../fill/NavigationArrow";
import { NavigationArrowIcon as NavigationArrowLightIcon } from "../light/NavigationArrow";
import { NavigationArrowIcon as NavigationArrowRegularIcon } from "../regular/NavigationArrow";
import { NavigationArrowIcon as NavigationArrowThinIcon } from "../thin/NavigationArrow";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NavigationArrowThinIcon,
	light: NavigationArrowLightIcon,
	regular: NavigationArrowRegularIcon,
	bold: NavigationArrowBoldIcon,
	fill: NavigationArrowFillIcon,
	duotone: NavigationArrowDuotoneIcon,
} as const;

export function NavigationArrowIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NavigationArrowIcon as NavigationArrow };
