import { RowsPlusTopIcon as RowsPlusTopBoldIcon } from "../bold/RowsPlusTop";
import { RowsPlusTopIcon as RowsPlusTopDuotoneIcon } from "../duotone/RowsPlusTop";
import { RowsPlusTopIcon as RowsPlusTopFillIcon } from "../fill/RowsPlusTop";
import { RowsPlusTopIcon as RowsPlusTopLightIcon } from "../light/RowsPlusTop";
import { RowsPlusTopIcon as RowsPlusTopRegularIcon } from "../regular/RowsPlusTop";
import { RowsPlusTopIcon as RowsPlusTopThinIcon } from "../thin/RowsPlusTop";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: RowsPlusTopThinIcon,
	light: RowsPlusTopLightIcon,
	regular: RowsPlusTopRegularIcon,
	bold: RowsPlusTopBoldIcon,
	fill: RowsPlusTopFillIcon,
	duotone: RowsPlusTopDuotoneIcon,
} as const;

export function RowsPlusTopIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { RowsPlusTopIcon as RowsPlusTop };
