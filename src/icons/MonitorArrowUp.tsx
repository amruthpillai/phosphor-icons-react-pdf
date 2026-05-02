import { MonitorArrowUpIcon as MonitorArrowUpBoldIcon } from "../bold/MonitorArrowUp";
import { MonitorArrowUpIcon as MonitorArrowUpDuotoneIcon } from "../duotone/MonitorArrowUp";
import { MonitorArrowUpIcon as MonitorArrowUpFillIcon } from "../fill/MonitorArrowUp";
import { MonitorArrowUpIcon as MonitorArrowUpLightIcon } from "../light/MonitorArrowUp";
import { MonitorArrowUpIcon as MonitorArrowUpRegularIcon } from "../regular/MonitorArrowUp";
import { MonitorArrowUpIcon as MonitorArrowUpThinIcon } from "../thin/MonitorArrowUp";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MonitorArrowUpThinIcon,
	light: MonitorArrowUpLightIcon,
	regular: MonitorArrowUpRegularIcon,
	bold: MonitorArrowUpBoldIcon,
	fill: MonitorArrowUpFillIcon,
	duotone: MonitorArrowUpDuotoneIcon,
} as const;

export function MonitorArrowUpIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MonitorArrowUpIcon as MonitorArrowUp };
