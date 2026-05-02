import { TextTIcon as TextTBoldIcon } from "../bold/TextT";
import { TextTIcon as TextTDuotoneIcon } from "../duotone/TextT";
import { TextTIcon as TextTFillIcon } from "../fill/TextT";
import { TextTIcon as TextTLightIcon } from "../light/TextT";
import { TextTIcon as TextTRegularIcon } from "../regular/TextT";
import { TextTIcon as TextTThinIcon } from "../thin/TextT";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TextTThinIcon,
	light: TextTLightIcon,
	regular: TextTRegularIcon,
	bold: TextTBoldIcon,
	fill: TextTFillIcon,
	duotone: TextTDuotoneIcon,
} as const;

export function TextTIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TextTIcon as TextT };
