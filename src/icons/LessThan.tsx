import { LessThanIcon as LessThanBoldIcon } from "../bold/LessThan";
import { LessThanIcon as LessThanDuotoneIcon } from "../duotone/LessThan";
import { LessThanIcon as LessThanFillIcon } from "../fill/LessThan";
import { LessThanIcon as LessThanLightIcon } from "../light/LessThan";
import { LessThanIcon as LessThanRegularIcon } from "../regular/LessThan";
import { LessThanIcon as LessThanThinIcon } from "../thin/LessThan";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LessThanThinIcon,
	light: LessThanLightIcon,
	regular: LessThanRegularIcon,
	bold: LessThanBoldIcon,
	fill: LessThanFillIcon,
	duotone: LessThanDuotoneIcon,
} as const;

export function LessThanIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LessThanIcon as LessThan };
