import { GreaterThanIcon as GreaterThanBoldIcon } from "../bold/GreaterThan";
import { GreaterThanIcon as GreaterThanDuotoneIcon } from "../duotone/GreaterThan";
import { GreaterThanIcon as GreaterThanFillIcon } from "../fill/GreaterThan";
import { GreaterThanIcon as GreaterThanLightIcon } from "../light/GreaterThan";
import { GreaterThanIcon as GreaterThanRegularIcon } from "../regular/GreaterThan";
import { GreaterThanIcon as GreaterThanThinIcon } from "../thin/GreaterThan";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GreaterThanThinIcon,
	light: GreaterThanLightIcon,
	regular: GreaterThanRegularIcon,
	bold: GreaterThanBoldIcon,
	fill: GreaterThanFillIcon,
	duotone: GreaterThanDuotoneIcon,
} as const;

export function GreaterThanIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GreaterThanIcon as GreaterThan };
