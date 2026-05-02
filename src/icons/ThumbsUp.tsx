import { ThumbsUpIcon as ThumbsUpBoldIcon } from "../bold/ThumbsUp";
import { ThumbsUpIcon as ThumbsUpDuotoneIcon } from "../duotone/ThumbsUp";
import { ThumbsUpIcon as ThumbsUpFillIcon } from "../fill/ThumbsUp";
import { ThumbsUpIcon as ThumbsUpLightIcon } from "../light/ThumbsUp";
import { ThumbsUpIcon as ThumbsUpRegularIcon } from "../regular/ThumbsUp";
import { ThumbsUpIcon as ThumbsUpThinIcon } from "../thin/ThumbsUp";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ThumbsUpThinIcon,
	light: ThumbsUpLightIcon,
	regular: ThumbsUpRegularIcon,
	bold: ThumbsUpBoldIcon,
	fill: ThumbsUpFillIcon,
	duotone: ThumbsUpDuotoneIcon,
} as const;

export function ThumbsUpIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ThumbsUpIcon as ThumbsUp };
