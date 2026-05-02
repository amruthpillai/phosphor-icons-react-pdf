import { ColumnsPlusLeftIcon as ColumnsPlusLeftBoldIcon } from "../bold/ColumnsPlusLeft";
import { ColumnsPlusLeftIcon as ColumnsPlusLeftDuotoneIcon } from "../duotone/ColumnsPlusLeft";
import { ColumnsPlusLeftIcon as ColumnsPlusLeftFillIcon } from "../fill/ColumnsPlusLeft";
import { ColumnsPlusLeftIcon as ColumnsPlusLeftLightIcon } from "../light/ColumnsPlusLeft";
import { ColumnsPlusLeftIcon as ColumnsPlusLeftRegularIcon } from "../regular/ColumnsPlusLeft";
import { ColumnsPlusLeftIcon as ColumnsPlusLeftThinIcon } from "../thin/ColumnsPlusLeft";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ColumnsPlusLeftThinIcon,
	light: ColumnsPlusLeftLightIcon,
	regular: ColumnsPlusLeftRegularIcon,
	bold: ColumnsPlusLeftBoldIcon,
	fill: ColumnsPlusLeftFillIcon,
	duotone: ColumnsPlusLeftDuotoneIcon,
} as const;

export function ColumnsPlusLeftIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ColumnsPlusLeftIcon as ColumnsPlusLeft };
