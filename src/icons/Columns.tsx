import { ColumnsIcon as ColumnsBoldIcon } from "../bold/Columns";
import { ColumnsIcon as ColumnsDuotoneIcon } from "../duotone/Columns";
import { ColumnsIcon as ColumnsFillIcon } from "../fill/Columns";
import { ColumnsIcon as ColumnsLightIcon } from "../light/Columns";
import { ColumnsIcon as ColumnsRegularIcon } from "../regular/Columns";
import { ColumnsIcon as ColumnsThinIcon } from "../thin/Columns";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ColumnsThinIcon,
	light: ColumnsLightIcon,
	regular: ColumnsRegularIcon,
	bold: ColumnsBoldIcon,
	fill: ColumnsFillIcon,
	duotone: ColumnsDuotoneIcon,
} as const;

export function ColumnsIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ColumnsIcon as Columns };
