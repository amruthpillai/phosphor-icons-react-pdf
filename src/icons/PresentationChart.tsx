import { PresentationChartIcon as PresentationChartBoldIcon } from "../bold/PresentationChart";
import { PresentationChartIcon as PresentationChartDuotoneIcon } from "../duotone/PresentationChart";
import { PresentationChartIcon as PresentationChartFillIcon } from "../fill/PresentationChart";
import { PresentationChartIcon as PresentationChartLightIcon } from "../light/PresentationChart";
import { PresentationChartIcon as PresentationChartRegularIcon } from "../regular/PresentationChart";
import { PresentationChartIcon as PresentationChartThinIcon } from "../thin/PresentationChart";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PresentationChartThinIcon,
	light: PresentationChartLightIcon,
	regular: PresentationChartRegularIcon,
	bold: PresentationChartBoldIcon,
	fill: PresentationChartFillIcon,
	duotone: PresentationChartDuotoneIcon,
} as const;

export function PresentationChartIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PresentationChartIcon as PresentationChart };
