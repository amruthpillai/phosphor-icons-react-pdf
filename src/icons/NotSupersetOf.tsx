import { NotSupersetOfIcon as NotSupersetOfBoldIcon } from "../bold/NotSupersetOf";
import { NotSupersetOfIcon as NotSupersetOfDuotoneIcon } from "../duotone/NotSupersetOf";
import { NotSupersetOfIcon as NotSupersetOfFillIcon } from "../fill/NotSupersetOf";
import { NotSupersetOfIcon as NotSupersetOfLightIcon } from "../light/NotSupersetOf";
import { NotSupersetOfIcon as NotSupersetOfRegularIcon } from "../regular/NotSupersetOf";
import { NotSupersetOfIcon as NotSupersetOfThinIcon } from "../thin/NotSupersetOf";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NotSupersetOfThinIcon,
	light: NotSupersetOfLightIcon,
	regular: NotSupersetOfRegularIcon,
	bold: NotSupersetOfBoldIcon,
	fill: NotSupersetOfFillIcon,
	duotone: NotSupersetOfDuotoneIcon,
} as const;

export function NotSupersetOfIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NotSupersetOfIcon as NotSupersetOf };
