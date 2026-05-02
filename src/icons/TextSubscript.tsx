import { TextSubscriptIcon as TextSubscriptBoldIcon } from "../bold/TextSubscript";
import { TextSubscriptIcon as TextSubscriptDuotoneIcon } from "../duotone/TextSubscript";
import { TextSubscriptIcon as TextSubscriptFillIcon } from "../fill/TextSubscript";
import { TextSubscriptIcon as TextSubscriptLightIcon } from "../light/TextSubscript";
import { TextSubscriptIcon as TextSubscriptRegularIcon } from "../regular/TextSubscript";
import { TextSubscriptIcon as TextSubscriptThinIcon } from "../thin/TextSubscript";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TextSubscriptThinIcon,
	light: TextSubscriptLightIcon,
	regular: TextSubscriptRegularIcon,
	bold: TextSubscriptBoldIcon,
	fill: TextSubscriptFillIcon,
	duotone: TextSubscriptDuotoneIcon,
} as const;

export function TextSubscriptIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TextSubscriptIcon as TextSubscript };
