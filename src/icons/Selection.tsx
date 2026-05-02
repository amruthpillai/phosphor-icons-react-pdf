import { SelectionIcon as SelectionBoldIcon } from "../bold/Selection";
import { SelectionIcon as SelectionDuotoneIcon } from "../duotone/Selection";
import { SelectionIcon as SelectionFillIcon } from "../fill/Selection";
import { SelectionIcon as SelectionLightIcon } from "../light/Selection";
import { SelectionIcon as SelectionRegularIcon } from "../regular/Selection";
import { SelectionIcon as SelectionThinIcon } from "../thin/Selection";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SelectionThinIcon,
	light: SelectionLightIcon,
	regular: SelectionRegularIcon,
	bold: SelectionBoldIcon,
	fill: SelectionFillIcon,
	duotone: SelectionDuotoneIcon,
} as const;

export function SelectionIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SelectionIcon as Selection };
