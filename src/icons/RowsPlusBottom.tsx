import { RowsPlusBottomIcon as RowsPlusBottomBoldIcon } from "../bold/RowsPlusBottom";
import { RowsPlusBottomIcon as RowsPlusBottomDuotoneIcon } from "../duotone/RowsPlusBottom";
import { RowsPlusBottomIcon as RowsPlusBottomFillIcon } from "../fill/RowsPlusBottom";
import { RowsPlusBottomIcon as RowsPlusBottomLightIcon } from "../light/RowsPlusBottom";
import { RowsPlusBottomIcon as RowsPlusBottomRegularIcon } from "../regular/RowsPlusBottom";
import { RowsPlusBottomIcon as RowsPlusBottomThinIcon } from "../thin/RowsPlusBottom";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: RowsPlusBottomThinIcon,
	light: RowsPlusBottomLightIcon,
	regular: RowsPlusBottomRegularIcon,
	bold: RowsPlusBottomBoldIcon,
	fill: RowsPlusBottomFillIcon,
	duotone: RowsPlusBottomDuotoneIcon,
} as const;

export function RowsPlusBottomIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { RowsPlusBottomIcon as RowsPlusBottom };
