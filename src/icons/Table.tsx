import { TableIcon as TableBoldIcon } from "../bold/Table";
import { TableIcon as TableDuotoneIcon } from "../duotone/Table";
import { TableIcon as TableFillIcon } from "../fill/Table";
import { TableIcon as TableLightIcon } from "../light/Table";
import { TableIcon as TableRegularIcon } from "../regular/Table";
import { TableIcon as TableThinIcon } from "../thin/Table";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TableThinIcon,
	light: TableLightIcon,
	regular: TableRegularIcon,
	bold: TableBoldIcon,
	fill: TableFillIcon,
	duotone: TableDuotoneIcon,
} as const;

export function TableIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TableIcon as Table };
