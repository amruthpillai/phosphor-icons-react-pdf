import { TextAUnderlineIcon as TextAUnderlineBoldIcon } from "../bold/TextAUnderline";
import { TextAUnderlineIcon as TextAUnderlineDuotoneIcon } from "../duotone/TextAUnderline";
import { TextAUnderlineIcon as TextAUnderlineFillIcon } from "../fill/TextAUnderline";
import { TextAUnderlineIcon as TextAUnderlineLightIcon } from "../light/TextAUnderline";
import { TextAUnderlineIcon as TextAUnderlineRegularIcon } from "../regular/TextAUnderline";
import { TextAUnderlineIcon as TextAUnderlineThinIcon } from "../thin/TextAUnderline";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TextAUnderlineThinIcon,
	light: TextAUnderlineLightIcon,
	regular: TextAUnderlineRegularIcon,
	bold: TextAUnderlineBoldIcon,
	fill: TextAUnderlineFillIcon,
	duotone: TextAUnderlineDuotoneIcon,
} as const;

export function TextAUnderlineIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TextAUnderlineIcon as TextAUnderline };
