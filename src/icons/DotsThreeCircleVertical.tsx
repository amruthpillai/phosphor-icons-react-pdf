import { DotsThreeCircleVerticalIcon as DotsThreeCircleVerticalBoldIcon } from "../bold/DotsThreeCircleVertical";
import { DotsThreeCircleVerticalIcon as DotsThreeCircleVerticalDuotoneIcon } from "../duotone/DotsThreeCircleVertical";
import { DotsThreeCircleVerticalIcon as DotsThreeCircleVerticalFillIcon } from "../fill/DotsThreeCircleVertical";
import { DotsThreeCircleVerticalIcon as DotsThreeCircleVerticalLightIcon } from "../light/DotsThreeCircleVertical";
import { DotsThreeCircleVerticalIcon as DotsThreeCircleVerticalRegularIcon } from "../regular/DotsThreeCircleVertical";
import { DotsThreeCircleVerticalIcon as DotsThreeCircleVerticalThinIcon } from "../thin/DotsThreeCircleVertical";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DotsThreeCircleVerticalThinIcon,
	light: DotsThreeCircleVerticalLightIcon,
	regular: DotsThreeCircleVerticalRegularIcon,
	bold: DotsThreeCircleVerticalBoldIcon,
	fill: DotsThreeCircleVerticalFillIcon,
	duotone: DotsThreeCircleVerticalDuotoneIcon,
} as const;

export function DotsThreeCircleVerticalIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DotsThreeCircleVerticalIcon as DotsThreeCircleVertical };
