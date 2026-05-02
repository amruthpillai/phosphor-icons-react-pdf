import { SortAscendingIcon as SortAscendingBoldIcon } from "../bold/SortAscending";
import { SortAscendingIcon as SortAscendingDuotoneIcon } from "../duotone/SortAscending";
import { SortAscendingIcon as SortAscendingFillIcon } from "../fill/SortAscending";
import { SortAscendingIcon as SortAscendingLightIcon } from "../light/SortAscending";
import { SortAscendingIcon as SortAscendingRegularIcon } from "../regular/SortAscending";
import { SortAscendingIcon as SortAscendingThinIcon } from "../thin/SortAscending";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SortAscendingThinIcon,
	light: SortAscendingLightIcon,
	regular: SortAscendingRegularIcon,
	bold: SortAscendingBoldIcon,
	fill: SortAscendingFillIcon,
	duotone: SortAscendingDuotoneIcon,
} as const;

export function SortAscendingIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SortAscendingIcon as SortAscending };
