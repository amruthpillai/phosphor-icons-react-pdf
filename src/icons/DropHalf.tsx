import { DropHalfIcon as DropHalfBoldIcon } from "../bold/DropHalf";
import { DropHalfIcon as DropHalfDuotoneIcon } from "../duotone/DropHalf";
import { DropHalfIcon as DropHalfFillIcon } from "../fill/DropHalf";
import { DropHalfIcon as DropHalfLightIcon } from "../light/DropHalf";
import { DropHalfIcon as DropHalfRegularIcon } from "../regular/DropHalf";
import { DropHalfIcon as DropHalfThinIcon } from "../thin/DropHalf";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DropHalfThinIcon,
	light: DropHalfLightIcon,
	regular: DropHalfRegularIcon,
	bold: DropHalfBoldIcon,
	fill: DropHalfFillIcon,
	duotone: DropHalfDuotoneIcon,
} as const;

export function DropHalfIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DropHalfIcon as DropHalf };
