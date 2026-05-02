import { TextBIcon as TextBBoldIcon } from "../bold/TextB";
import { TextBIcon as TextBDuotoneIcon } from "../duotone/TextB";
import { TextBIcon as TextBFillIcon } from "../fill/TextB";
import { TextBIcon as TextBLightIcon } from "../light/TextB";
import { TextBIcon as TextBRegularIcon } from "../regular/TextB";
import { TextBIcon as TextBThinIcon } from "../thin/TextB";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TextBThinIcon,
	light: TextBLightIcon,
	regular: TextBRegularIcon,
	bold: TextBBoldIcon,
	fill: TextBFillIcon,
	duotone: TextBDuotoneIcon,
} as const;

export function TextBIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TextBIcon as TextB };
