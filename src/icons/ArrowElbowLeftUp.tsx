import { ArrowElbowLeftUpIcon as ArrowElbowLeftUpBoldIcon } from "../bold/ArrowElbowLeftUp";
import { ArrowElbowLeftUpIcon as ArrowElbowLeftUpDuotoneIcon } from "../duotone/ArrowElbowLeftUp";
import { ArrowElbowLeftUpIcon as ArrowElbowLeftUpFillIcon } from "../fill/ArrowElbowLeftUp";
import { ArrowElbowLeftUpIcon as ArrowElbowLeftUpLightIcon } from "../light/ArrowElbowLeftUp";
import { ArrowElbowLeftUpIcon as ArrowElbowLeftUpRegularIcon } from "../regular/ArrowElbowLeftUp";
import { ArrowElbowLeftUpIcon as ArrowElbowLeftUpThinIcon } from "../thin/ArrowElbowLeftUp";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowElbowLeftUpThinIcon,
	light: ArrowElbowLeftUpLightIcon,
	regular: ArrowElbowLeftUpRegularIcon,
	bold: ArrowElbowLeftUpBoldIcon,
	fill: ArrowElbowLeftUpFillIcon,
	duotone: ArrowElbowLeftUpDuotoneIcon,
} as const;

export function ArrowElbowLeftUpIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowElbowLeftUpIcon as ArrowElbowLeftUp };
