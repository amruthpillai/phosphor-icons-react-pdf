import { SubsetProperOfIcon as SubsetProperOfBoldIcon } from "../bold/SubsetProperOf";
import { SubsetProperOfIcon as SubsetProperOfDuotoneIcon } from "../duotone/SubsetProperOf";
import { SubsetProperOfIcon as SubsetProperOfFillIcon } from "../fill/SubsetProperOf";
import { SubsetProperOfIcon as SubsetProperOfLightIcon } from "../light/SubsetProperOf";
import { SubsetProperOfIcon as SubsetProperOfRegularIcon } from "../regular/SubsetProperOf";
import { SubsetProperOfIcon as SubsetProperOfThinIcon } from "../thin/SubsetProperOf";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SubsetProperOfThinIcon,
	light: SubsetProperOfLightIcon,
	regular: SubsetProperOfRegularIcon,
	bold: SubsetProperOfBoldIcon,
	fill: SubsetProperOfFillIcon,
	duotone: SubsetProperOfDuotoneIcon,
} as const;

export function SubsetProperOfIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SubsetProperOfIcon as SubsetProperOf };
