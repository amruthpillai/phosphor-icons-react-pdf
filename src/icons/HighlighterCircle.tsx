import { HighlighterCircleIcon as HighlighterCircleBoldIcon } from "../bold/HighlighterCircle";
import { HighlighterCircleIcon as HighlighterCircleDuotoneIcon } from "../duotone/HighlighterCircle";
import { HighlighterCircleIcon as HighlighterCircleFillIcon } from "../fill/HighlighterCircle";
import { HighlighterCircleIcon as HighlighterCircleLightIcon } from "../light/HighlighterCircle";
import { HighlighterCircleIcon as HighlighterCircleRegularIcon } from "../regular/HighlighterCircle";
import { HighlighterCircleIcon as HighlighterCircleThinIcon } from "../thin/HighlighterCircle";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HighlighterCircleThinIcon,
	light: HighlighterCircleLightIcon,
	regular: HighlighterCircleRegularIcon,
	bold: HighlighterCircleBoldIcon,
	fill: HighlighterCircleFillIcon,
	duotone: HighlighterCircleDuotoneIcon,
} as const;

export function HighlighterCircleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HighlighterCircleIcon as HighlighterCircle };
