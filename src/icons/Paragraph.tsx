import { ParagraphIcon as ParagraphBoldIcon } from "../bold/Paragraph";
import { ParagraphIcon as ParagraphDuotoneIcon } from "../duotone/Paragraph";
import { ParagraphIcon as ParagraphFillIcon } from "../fill/Paragraph";
import { ParagraphIcon as ParagraphLightIcon } from "../light/Paragraph";
import { ParagraphIcon as ParagraphRegularIcon } from "../regular/Paragraph";
import { ParagraphIcon as ParagraphThinIcon } from "../thin/Paragraph";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ParagraphThinIcon,
	light: ParagraphLightIcon,
	regular: ParagraphRegularIcon,
	bold: ParagraphBoldIcon,
	fill: ParagraphFillIcon,
	duotone: ParagraphDuotoneIcon,
} as const;

export function ParagraphIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ParagraphIcon as Paragraph };
