import { SortDescendingIcon as SortDescendingBoldIcon } from "../bold/SortDescending";
import { SortDescendingIcon as SortDescendingDuotoneIcon } from "../duotone/SortDescending";
import { SortDescendingIcon as SortDescendingFillIcon } from "../fill/SortDescending";
import { SortDescendingIcon as SortDescendingLightIcon } from "../light/SortDescending";
import { SortDescendingIcon as SortDescendingRegularIcon } from "../regular/SortDescending";
import { SortDescendingIcon as SortDescendingThinIcon } from "../thin/SortDescending";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SortDescendingThinIcon,
	light: SortDescendingLightIcon,
	regular: SortDescendingRegularIcon,
	bold: SortDescendingBoldIcon,
	fill: SortDescendingFillIcon,
	duotone: SortDescendingDuotoneIcon,
} as const;

export function SortDescendingIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SortDescendingIcon as SortDescending };
