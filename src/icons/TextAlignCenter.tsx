import { TextAlignCenterIcon as TextAlignCenterBoldIcon } from "../bold/TextAlignCenter";
import { TextAlignCenterIcon as TextAlignCenterDuotoneIcon } from "../duotone/TextAlignCenter";
import { TextAlignCenterIcon as TextAlignCenterFillIcon } from "../fill/TextAlignCenter";
import { TextAlignCenterIcon as TextAlignCenterLightIcon } from "../light/TextAlignCenter";
import { TextAlignCenterIcon as TextAlignCenterRegularIcon } from "../regular/TextAlignCenter";
import { TextAlignCenterIcon as TextAlignCenterThinIcon } from "../thin/TextAlignCenter";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TextAlignCenterThinIcon,
	light: TextAlignCenterLightIcon,
	regular: TextAlignCenterRegularIcon,
	bold: TextAlignCenterBoldIcon,
	fill: TextAlignCenterFillIcon,
	duotone: TextAlignCenterDuotoneIcon,
} as const;

export function TextAlignCenterIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TextAlignCenterIcon as TextAlignCenter };
