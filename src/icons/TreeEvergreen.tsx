import { TreeEvergreenIcon as TreeEvergreenBoldIcon } from "../bold/TreeEvergreen";
import { TreeEvergreenIcon as TreeEvergreenDuotoneIcon } from "../duotone/TreeEvergreen";
import { TreeEvergreenIcon as TreeEvergreenFillIcon } from "../fill/TreeEvergreen";
import { TreeEvergreenIcon as TreeEvergreenLightIcon } from "../light/TreeEvergreen";
import { TreeEvergreenIcon as TreeEvergreenRegularIcon } from "../regular/TreeEvergreen";
import { TreeEvergreenIcon as TreeEvergreenThinIcon } from "../thin/TreeEvergreen";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TreeEvergreenThinIcon,
	light: TreeEvergreenLightIcon,
	regular: TreeEvergreenRegularIcon,
	bold: TreeEvergreenBoldIcon,
	fill: TreeEvergreenFillIcon,
	duotone: TreeEvergreenDuotoneIcon,
} as const;

export function TreeEvergreenIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TreeEvergreenIcon as TreeEvergreen };
