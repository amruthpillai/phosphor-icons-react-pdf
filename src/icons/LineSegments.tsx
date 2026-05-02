import { LineSegmentsIcon as LineSegmentsBoldIcon } from "../bold/LineSegments";
import { LineSegmentsIcon as LineSegmentsDuotoneIcon } from "../duotone/LineSegments";
import { LineSegmentsIcon as LineSegmentsFillIcon } from "../fill/LineSegments";
import { LineSegmentsIcon as LineSegmentsLightIcon } from "../light/LineSegments";
import { LineSegmentsIcon as LineSegmentsRegularIcon } from "../regular/LineSegments";
import { LineSegmentsIcon as LineSegmentsThinIcon } from "../thin/LineSegments";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LineSegmentsThinIcon,
	light: LineSegmentsLightIcon,
	regular: LineSegmentsRegularIcon,
	bold: LineSegmentsBoldIcon,
	fill: LineSegmentsFillIcon,
	duotone: LineSegmentsDuotoneIcon,
} as const;

export function LineSegmentsIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LineSegmentsIcon as LineSegments };
