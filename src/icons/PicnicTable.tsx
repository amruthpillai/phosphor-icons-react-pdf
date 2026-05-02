import { PicnicTableIcon as PicnicTableBoldIcon } from "../bold/PicnicTable";
import { PicnicTableIcon as PicnicTableDuotoneIcon } from "../duotone/PicnicTable";
import { PicnicTableIcon as PicnicTableFillIcon } from "../fill/PicnicTable";
import { PicnicTableIcon as PicnicTableLightIcon } from "../light/PicnicTable";
import { PicnicTableIcon as PicnicTableRegularIcon } from "../regular/PicnicTable";
import { PicnicTableIcon as PicnicTableThinIcon } from "../thin/PicnicTable";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PicnicTableThinIcon,
	light: PicnicTableLightIcon,
	regular: PicnicTableRegularIcon,
	bold: PicnicTableBoldIcon,
	fill: PicnicTableFillIcon,
	duotone: PicnicTableDuotoneIcon,
} as const;

export function PicnicTableIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PicnicTableIcon as PicnicTable };
