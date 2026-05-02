import { ChartScatterIcon as ChartScatterBoldIcon } from "../bold/ChartScatter";
import { ChartScatterIcon as ChartScatterDuotoneIcon } from "../duotone/ChartScatter";
import { ChartScatterIcon as ChartScatterFillIcon } from "../fill/ChartScatter";
import { ChartScatterIcon as ChartScatterLightIcon } from "../light/ChartScatter";
import { ChartScatterIcon as ChartScatterRegularIcon } from "../regular/ChartScatter";
import { ChartScatterIcon as ChartScatterThinIcon } from "../thin/ChartScatter";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ChartScatterThinIcon,
	light: ChartScatterLightIcon,
	regular: ChartScatterRegularIcon,
	bold: ChartScatterBoldIcon,
	fill: ChartScatterFillIcon,
	duotone: ChartScatterDuotoneIcon,
} as const;

export function ChartScatterIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ChartScatterIcon as ChartScatter };
