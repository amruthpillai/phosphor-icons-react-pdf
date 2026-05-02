import { PerspectiveIcon as PerspectiveBoldIcon } from "../bold/Perspective";
import { PerspectiveIcon as PerspectiveDuotoneIcon } from "../duotone/Perspective";
import { PerspectiveIcon as PerspectiveFillIcon } from "../fill/Perspective";
import { PerspectiveIcon as PerspectiveLightIcon } from "../light/Perspective";
import { PerspectiveIcon as PerspectiveRegularIcon } from "../regular/Perspective";
import { PerspectiveIcon as PerspectiveThinIcon } from "../thin/Perspective";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PerspectiveThinIcon,
	light: PerspectiveLightIcon,
	regular: PerspectiveRegularIcon,
	bold: PerspectiveBoldIcon,
	fill: PerspectiveFillIcon,
	duotone: PerspectiveDuotoneIcon,
} as const;

export function PerspectiveIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PerspectiveIcon as Perspective };
