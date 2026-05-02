import { SkipBackCircleIcon as SkipBackCircleBoldIcon } from "../bold/SkipBackCircle";
import { SkipBackCircleIcon as SkipBackCircleDuotoneIcon } from "../duotone/SkipBackCircle";
import { SkipBackCircleIcon as SkipBackCircleFillIcon } from "../fill/SkipBackCircle";
import { SkipBackCircleIcon as SkipBackCircleLightIcon } from "../light/SkipBackCircle";
import { SkipBackCircleIcon as SkipBackCircleRegularIcon } from "../regular/SkipBackCircle";
import { SkipBackCircleIcon as SkipBackCircleThinIcon } from "../thin/SkipBackCircle";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SkipBackCircleThinIcon,
	light: SkipBackCircleLightIcon,
	regular: SkipBackCircleRegularIcon,
	bold: SkipBackCircleBoldIcon,
	fill: SkipBackCircleFillIcon,
	duotone: SkipBackCircleDuotoneIcon,
} as const;

export function SkipBackCircleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SkipBackCircleIcon as SkipBackCircle };
