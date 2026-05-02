import { SubsetOfIcon as SubsetOfBoldIcon } from "../bold/SubsetOf";
import { SubsetOfIcon as SubsetOfDuotoneIcon } from "../duotone/SubsetOf";
import { SubsetOfIcon as SubsetOfFillIcon } from "../fill/SubsetOf";
import { SubsetOfIcon as SubsetOfLightIcon } from "../light/SubsetOf";
import { SubsetOfIcon as SubsetOfRegularIcon } from "../regular/SubsetOf";
import { SubsetOfIcon as SubsetOfThinIcon } from "../thin/SubsetOf";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SubsetOfThinIcon,
	light: SubsetOfLightIcon,
	regular: SubsetOfRegularIcon,
	bold: SubsetOfBoldIcon,
	fill: SubsetOfFillIcon,
	duotone: SubsetOfDuotoneIcon,
} as const;

export function SubsetOfIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SubsetOfIcon as SubsetOf };
