import { SkipForwardCircleIcon as SkipForwardCircleBoldIcon } from "../bold/SkipForwardCircle";
import { SkipForwardCircleIcon as SkipForwardCircleDuotoneIcon } from "../duotone/SkipForwardCircle";
import { SkipForwardCircleIcon as SkipForwardCircleFillIcon } from "../fill/SkipForwardCircle";
import { SkipForwardCircleIcon as SkipForwardCircleLightIcon } from "../light/SkipForwardCircle";
import { SkipForwardCircleIcon as SkipForwardCircleRegularIcon } from "../regular/SkipForwardCircle";
import { SkipForwardCircleIcon as SkipForwardCircleThinIcon } from "../thin/SkipForwardCircle";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SkipForwardCircleThinIcon,
	light: SkipForwardCircleLightIcon,
	regular: SkipForwardCircleRegularIcon,
	bold: SkipForwardCircleBoldIcon,
	fill: SkipForwardCircleFillIcon,
	duotone: SkipForwardCircleDuotoneIcon,
} as const;

export function SkipForwardCircleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SkipForwardCircleIcon as SkipForwardCircle };
