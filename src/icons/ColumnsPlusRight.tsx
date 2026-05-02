import { ColumnsPlusRightIcon as ColumnsPlusRightBoldIcon } from "../bold/ColumnsPlusRight";
import { ColumnsPlusRightIcon as ColumnsPlusRightDuotoneIcon } from "../duotone/ColumnsPlusRight";
import { ColumnsPlusRightIcon as ColumnsPlusRightFillIcon } from "../fill/ColumnsPlusRight";
import { ColumnsPlusRightIcon as ColumnsPlusRightLightIcon } from "../light/ColumnsPlusRight";
import { ColumnsPlusRightIcon as ColumnsPlusRightRegularIcon } from "../regular/ColumnsPlusRight";
import { ColumnsPlusRightIcon as ColumnsPlusRightThinIcon } from "../thin/ColumnsPlusRight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ColumnsPlusRightThinIcon,
	light: ColumnsPlusRightLightIcon,
	regular: ColumnsPlusRightRegularIcon,
	bold: ColumnsPlusRightBoldIcon,
	fill: ColumnsPlusRightFillIcon,
	duotone: ColumnsPlusRightDuotoneIcon,
} as const;

export function ColumnsPlusRightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ColumnsPlusRightIcon as ColumnsPlusRight };
