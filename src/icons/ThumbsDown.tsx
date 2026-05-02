import { ThumbsDownIcon as ThumbsDownBoldIcon } from "../bold/ThumbsDown";
import { ThumbsDownIcon as ThumbsDownDuotoneIcon } from "../duotone/ThumbsDown";
import { ThumbsDownIcon as ThumbsDownFillIcon } from "../fill/ThumbsDown";
import { ThumbsDownIcon as ThumbsDownLightIcon } from "../light/ThumbsDown";
import { ThumbsDownIcon as ThumbsDownRegularIcon } from "../regular/ThumbsDown";
import { ThumbsDownIcon as ThumbsDownThinIcon } from "../thin/ThumbsDown";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ThumbsDownThinIcon,
	light: ThumbsDownLightIcon,
	regular: ThumbsDownRegularIcon,
	bold: ThumbsDownBoldIcon,
	fill: ThumbsDownFillIcon,
	duotone: ThumbsDownDuotoneIcon,
} as const;

export function ThumbsDownIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ThumbsDownIcon as ThumbsDown };
