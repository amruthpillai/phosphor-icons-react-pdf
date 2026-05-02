import { DotsThreeOutlineVerticalIcon as DotsThreeOutlineVerticalBoldIcon } from "../bold/DotsThreeOutlineVertical";
import { DotsThreeOutlineVerticalIcon as DotsThreeOutlineVerticalDuotoneIcon } from "../duotone/DotsThreeOutlineVertical";
import { DotsThreeOutlineVerticalIcon as DotsThreeOutlineVerticalFillIcon } from "../fill/DotsThreeOutlineVertical";
import { DotsThreeOutlineVerticalIcon as DotsThreeOutlineVerticalLightIcon } from "../light/DotsThreeOutlineVertical";
import { DotsThreeOutlineVerticalIcon as DotsThreeOutlineVerticalRegularIcon } from "../regular/DotsThreeOutlineVertical";
import { DotsThreeOutlineVerticalIcon as DotsThreeOutlineVerticalThinIcon } from "../thin/DotsThreeOutlineVertical";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DotsThreeOutlineVerticalThinIcon,
	light: DotsThreeOutlineVerticalLightIcon,
	regular: DotsThreeOutlineVerticalRegularIcon,
	bold: DotsThreeOutlineVerticalBoldIcon,
	fill: DotsThreeOutlineVerticalFillIcon,
	duotone: DotsThreeOutlineVerticalDuotoneIcon,
} as const;

export function DotsThreeOutlineVerticalIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DotsThreeOutlineVerticalIcon as DotsThreeOutlineVertical };
