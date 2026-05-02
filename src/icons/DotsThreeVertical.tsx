import { DotsThreeVerticalIcon as DotsThreeVerticalBoldIcon } from "../bold/DotsThreeVertical";
import { DotsThreeVerticalIcon as DotsThreeVerticalDuotoneIcon } from "../duotone/DotsThreeVertical";
import { DotsThreeVerticalIcon as DotsThreeVerticalFillIcon } from "../fill/DotsThreeVertical";
import { DotsThreeVerticalIcon as DotsThreeVerticalLightIcon } from "../light/DotsThreeVertical";
import { DotsThreeVerticalIcon as DotsThreeVerticalRegularIcon } from "../regular/DotsThreeVertical";
import { DotsThreeVerticalIcon as DotsThreeVerticalThinIcon } from "../thin/DotsThreeVertical";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DotsThreeVerticalThinIcon,
	light: DotsThreeVerticalLightIcon,
	regular: DotsThreeVerticalRegularIcon,
	bold: DotsThreeVerticalBoldIcon,
	fill: DotsThreeVerticalFillIcon,
	duotone: DotsThreeVerticalDuotoneIcon,
} as const;

export function DotsThreeVerticalIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DotsThreeVerticalIcon as DotsThreeVertical };
