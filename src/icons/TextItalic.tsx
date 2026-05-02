import { TextItalicIcon as TextItalicBoldIcon } from "../bold/TextItalic";
import { TextItalicIcon as TextItalicDuotoneIcon } from "../duotone/TextItalic";
import { TextItalicIcon as TextItalicFillIcon } from "../fill/TextItalic";
import { TextItalicIcon as TextItalicLightIcon } from "../light/TextItalic";
import { TextItalicIcon as TextItalicRegularIcon } from "../regular/TextItalic";
import { TextItalicIcon as TextItalicThinIcon } from "../thin/TextItalic";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TextItalicThinIcon,
	light: TextItalicLightIcon,
	regular: TextItalicRegularIcon,
	bold: TextItalicBoldIcon,
	fill: TextItalicFillIcon,
	duotone: TextItalicDuotoneIcon,
} as const;

export function TextItalicIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TextItalicIcon as TextItalic };
