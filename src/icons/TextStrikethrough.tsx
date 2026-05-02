import { TextStrikethroughIcon as TextStrikethroughBoldIcon } from "../bold/TextStrikethrough";
import { TextStrikethroughIcon as TextStrikethroughDuotoneIcon } from "../duotone/TextStrikethrough";
import { TextStrikethroughIcon as TextStrikethroughFillIcon } from "../fill/TextStrikethrough";
import { TextStrikethroughIcon as TextStrikethroughLightIcon } from "../light/TextStrikethrough";
import { TextStrikethroughIcon as TextStrikethroughRegularIcon } from "../regular/TextStrikethrough";
import { TextStrikethroughIcon as TextStrikethroughThinIcon } from "../thin/TextStrikethrough";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TextStrikethroughThinIcon,
	light: TextStrikethroughLightIcon,
	regular: TextStrikethroughRegularIcon,
	bold: TextStrikethroughBoldIcon,
	fill: TextStrikethroughFillIcon,
	duotone: TextStrikethroughDuotoneIcon,
} as const;

export function TextStrikethroughIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TextStrikethroughIcon as TextStrikethrough };
