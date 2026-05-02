import { TextAlignRightIcon as TextAlignRightBoldIcon } from "../bold/TextAlignRight";
import { TextAlignRightIcon as TextAlignRightDuotoneIcon } from "../duotone/TextAlignRight";
import { TextAlignRightIcon as TextAlignRightFillIcon } from "../fill/TextAlignRight";
import { TextAlignRightIcon as TextAlignRightLightIcon } from "../light/TextAlignRight";
import { TextAlignRightIcon as TextAlignRightRegularIcon } from "../regular/TextAlignRight";
import { TextAlignRightIcon as TextAlignRightThinIcon } from "../thin/TextAlignRight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TextAlignRightThinIcon,
	light: TextAlignRightLightIcon,
	regular: TextAlignRightRegularIcon,
	bold: TextAlignRightBoldIcon,
	fill: TextAlignRightFillIcon,
	duotone: TextAlignRightDuotoneIcon,
} as const;

export function TextAlignRightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TextAlignRightIcon as TextAlignRight };
