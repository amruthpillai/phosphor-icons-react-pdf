import { ArrowsOutLineVerticalIcon as ArrowsOutLineVerticalBoldIcon } from "../bold/ArrowsOutLineVertical";
import { ArrowsOutLineVerticalIcon as ArrowsOutLineVerticalDuotoneIcon } from "../duotone/ArrowsOutLineVertical";
import { ArrowsOutLineVerticalIcon as ArrowsOutLineVerticalFillIcon } from "../fill/ArrowsOutLineVertical";
import { ArrowsOutLineVerticalIcon as ArrowsOutLineVerticalLightIcon } from "../light/ArrowsOutLineVertical";
import { ArrowsOutLineVerticalIcon as ArrowsOutLineVerticalRegularIcon } from "../regular/ArrowsOutLineVertical";
import { ArrowsOutLineVerticalIcon as ArrowsOutLineVerticalThinIcon } from "../thin/ArrowsOutLineVertical";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowsOutLineVerticalThinIcon,
	light: ArrowsOutLineVerticalLightIcon,
	regular: ArrowsOutLineVerticalRegularIcon,
	bold: ArrowsOutLineVerticalBoldIcon,
	fill: ArrowsOutLineVerticalFillIcon,
	duotone: ArrowsOutLineVerticalDuotoneIcon,
} as const;

export function ArrowsOutLineVerticalIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowsOutLineVerticalIcon as ArrowsOutLineVertical };
