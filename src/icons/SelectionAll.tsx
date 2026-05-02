import { SelectionAllIcon as SelectionAllBoldIcon } from "../bold/SelectionAll";
import { SelectionAllIcon as SelectionAllDuotoneIcon } from "../duotone/SelectionAll";
import { SelectionAllIcon as SelectionAllFillIcon } from "../fill/SelectionAll";
import { SelectionAllIcon as SelectionAllLightIcon } from "../light/SelectionAll";
import { SelectionAllIcon as SelectionAllRegularIcon } from "../regular/SelectionAll";
import { SelectionAllIcon as SelectionAllThinIcon } from "../thin/SelectionAll";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SelectionAllThinIcon,
	light: SelectionAllLightIcon,
	regular: SelectionAllRegularIcon,
	bold: SelectionAllBoldIcon,
	fill: SelectionAllFillIcon,
	duotone: SelectionAllDuotoneIcon,
} as const;

export function SelectionAllIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SelectionAllIcon as SelectionAll };
