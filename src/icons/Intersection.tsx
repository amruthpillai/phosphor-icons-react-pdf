import { IntersectionIcon as IntersectionBoldIcon } from "../bold/Intersection";
import { IntersectionIcon as IntersectionDuotoneIcon } from "../duotone/Intersection";
import { IntersectionIcon as IntersectionFillIcon } from "../fill/Intersection";
import { IntersectionIcon as IntersectionLightIcon } from "../light/Intersection";
import { IntersectionIcon as IntersectionRegularIcon } from "../regular/Intersection";
import { IntersectionIcon as IntersectionThinIcon } from "../thin/Intersection";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: IntersectionThinIcon,
	light: IntersectionLightIcon,
	regular: IntersectionRegularIcon,
	bold: IntersectionBoldIcon,
	fill: IntersectionFillIcon,
	duotone: IntersectionDuotoneIcon,
} as const;

export function IntersectionIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { IntersectionIcon as Intersection };
