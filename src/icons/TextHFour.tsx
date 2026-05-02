import { TextHFourIcon as TextHFourBoldIcon } from "../bold/TextHFour";
import { TextHFourIcon as TextHFourDuotoneIcon } from "../duotone/TextHFour";
import { TextHFourIcon as TextHFourFillIcon } from "../fill/TextHFour";
import { TextHFourIcon as TextHFourLightIcon } from "../light/TextHFour";
import { TextHFourIcon as TextHFourRegularIcon } from "../regular/TextHFour";
import { TextHFourIcon as TextHFourThinIcon } from "../thin/TextHFour";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TextHFourThinIcon,
	light: TextHFourLightIcon,
	regular: TextHFourRegularIcon,
	bold: TextHFourBoldIcon,
	fill: TextHFourFillIcon,
	duotone: TextHFourDuotoneIcon,
} as const;

export function TextHFourIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TextHFourIcon as TextHFour };
