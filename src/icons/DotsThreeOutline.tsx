import { DotsThreeOutlineIcon as DotsThreeOutlineBoldIcon } from "../bold/DotsThreeOutline";
import { DotsThreeOutlineIcon as DotsThreeOutlineDuotoneIcon } from "../duotone/DotsThreeOutline";
import { DotsThreeOutlineIcon as DotsThreeOutlineFillIcon } from "../fill/DotsThreeOutline";
import { DotsThreeOutlineIcon as DotsThreeOutlineLightIcon } from "../light/DotsThreeOutline";
import { DotsThreeOutlineIcon as DotsThreeOutlineRegularIcon } from "../regular/DotsThreeOutline";
import { DotsThreeOutlineIcon as DotsThreeOutlineThinIcon } from "../thin/DotsThreeOutline";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DotsThreeOutlineThinIcon,
	light: DotsThreeOutlineLightIcon,
	regular: DotsThreeOutlineRegularIcon,
	bold: DotsThreeOutlineBoldIcon,
	fill: DotsThreeOutlineFillIcon,
	duotone: DotsThreeOutlineDuotoneIcon,
} as const;

export function DotsThreeOutlineIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DotsThreeOutlineIcon as DotsThreeOutline };
