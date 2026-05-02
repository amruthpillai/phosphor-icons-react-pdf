import { PentagonIcon as PentagonBoldIcon } from "../bold/Pentagon";
import { PentagonIcon as PentagonDuotoneIcon } from "../duotone/Pentagon";
import { PentagonIcon as PentagonFillIcon } from "../fill/Pentagon";
import { PentagonIcon as PentagonLightIcon } from "../light/Pentagon";
import { PentagonIcon as PentagonRegularIcon } from "../regular/Pentagon";
import { PentagonIcon as PentagonThinIcon } from "../thin/Pentagon";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PentagonThinIcon,
	light: PentagonLightIcon,
	regular: PentagonRegularIcon,
	bold: PentagonBoldIcon,
	fill: PentagonFillIcon,
	duotone: PentagonDuotoneIcon,
} as const;

export function PentagonIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PentagonIcon as Pentagon };
