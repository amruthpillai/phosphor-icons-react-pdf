import { HighlighterIcon as HighlighterBoldIcon } from "../bold/Highlighter";
import { HighlighterIcon as HighlighterDuotoneIcon } from "../duotone/Highlighter";
import { HighlighterIcon as HighlighterFillIcon } from "../fill/Highlighter";
import { HighlighterIcon as HighlighterLightIcon } from "../light/Highlighter";
import { HighlighterIcon as HighlighterRegularIcon } from "../regular/Highlighter";
import { HighlighterIcon as HighlighterThinIcon } from "../thin/Highlighter";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HighlighterThinIcon,
	light: HighlighterLightIcon,
	regular: HighlighterRegularIcon,
	bold: HighlighterBoldIcon,
	fill: HighlighterFillIcon,
	duotone: HighlighterDuotoneIcon,
} as const;

export function HighlighterIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HighlighterIcon as Highlighter };
