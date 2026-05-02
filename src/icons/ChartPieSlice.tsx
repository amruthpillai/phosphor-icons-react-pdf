import { ChartPieSliceIcon as ChartPieSliceBoldIcon } from "../bold/ChartPieSlice";
import { ChartPieSliceIcon as ChartPieSliceDuotoneIcon } from "../duotone/ChartPieSlice";
import { ChartPieSliceIcon as ChartPieSliceFillIcon } from "../fill/ChartPieSlice";
import { ChartPieSliceIcon as ChartPieSliceLightIcon } from "../light/ChartPieSlice";
import { ChartPieSliceIcon as ChartPieSliceRegularIcon } from "../regular/ChartPieSlice";
import { ChartPieSliceIcon as ChartPieSliceThinIcon } from "../thin/ChartPieSlice";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ChartPieSliceThinIcon,
	light: ChartPieSliceLightIcon,
	regular: ChartPieSliceRegularIcon,
	bold: ChartPieSliceBoldIcon,
	fill: ChartPieSliceFillIcon,
	duotone: ChartPieSliceDuotoneIcon,
} as const;

export function ChartPieSliceIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ChartPieSliceIcon as ChartPieSlice };
