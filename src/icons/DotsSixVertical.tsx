import { DotsSixVerticalIcon as DotsSixVerticalBoldIcon } from "../bold/DotsSixVertical";
import { DotsSixVerticalIcon as DotsSixVerticalDuotoneIcon } from "../duotone/DotsSixVertical";
import { DotsSixVerticalIcon as DotsSixVerticalFillIcon } from "../fill/DotsSixVertical";
import { DotsSixVerticalIcon as DotsSixVerticalLightIcon } from "../light/DotsSixVertical";
import { DotsSixVerticalIcon as DotsSixVerticalRegularIcon } from "../regular/DotsSixVertical";
import { DotsSixVerticalIcon as DotsSixVerticalThinIcon } from "../thin/DotsSixVertical";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DotsSixVerticalThinIcon,
	light: DotsSixVerticalLightIcon,
	regular: DotsSixVerticalRegularIcon,
	bold: DotsSixVerticalBoldIcon,
	fill: DotsSixVerticalFillIcon,
	duotone: DotsSixVerticalDuotoneIcon,
} as const;

export function DotsSixVerticalIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DotsSixVerticalIcon as DotsSixVertical };
