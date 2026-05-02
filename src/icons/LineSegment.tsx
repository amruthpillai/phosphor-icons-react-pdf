import { LineSegmentIcon as LineSegmentBoldIcon } from "../bold/LineSegment";
import { LineSegmentIcon as LineSegmentDuotoneIcon } from "../duotone/LineSegment";
import { LineSegmentIcon as LineSegmentFillIcon } from "../fill/LineSegment";
import { LineSegmentIcon as LineSegmentLightIcon } from "../light/LineSegment";
import { LineSegmentIcon as LineSegmentRegularIcon } from "../regular/LineSegment";
import { LineSegmentIcon as LineSegmentThinIcon } from "../thin/LineSegment";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LineSegmentThinIcon,
	light: LineSegmentLightIcon,
	regular: LineSegmentRegularIcon,
	bold: LineSegmentBoldIcon,
	fill: LineSegmentFillIcon,
	duotone: LineSegmentDuotoneIcon,
} as const;

export function LineSegmentIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LineSegmentIcon as LineSegment };
