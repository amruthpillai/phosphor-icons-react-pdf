import { TreeIcon as TreeBoldIcon } from "../bold/Tree";
import { TreeIcon as TreeDuotoneIcon } from "../duotone/Tree";
import { TreeIcon as TreeFillIcon } from "../fill/Tree";
import { TreeIcon as TreeLightIcon } from "../light/Tree";
import { TreeIcon as TreeRegularIcon } from "../regular/Tree";
import { TreeIcon as TreeThinIcon } from "../thin/Tree";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TreeThinIcon,
	light: TreeLightIcon,
	regular: TreeRegularIcon,
	bold: TreeBoldIcon,
	fill: TreeFillIcon,
	duotone: TreeDuotoneIcon,
} as const;

export function TreeIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TreeIcon as Tree };
