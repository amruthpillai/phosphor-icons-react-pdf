import { FileSqlIcon as FileSqlBoldIcon } from "../bold/FileSql";
import { FileSqlIcon as FileSqlDuotoneIcon } from "../duotone/FileSql";
import { FileSqlIcon as FileSqlFillIcon } from "../fill/FileSql";
import { FileSqlIcon as FileSqlLightIcon } from "../light/FileSql";
import { FileSqlIcon as FileSqlRegularIcon } from "../regular/FileSql";
import { FileSqlIcon as FileSqlThinIcon } from "../thin/FileSql";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FileSqlThinIcon,
	light: FileSqlLightIcon,
	regular: FileSqlRegularIcon,
	bold: FileSqlBoldIcon,
	fill: FileSqlFillIcon,
	duotone: FileSqlDuotoneIcon,
} as const;

export function FileSqlIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FileSqlIcon as FileSql };
