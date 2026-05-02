import { ChartLineDownIcon as ChartLineDownBoldIcon } from "../bold/ChartLineDown";
import { ChartLineDownIcon as ChartLineDownDuotoneIcon } from "../duotone/ChartLineDown";
import { ChartLineDownIcon as ChartLineDownFillIcon } from "../fill/ChartLineDown";
import { ChartLineDownIcon as ChartLineDownLightIcon } from "../light/ChartLineDown";
import { ChartLineDownIcon as ChartLineDownRegularIcon } from "../regular/ChartLineDown";
import { ChartLineDownIcon as ChartLineDownThinIcon } from "../thin/ChartLineDown";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ChartLineDownThinIcon,
	light: ChartLineDownLightIcon,
	regular: ChartLineDownRegularIcon,
	bold: ChartLineDownBoldIcon,
	fill: ChartLineDownFillIcon,
	duotone: ChartLineDownDuotoneIcon,
} as const;

export function ChartLineDownIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ChartLineDownIcon as ChartLineDown };
