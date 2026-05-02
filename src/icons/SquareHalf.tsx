import { SquareHalfIcon as SquareHalfBoldIcon } from "../bold/SquareHalf";
import { SquareHalfIcon as SquareHalfDuotoneIcon } from "../duotone/SquareHalf";
import { SquareHalfIcon as SquareHalfFillIcon } from "../fill/SquareHalf";
import { SquareHalfIcon as SquareHalfLightIcon } from "../light/SquareHalf";
import { SquareHalfIcon as SquareHalfRegularIcon } from "../regular/SquareHalf";
import { SquareHalfIcon as SquareHalfThinIcon } from "../thin/SquareHalf";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SquareHalfThinIcon,
	light: SquareHalfLightIcon,
	regular: SquareHalfRegularIcon,
	bold: SquareHalfBoldIcon,
	fill: SquareHalfFillIcon,
	duotone: SquareHalfDuotoneIcon,
} as const;

export function SquareHalfIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SquareHalfIcon as SquareHalf };
