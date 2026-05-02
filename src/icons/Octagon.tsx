import { OctagonIcon as OctagonBoldIcon } from "../bold/Octagon";
import { OctagonIcon as OctagonDuotoneIcon } from "../duotone/Octagon";
import { OctagonIcon as OctagonFillIcon } from "../fill/Octagon";
import { OctagonIcon as OctagonLightIcon } from "../light/Octagon";
import { OctagonIcon as OctagonRegularIcon } from "../regular/Octagon";
import { OctagonIcon as OctagonThinIcon } from "../thin/Octagon";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: OctagonThinIcon,
	light: OctagonLightIcon,
	regular: OctagonRegularIcon,
	bold: OctagonBoldIcon,
	fill: OctagonFillIcon,
	duotone: OctagonDuotoneIcon,
} as const;

export function OctagonIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { OctagonIcon as Octagon };
