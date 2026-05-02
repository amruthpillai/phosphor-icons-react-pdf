import { HeadlightsIcon as HeadlightsBoldIcon } from "../bold/Headlights";
import { HeadlightsIcon as HeadlightsDuotoneIcon } from "../duotone/Headlights";
import { HeadlightsIcon as HeadlightsFillIcon } from "../fill/Headlights";
import { HeadlightsIcon as HeadlightsLightIcon } from "../light/Headlights";
import { HeadlightsIcon as HeadlightsRegularIcon } from "../regular/Headlights";
import { HeadlightsIcon as HeadlightsThinIcon } from "../thin/Headlights";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HeadlightsThinIcon,
	light: HeadlightsLightIcon,
	regular: HeadlightsRegularIcon,
	bold: HeadlightsBoldIcon,
	fill: HeadlightsFillIcon,
	duotone: HeadlightsDuotoneIcon,
} as const;

export function HeadlightsIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HeadlightsIcon as Headlights };
