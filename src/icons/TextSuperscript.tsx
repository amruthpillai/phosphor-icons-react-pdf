import { TextSuperscriptIcon as TextSuperscriptBoldIcon } from "../bold/TextSuperscript";
import { TextSuperscriptIcon as TextSuperscriptDuotoneIcon } from "../duotone/TextSuperscript";
import { TextSuperscriptIcon as TextSuperscriptFillIcon } from "../fill/TextSuperscript";
import { TextSuperscriptIcon as TextSuperscriptLightIcon } from "../light/TextSuperscript";
import { TextSuperscriptIcon as TextSuperscriptRegularIcon } from "../regular/TextSuperscript";
import { TextSuperscriptIcon as TextSuperscriptThinIcon } from "../thin/TextSuperscript";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TextSuperscriptThinIcon,
	light: TextSuperscriptLightIcon,
	regular: TextSuperscriptRegularIcon,
	bold: TextSuperscriptBoldIcon,
	fill: TextSuperscriptFillIcon,
	duotone: TextSuperscriptDuotoneIcon,
} as const;

export function TextSuperscriptIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TextSuperscriptIcon as TextSuperscript };
