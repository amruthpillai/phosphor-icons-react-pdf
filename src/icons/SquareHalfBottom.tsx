import { SquareHalfBottomIcon as SquareHalfBottomBoldIcon } from "../bold/SquareHalfBottom";
import { SquareHalfBottomIcon as SquareHalfBottomDuotoneIcon } from "../duotone/SquareHalfBottom";
import { SquareHalfBottomIcon as SquareHalfBottomFillIcon } from "../fill/SquareHalfBottom";
import { SquareHalfBottomIcon as SquareHalfBottomLightIcon } from "../light/SquareHalfBottom";
import { SquareHalfBottomIcon as SquareHalfBottomRegularIcon } from "../regular/SquareHalfBottom";
import { SquareHalfBottomIcon as SquareHalfBottomThinIcon } from "../thin/SquareHalfBottom";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SquareHalfBottomThinIcon,
	light: SquareHalfBottomLightIcon,
	regular: SquareHalfBottomRegularIcon,
	bold: SquareHalfBottomBoldIcon,
	fill: SquareHalfBottomFillIcon,
	duotone: SquareHalfBottomDuotoneIcon,
} as const;

export function SquareHalfBottomIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SquareHalfBottomIcon as SquareHalfBottom };
