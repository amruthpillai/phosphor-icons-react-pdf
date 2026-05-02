import { TextAlignJustifyIcon as TextAlignJustifyBoldIcon } from "../bold/TextAlignJustify";
import { TextAlignJustifyIcon as TextAlignJustifyDuotoneIcon } from "../duotone/TextAlignJustify";
import { TextAlignJustifyIcon as TextAlignJustifyFillIcon } from "../fill/TextAlignJustify";
import { TextAlignJustifyIcon as TextAlignJustifyLightIcon } from "../light/TextAlignJustify";
import { TextAlignJustifyIcon as TextAlignJustifyRegularIcon } from "../regular/TextAlignJustify";
import { TextAlignJustifyIcon as TextAlignJustifyThinIcon } from "../thin/TextAlignJustify";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TextAlignJustifyThinIcon,
	light: TextAlignJustifyLightIcon,
	regular: TextAlignJustifyRegularIcon,
	bold: TextAlignJustifyBoldIcon,
	fill: TextAlignJustifyFillIcon,
	duotone: TextAlignJustifyDuotoneIcon,
} as const;

export function TextAlignJustifyIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TextAlignJustifyIcon as TextAlignJustify };
