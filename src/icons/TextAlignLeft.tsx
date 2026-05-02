import { TextAlignLeftIcon as TextAlignLeftBoldIcon } from "../bold/TextAlignLeft";
import { TextAlignLeftIcon as TextAlignLeftDuotoneIcon } from "../duotone/TextAlignLeft";
import { TextAlignLeftIcon as TextAlignLeftFillIcon } from "../fill/TextAlignLeft";
import { TextAlignLeftIcon as TextAlignLeftLightIcon } from "../light/TextAlignLeft";
import { TextAlignLeftIcon as TextAlignLeftRegularIcon } from "../regular/TextAlignLeft";
import { TextAlignLeftIcon as TextAlignLeftThinIcon } from "../thin/TextAlignLeft";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TextAlignLeftThinIcon,
	light: TextAlignLeftLightIcon,
	regular: TextAlignLeftRegularIcon,
	bold: TextAlignLeftBoldIcon,
	fill: TextAlignLeftFillIcon,
	duotone: TextAlignLeftDuotoneIcon,
} as const;

export function TextAlignLeftIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TextAlignLeftIcon as TextAlignLeft };
