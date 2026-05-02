import { ChartPieIcon as ChartPieBoldIcon } from "../bold/ChartPie";
import { ChartPieIcon as ChartPieDuotoneIcon } from "../duotone/ChartPie";
import { ChartPieIcon as ChartPieFillIcon } from "../fill/ChartPie";
import { ChartPieIcon as ChartPieLightIcon } from "../light/ChartPie";
import { ChartPieIcon as ChartPieRegularIcon } from "../regular/ChartPie";
import { ChartPieIcon as ChartPieThinIcon } from "../thin/ChartPie";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ChartPieThinIcon,
	light: ChartPieLightIcon,
	regular: ChartPieRegularIcon,
	bold: ChartPieBoldIcon,
	fill: ChartPieFillIcon,
	duotone: ChartPieDuotoneIcon,
} as const;

export function ChartPieIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ChartPieIcon as ChartPie };
