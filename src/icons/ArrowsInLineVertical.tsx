import { ArrowsInLineVerticalIcon as ArrowsInLineVerticalBoldIcon } from "../bold/ArrowsInLineVertical";
import { ArrowsInLineVerticalIcon as ArrowsInLineVerticalDuotoneIcon } from "../duotone/ArrowsInLineVertical";
import { ArrowsInLineVerticalIcon as ArrowsInLineVerticalFillIcon } from "../fill/ArrowsInLineVertical";
import { ArrowsInLineVerticalIcon as ArrowsInLineVerticalLightIcon } from "../light/ArrowsInLineVertical";
import { ArrowsInLineVerticalIcon as ArrowsInLineVerticalRegularIcon } from "../regular/ArrowsInLineVertical";
import { ArrowsInLineVerticalIcon as ArrowsInLineVerticalThinIcon } from "../thin/ArrowsInLineVertical";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowsInLineVerticalThinIcon,
	light: ArrowsInLineVerticalLightIcon,
	regular: ArrowsInLineVerticalRegularIcon,
	bold: ArrowsInLineVerticalBoldIcon,
	fill: ArrowsInLineVerticalFillIcon,
	duotone: ArrowsInLineVerticalDuotoneIcon,
} as const;

export function ArrowsInLineVerticalIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowsInLineVerticalIcon as ArrowsInLineVertical };
