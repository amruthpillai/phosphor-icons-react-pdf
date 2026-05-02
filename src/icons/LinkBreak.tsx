import { LinkBreakIcon as LinkBreakBoldIcon } from "../bold/LinkBreak";
import { LinkBreakIcon as LinkBreakDuotoneIcon } from "../duotone/LinkBreak";
import { LinkBreakIcon as LinkBreakFillIcon } from "../fill/LinkBreak";
import { LinkBreakIcon as LinkBreakLightIcon } from "../light/LinkBreak";
import { LinkBreakIcon as LinkBreakRegularIcon } from "../regular/LinkBreak";
import { LinkBreakIcon as LinkBreakThinIcon } from "../thin/LinkBreak";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LinkBreakThinIcon,
	light: LinkBreakLightIcon,
	regular: LinkBreakRegularIcon,
	bold: LinkBreakBoldIcon,
	fill: LinkBreakFillIcon,
	duotone: LinkBreakDuotoneIcon,
} as const;

export function LinkBreakIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LinkBreakIcon as LinkBreak };
