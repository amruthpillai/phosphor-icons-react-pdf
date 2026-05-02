import { ChartPolarIcon as ChartPolarBoldIcon } from "../bold/ChartPolar";
import { ChartPolarIcon as ChartPolarDuotoneIcon } from "../duotone/ChartPolar";
import { ChartPolarIcon as ChartPolarFillIcon } from "../fill/ChartPolar";
import { ChartPolarIcon as ChartPolarLightIcon } from "../light/ChartPolar";
import { ChartPolarIcon as ChartPolarRegularIcon } from "../regular/ChartPolar";
import { ChartPolarIcon as ChartPolarThinIcon } from "../thin/ChartPolar";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ChartPolarThinIcon,
	light: ChartPolarLightIcon,
	regular: ChartPolarRegularIcon,
	bold: ChartPolarBoldIcon,
	fill: ChartPolarFillIcon,
	duotone: ChartPolarDuotoneIcon,
} as const;

export function ChartPolarIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ChartPolarIcon as ChartPolar };
