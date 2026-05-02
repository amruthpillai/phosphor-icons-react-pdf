import { AlignCenterVerticalIcon as AlignCenterVerticalBoldIcon } from "../bold/AlignCenterVertical";
import { AlignCenterVerticalIcon as AlignCenterVerticalDuotoneIcon } from "../duotone/AlignCenterVertical";
import { AlignCenterVerticalIcon as AlignCenterVerticalFillIcon } from "../fill/AlignCenterVertical";
import { AlignCenterVerticalIcon as AlignCenterVerticalLightIcon } from "../light/AlignCenterVertical";
import { AlignCenterVerticalIcon as AlignCenterVerticalRegularIcon } from "../regular/AlignCenterVertical";
import { AlignCenterVerticalIcon as AlignCenterVerticalThinIcon } from "../thin/AlignCenterVertical";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AlignCenterVerticalThinIcon,
	light: AlignCenterVerticalLightIcon,
	regular: AlignCenterVerticalRegularIcon,
	bold: AlignCenterVerticalBoldIcon,
	fill: AlignCenterVerticalFillIcon,
	duotone: AlignCenterVerticalDuotoneIcon,
} as const;

export function AlignCenterVerticalIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AlignCenterVerticalIcon as AlignCenterVertical };
