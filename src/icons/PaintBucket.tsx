import { PaintBucketIcon as PaintBucketBoldIcon } from "../bold/PaintBucket";
import { PaintBucketIcon as PaintBucketDuotoneIcon } from "../duotone/PaintBucket";
import { PaintBucketIcon as PaintBucketFillIcon } from "../fill/PaintBucket";
import { PaintBucketIcon as PaintBucketLightIcon } from "../light/PaintBucket";
import { PaintBucketIcon as PaintBucketRegularIcon } from "../regular/PaintBucket";
import { PaintBucketIcon as PaintBucketThinIcon } from "../thin/PaintBucket";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PaintBucketThinIcon,
	light: PaintBucketLightIcon,
	regular: PaintBucketRegularIcon,
	bold: PaintBucketBoldIcon,
	fill: PaintBucketFillIcon,
	duotone: PaintBucketDuotoneIcon,
} as const;

export function PaintBucketIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PaintBucketIcon as PaintBucket };
