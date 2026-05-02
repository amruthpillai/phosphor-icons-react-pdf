import { SkipForwardIcon as SkipForwardBoldIcon } from "../bold/SkipForward";
import { SkipForwardIcon as SkipForwardDuotoneIcon } from "../duotone/SkipForward";
import { SkipForwardIcon as SkipForwardFillIcon } from "../fill/SkipForward";
import { SkipForwardIcon as SkipForwardLightIcon } from "../light/SkipForward";
import { SkipForwardIcon as SkipForwardRegularIcon } from "../regular/SkipForward";
import { SkipForwardIcon as SkipForwardThinIcon } from "../thin/SkipForward";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SkipForwardThinIcon,
	light: SkipForwardLightIcon,
	regular: SkipForwardRegularIcon,
	bold: SkipForwardBoldIcon,
	fill: SkipForwardFillIcon,
	duotone: SkipForwardDuotoneIcon,
} as const;

export function SkipForwardIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SkipForwardIcon as SkipForward };
