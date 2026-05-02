import { SelectionInverseIcon as SelectionInverseBoldIcon } from "../bold/SelectionInverse";
import { SelectionInverseIcon as SelectionInverseDuotoneIcon } from "../duotone/SelectionInverse";
import { SelectionInverseIcon as SelectionInverseFillIcon } from "../fill/SelectionInverse";
import { SelectionInverseIcon as SelectionInverseLightIcon } from "../light/SelectionInverse";
import { SelectionInverseIcon as SelectionInverseRegularIcon } from "../regular/SelectionInverse";
import { SelectionInverseIcon as SelectionInverseThinIcon } from "../thin/SelectionInverse";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SelectionInverseThinIcon,
	light: SelectionInverseLightIcon,
	regular: SelectionInverseRegularIcon,
	bold: SelectionInverseBoldIcon,
	fill: SelectionInverseFillIcon,
	duotone: SelectionInverseDuotoneIcon,
} as const;

export function SelectionInverseIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SelectionInverseIcon as SelectionInverse };
