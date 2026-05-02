import { ChartLineUpIcon as ChartLineUpBoldIcon } from "../bold/ChartLineUp";
import { ChartLineUpIcon as ChartLineUpDuotoneIcon } from "../duotone/ChartLineUp";
import { ChartLineUpIcon as ChartLineUpFillIcon } from "../fill/ChartLineUp";
import { ChartLineUpIcon as ChartLineUpLightIcon } from "../light/ChartLineUp";
import { ChartLineUpIcon as ChartLineUpRegularIcon } from "../regular/ChartLineUp";
import { ChartLineUpIcon as ChartLineUpThinIcon } from "../thin/ChartLineUp";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ChartLineUpThinIcon,
	light: ChartLineUpLightIcon,
	regular: ChartLineUpRegularIcon,
	bold: ChartLineUpBoldIcon,
	fill: ChartLineUpFillIcon,
	duotone: ChartLineUpDuotoneIcon,
} as const;

export function ChartLineUpIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ChartLineUpIcon as ChartLineUp };
