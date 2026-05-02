import { IntersectIcon as IntersectBoldIcon } from "../bold/Intersect";
import { IntersectIcon as IntersectDuotoneIcon } from "../duotone/Intersect";
import { IntersectIcon as IntersectFillIcon } from "../fill/Intersect";
import { IntersectIcon as IntersectLightIcon } from "../light/Intersect";
import { IntersectIcon as IntersectRegularIcon } from "../regular/Intersect";
import { IntersectIcon as IntersectThinIcon } from "../thin/Intersect";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: IntersectThinIcon,
	light: IntersectLightIcon,
	regular: IntersectRegularIcon,
	bold: IntersectBoldIcon,
	fill: IntersectFillIcon,
	duotone: IntersectDuotoneIcon,
} as const;

export function IntersectIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { IntersectIcon as Intersect };
