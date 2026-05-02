import { NotSubsetOfIcon as NotSubsetOfBoldIcon } from "../bold/NotSubsetOf";
import { NotSubsetOfIcon as NotSubsetOfDuotoneIcon } from "../duotone/NotSubsetOf";
import { NotSubsetOfIcon as NotSubsetOfFillIcon } from "../fill/NotSubsetOf";
import { NotSubsetOfIcon as NotSubsetOfLightIcon } from "../light/NotSubsetOf";
import { NotSubsetOfIcon as NotSubsetOfRegularIcon } from "../regular/NotSubsetOf";
import { NotSubsetOfIcon as NotSubsetOfThinIcon } from "../thin/NotSubsetOf";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NotSubsetOfThinIcon,
	light: NotSubsetOfLightIcon,
	regular: NotSubsetOfRegularIcon,
	bold: NotSubsetOfBoldIcon,
	fill: NotSubsetOfFillIcon,
	duotone: NotSubsetOfDuotoneIcon,
} as const;

export function NotSubsetOfIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NotSubsetOfIcon as NotSubsetOf };
