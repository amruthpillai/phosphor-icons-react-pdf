import { DropHalfBottomIcon as DropHalfBottomBoldIcon } from "../bold/DropHalfBottom";
import { DropHalfBottomIcon as DropHalfBottomDuotoneIcon } from "../duotone/DropHalfBottom";
import { DropHalfBottomIcon as DropHalfBottomFillIcon } from "../fill/DropHalfBottom";
import { DropHalfBottomIcon as DropHalfBottomLightIcon } from "../light/DropHalfBottom";
import { DropHalfBottomIcon as DropHalfBottomRegularIcon } from "../regular/DropHalfBottom";
import { DropHalfBottomIcon as DropHalfBottomThinIcon } from "../thin/DropHalfBottom";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DropHalfBottomThinIcon,
	light: DropHalfBottomLightIcon,
	regular: DropHalfBottomRegularIcon,
	bold: DropHalfBottomBoldIcon,
	fill: DropHalfBottomFillIcon,
	duotone: DropHalfBottomDuotoneIcon,
} as const;

export function DropHalfBottomIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DropHalfBottomIcon as DropHalfBottom };
