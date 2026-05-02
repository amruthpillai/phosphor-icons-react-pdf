import { ChartBarIcon as ChartBarBoldIcon } from "../bold/ChartBar";
import { ChartBarIcon as ChartBarDuotoneIcon } from "../duotone/ChartBar";
import { ChartBarIcon as ChartBarFillIcon } from "../fill/ChartBar";
import { ChartBarIcon as ChartBarLightIcon } from "../light/ChartBar";
import { ChartBarIcon as ChartBarRegularIcon } from "../regular/ChartBar";
import { ChartBarIcon as ChartBarThinIcon } from "../thin/ChartBar";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ChartBarThinIcon,
	light: ChartBarLightIcon,
	regular: ChartBarRegularIcon,
	bold: ChartBarBoldIcon,
	fill: ChartBarFillIcon,
	duotone: ChartBarDuotoneIcon,
} as const;

export function ChartBarIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ChartBarIcon as ChartBar };
