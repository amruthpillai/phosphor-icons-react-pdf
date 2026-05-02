import { TextHSixIcon as TextHSixBoldIcon } from "../bold/TextHSix";
import { TextHSixIcon as TextHSixDuotoneIcon } from "../duotone/TextHSix";
import { TextHSixIcon as TextHSixFillIcon } from "../fill/TextHSix";
import { TextHSixIcon as TextHSixLightIcon } from "../light/TextHSix";
import { TextHSixIcon as TextHSixRegularIcon } from "../regular/TextHSix";
import { TextHSixIcon as TextHSixThinIcon } from "../thin/TextHSix";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TextHSixThinIcon,
	light: TextHSixLightIcon,
	regular: TextHSixRegularIcon,
	bold: TextHSixBoldIcon,
	fill: TextHSixFillIcon,
	duotone: TextHSixDuotoneIcon,
} as const;

export function TextHSixIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TextHSixIcon as TextHSix };
