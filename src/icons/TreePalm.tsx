import { TreePalmIcon as TreePalmBoldIcon } from "../bold/TreePalm";
import { TreePalmIcon as TreePalmDuotoneIcon } from "../duotone/TreePalm";
import { TreePalmIcon as TreePalmFillIcon } from "../fill/TreePalm";
import { TreePalmIcon as TreePalmLightIcon } from "../light/TreePalm";
import { TreePalmIcon as TreePalmRegularIcon } from "../regular/TreePalm";
import { TreePalmIcon as TreePalmThinIcon } from "../thin/TreePalm";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TreePalmThinIcon,
	light: TreePalmLightIcon,
	regular: TreePalmRegularIcon,
	bold: TreePalmBoldIcon,
	fill: TreePalmFillIcon,
	duotone: TreePalmDuotoneIcon,
} as const;

export function TreePalmIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TreePalmIcon as TreePalm };
