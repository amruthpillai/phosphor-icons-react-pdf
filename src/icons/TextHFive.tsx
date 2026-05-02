import { TextHFiveIcon as TextHFiveBoldIcon } from "../bold/TextHFive";
import { TextHFiveIcon as TextHFiveDuotoneIcon } from "../duotone/TextHFive";
import { TextHFiveIcon as TextHFiveFillIcon } from "../fill/TextHFive";
import { TextHFiveIcon as TextHFiveLightIcon } from "../light/TextHFive";
import { TextHFiveIcon as TextHFiveRegularIcon } from "../regular/TextHFive";
import { TextHFiveIcon as TextHFiveThinIcon } from "../thin/TextHFive";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TextHFiveThinIcon,
	light: TextHFiveLightIcon,
	regular: TextHFiveRegularIcon,
	bold: TextHFiveBoldIcon,
	fill: TextHFiveFillIcon,
	duotone: TextHFiveDuotoneIcon,
} as const;

export function TextHFiveIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TextHFiveIcon as TextHFive };
