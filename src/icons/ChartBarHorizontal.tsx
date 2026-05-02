import { ChartBarHorizontalIcon as ChartBarHorizontalBoldIcon } from "../bold/ChartBarHorizontal";
import { ChartBarHorizontalIcon as ChartBarHorizontalDuotoneIcon } from "../duotone/ChartBarHorizontal";
import { ChartBarHorizontalIcon as ChartBarHorizontalFillIcon } from "../fill/ChartBarHorizontal";
import { ChartBarHorizontalIcon as ChartBarHorizontalLightIcon } from "../light/ChartBarHorizontal";
import { ChartBarHorizontalIcon as ChartBarHorizontalRegularIcon } from "../regular/ChartBarHorizontal";
import { ChartBarHorizontalIcon as ChartBarHorizontalThinIcon } from "../thin/ChartBarHorizontal";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ChartBarHorizontalThinIcon,
	light: ChartBarHorizontalLightIcon,
	regular: ChartBarHorizontalRegularIcon,
	bold: ChartBarHorizontalBoldIcon,
	fill: ChartBarHorizontalFillIcon,
	duotone: ChartBarHorizontalDuotoneIcon,
} as const;

export function ChartBarHorizontalIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ChartBarHorizontalIcon as ChartBarHorizontal };
