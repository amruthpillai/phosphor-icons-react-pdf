import { TextIndentIcon as TextIndentBoldIcon } from "../bold/TextIndent";
import { TextIndentIcon as TextIndentDuotoneIcon } from "../duotone/TextIndent";
import { TextIndentIcon as TextIndentFillIcon } from "../fill/TextIndent";
import { TextIndentIcon as TextIndentLightIcon } from "../light/TextIndent";
import { TextIndentIcon as TextIndentRegularIcon } from "../regular/TextIndent";
import { TextIndentIcon as TextIndentThinIcon } from "../thin/TextIndent";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TextIndentThinIcon,
	light: TextIndentLightIcon,
	regular: TextIndentRegularIcon,
	bold: TextIndentBoldIcon,
	fill: TextIndentFillIcon,
	duotone: TextIndentDuotoneIcon,
} as const;

export function TextIndentIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TextIndentIcon as TextIndent };
