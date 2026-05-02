import { ArrowsDownUpIcon as ArrowsDownUpBoldIcon } from "../bold/ArrowsDownUp";
import { ArrowsDownUpIcon as ArrowsDownUpDuotoneIcon } from "../duotone/ArrowsDownUp";
import { ArrowsDownUpIcon as ArrowsDownUpFillIcon } from "../fill/ArrowsDownUp";
import { ArrowsDownUpIcon as ArrowsDownUpLightIcon } from "../light/ArrowsDownUp";
import { ArrowsDownUpIcon as ArrowsDownUpRegularIcon } from "../regular/ArrowsDownUp";
import { ArrowsDownUpIcon as ArrowsDownUpThinIcon } from "../thin/ArrowsDownUp";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowsDownUpThinIcon,
	light: ArrowsDownUpLightIcon,
	regular: ArrowsDownUpRegularIcon,
	bold: ArrowsDownUpBoldIcon,
	fill: ArrowsDownUpFillIcon,
	duotone: ArrowsDownUpDuotoneIcon,
} as const;

export function ArrowsDownUpIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowsDownUpIcon as ArrowsDownUp };
