import { LinkSimpleHorizontalBreakIcon as LinkSimpleHorizontalBreakBoldIcon } from "../bold/LinkSimpleHorizontalBreak";
import { LinkSimpleHorizontalBreakIcon as LinkSimpleHorizontalBreakDuotoneIcon } from "../duotone/LinkSimpleHorizontalBreak";
import { LinkSimpleHorizontalBreakIcon as LinkSimpleHorizontalBreakFillIcon } from "../fill/LinkSimpleHorizontalBreak";
import { LinkSimpleHorizontalBreakIcon as LinkSimpleHorizontalBreakLightIcon } from "../light/LinkSimpleHorizontalBreak";
import { LinkSimpleHorizontalBreakIcon as LinkSimpleHorizontalBreakRegularIcon } from "../regular/LinkSimpleHorizontalBreak";
import { LinkSimpleHorizontalBreakIcon as LinkSimpleHorizontalBreakThinIcon } from "../thin/LinkSimpleHorizontalBreak";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LinkSimpleHorizontalBreakThinIcon,
	light: LinkSimpleHorizontalBreakLightIcon,
	regular: LinkSimpleHorizontalBreakRegularIcon,
	bold: LinkSimpleHorizontalBreakBoldIcon,
	fill: LinkSimpleHorizontalBreakFillIcon,
	duotone: LinkSimpleHorizontalBreakDuotoneIcon,
} as const;

export function LinkSimpleHorizontalBreakIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LinkSimpleHorizontalBreakIcon as LinkSimpleHorizontalBreak };
