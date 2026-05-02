import { ArrowsVerticalIcon as ArrowsVerticalBoldIcon } from "../bold/ArrowsVertical";
import { ArrowsVerticalIcon as ArrowsVerticalDuotoneIcon } from "../duotone/ArrowsVertical";
import { ArrowsVerticalIcon as ArrowsVerticalFillIcon } from "../fill/ArrowsVertical";
import { ArrowsVerticalIcon as ArrowsVerticalLightIcon } from "../light/ArrowsVertical";
import { ArrowsVerticalIcon as ArrowsVerticalRegularIcon } from "../regular/ArrowsVertical";
import { ArrowsVerticalIcon as ArrowsVerticalThinIcon } from "../thin/ArrowsVertical";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowsVerticalThinIcon,
	light: ArrowsVerticalLightIcon,
	regular: ArrowsVerticalRegularIcon,
	bold: ArrowsVerticalBoldIcon,
	fill: ArrowsVerticalFillIcon,
	duotone: ArrowsVerticalDuotoneIcon,
} as const;

export function ArrowsVerticalIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowsVerticalIcon as ArrowsVertical };
