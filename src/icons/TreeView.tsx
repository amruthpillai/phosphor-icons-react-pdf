import { TreeViewIcon as TreeViewBoldIcon } from "../bold/TreeView";
import { TreeViewIcon as TreeViewDuotoneIcon } from "../duotone/TreeView";
import { TreeViewIcon as TreeViewFillIcon } from "../fill/TreeView";
import { TreeViewIcon as TreeViewLightIcon } from "../light/TreeView";
import { TreeViewIcon as TreeViewRegularIcon } from "../regular/TreeView";
import { TreeViewIcon as TreeViewThinIcon } from "../thin/TreeView";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TreeViewThinIcon,
	light: TreeViewLightIcon,
	regular: TreeViewRegularIcon,
	bold: TreeViewBoldIcon,
	fill: TreeViewFillIcon,
	duotone: TreeViewDuotoneIcon,
} as const;

export function TreeViewIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TreeViewIcon as TreeView };
