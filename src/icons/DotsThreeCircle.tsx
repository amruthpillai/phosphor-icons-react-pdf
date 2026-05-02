import { DotsThreeCircleIcon as DotsThreeCircleBoldIcon } from "../bold/DotsThreeCircle";
import { DotsThreeCircleIcon as DotsThreeCircleDuotoneIcon } from "../duotone/DotsThreeCircle";
import { DotsThreeCircleIcon as DotsThreeCircleFillIcon } from "../fill/DotsThreeCircle";
import { DotsThreeCircleIcon as DotsThreeCircleLightIcon } from "../light/DotsThreeCircle";
import { DotsThreeCircleIcon as DotsThreeCircleRegularIcon } from "../regular/DotsThreeCircle";
import { DotsThreeCircleIcon as DotsThreeCircleThinIcon } from "../thin/DotsThreeCircle";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DotsThreeCircleThinIcon,
	light: DotsThreeCircleLightIcon,
	regular: DotsThreeCircleRegularIcon,
	bold: DotsThreeCircleBoldIcon,
	fill: DotsThreeCircleFillIcon,
	duotone: DotsThreeCircleDuotoneIcon,
} as const;

export function DotsThreeCircleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DotsThreeCircleIcon as DotsThreeCircle };
