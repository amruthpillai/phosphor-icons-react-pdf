import { RowsIcon as RowsBoldIcon } from "../bold/Rows";
import { RowsIcon as RowsDuotoneIcon } from "../duotone/Rows";
import { RowsIcon as RowsFillIcon } from "../fill/Rows";
import { RowsIcon as RowsLightIcon } from "../light/Rows";
import { RowsIcon as RowsRegularIcon } from "../regular/Rows";
import { RowsIcon as RowsThinIcon } from "../thin/Rows";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: RowsThinIcon,
	light: RowsLightIcon,
	regular: RowsRegularIcon,
	bold: RowsBoldIcon,
	fill: RowsFillIcon,
	duotone: RowsDuotoneIcon,
} as const;

export function RowsIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { RowsIcon as Rows };
