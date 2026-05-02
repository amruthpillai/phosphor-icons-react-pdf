import { ArrowElbowRightUpIcon as ArrowElbowRightUpBoldIcon } from "../bold/ArrowElbowRightUp";
import { ArrowElbowRightUpIcon as ArrowElbowRightUpDuotoneIcon } from "../duotone/ArrowElbowRightUp";
import { ArrowElbowRightUpIcon as ArrowElbowRightUpFillIcon } from "../fill/ArrowElbowRightUp";
import { ArrowElbowRightUpIcon as ArrowElbowRightUpLightIcon } from "../light/ArrowElbowRightUp";
import { ArrowElbowRightUpIcon as ArrowElbowRightUpRegularIcon } from "../regular/ArrowElbowRightUp";
import { ArrowElbowRightUpIcon as ArrowElbowRightUpThinIcon } from "../thin/ArrowElbowRightUp";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowElbowRightUpThinIcon,
	light: ArrowElbowRightUpLightIcon,
	regular: ArrowElbowRightUpRegularIcon,
	bold: ArrowElbowRightUpBoldIcon,
	fill: ArrowElbowRightUpFillIcon,
	duotone: ArrowElbowRightUpDuotoneIcon,
} as const;

export function ArrowElbowRightUpIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowElbowRightUpIcon as ArrowElbowRightUp };
