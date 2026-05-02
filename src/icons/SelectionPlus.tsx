import { SelectionPlusIcon as SelectionPlusBoldIcon } from "../bold/SelectionPlus";
import { SelectionPlusIcon as SelectionPlusDuotoneIcon } from "../duotone/SelectionPlus";
import { SelectionPlusIcon as SelectionPlusFillIcon } from "../fill/SelectionPlus";
import { SelectionPlusIcon as SelectionPlusLightIcon } from "../light/SelectionPlus";
import { SelectionPlusIcon as SelectionPlusRegularIcon } from "../regular/SelectionPlus";
import { SelectionPlusIcon as SelectionPlusThinIcon } from "../thin/SelectionPlus";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SelectionPlusThinIcon,
	light: SelectionPlusLightIcon,
	regular: SelectionPlusRegularIcon,
	bold: SelectionPlusBoldIcon,
	fill: SelectionPlusFillIcon,
	duotone: SelectionPlusDuotoneIcon,
} as const;

export function SelectionPlusIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SelectionPlusIcon as SelectionPlus };
