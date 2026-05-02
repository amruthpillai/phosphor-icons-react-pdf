import { ChartLineIcon as ChartLineBoldIcon } from "../bold/ChartLine";
import { ChartLineIcon as ChartLineDuotoneIcon } from "../duotone/ChartLine";
import { ChartLineIcon as ChartLineFillIcon } from "../fill/ChartLine";
import { ChartLineIcon as ChartLineLightIcon } from "../light/ChartLine";
import { ChartLineIcon as ChartLineRegularIcon } from "../regular/ChartLine";
import { ChartLineIcon as ChartLineThinIcon } from "../thin/ChartLine";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ChartLineThinIcon,
	light: ChartLineLightIcon,
	regular: ChartLineRegularIcon,
	bold: ChartLineBoldIcon,
	fill: ChartLineFillIcon,
	duotone: ChartLineDuotoneIcon,
} as const;

export function ChartLineIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ChartLineIcon as ChartLine };
