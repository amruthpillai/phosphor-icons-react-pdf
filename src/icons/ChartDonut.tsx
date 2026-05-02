import { ChartDonutIcon as ChartDonutBoldIcon } from "../bold/ChartDonut";
import { ChartDonutIcon as ChartDonutDuotoneIcon } from "../duotone/ChartDonut";
import { ChartDonutIcon as ChartDonutFillIcon } from "../fill/ChartDonut";
import { ChartDonutIcon as ChartDonutLightIcon } from "../light/ChartDonut";
import { ChartDonutIcon as ChartDonutRegularIcon } from "../regular/ChartDonut";
import { ChartDonutIcon as ChartDonutThinIcon } from "../thin/ChartDonut";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ChartDonutThinIcon,
	light: ChartDonutLightIcon,
	regular: ChartDonutRegularIcon,
	bold: ChartDonutBoldIcon,
	fill: ChartDonutFillIcon,
	duotone: ChartDonutDuotoneIcon,
} as const;

export function ChartDonutIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ChartDonutIcon as ChartDonut };
