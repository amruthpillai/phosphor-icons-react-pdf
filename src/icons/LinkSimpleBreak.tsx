import { LinkSimpleBreakIcon as LinkSimpleBreakBoldIcon } from "../bold/LinkSimpleBreak";
import { LinkSimpleBreakIcon as LinkSimpleBreakDuotoneIcon } from "../duotone/LinkSimpleBreak";
import { LinkSimpleBreakIcon as LinkSimpleBreakFillIcon } from "../fill/LinkSimpleBreak";
import { LinkSimpleBreakIcon as LinkSimpleBreakLightIcon } from "../light/LinkSimpleBreak";
import { LinkSimpleBreakIcon as LinkSimpleBreakRegularIcon } from "../regular/LinkSimpleBreak";
import { LinkSimpleBreakIcon as LinkSimpleBreakThinIcon } from "../thin/LinkSimpleBreak";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LinkSimpleBreakThinIcon,
	light: LinkSimpleBreakLightIcon,
	regular: LinkSimpleBreakRegularIcon,
	bold: LinkSimpleBreakBoldIcon,
	fill: LinkSimpleBreakFillIcon,
	duotone: LinkSimpleBreakDuotoneIcon,
} as const;

export function LinkSimpleBreakIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LinkSimpleBreakIcon as LinkSimpleBreak };
