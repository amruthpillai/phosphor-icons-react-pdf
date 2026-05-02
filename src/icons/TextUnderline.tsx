import { TextUnderlineIcon as TextUnderlineBoldIcon } from "../bold/TextUnderline";
import { TextUnderlineIcon as TextUnderlineDuotoneIcon } from "../duotone/TextUnderline";
import { TextUnderlineIcon as TextUnderlineFillIcon } from "../fill/TextUnderline";
import { TextUnderlineIcon as TextUnderlineLightIcon } from "../light/TextUnderline";
import { TextUnderlineIcon as TextUnderlineRegularIcon } from "../regular/TextUnderline";
import { TextUnderlineIcon as TextUnderlineThinIcon } from "../thin/TextUnderline";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TextUnderlineThinIcon,
	light: TextUnderlineLightIcon,
	regular: TextUnderlineRegularIcon,
	bold: TextUnderlineBoldIcon,
	fill: TextUnderlineFillIcon,
	duotone: TextUnderlineDuotoneIcon,
} as const;

export function TextUnderlineIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TextUnderlineIcon as TextUnderline };
