import { MonitorIcon as MonitorBoldIcon } from "../bold/Monitor";
import { MonitorIcon as MonitorDuotoneIcon } from "../duotone/Monitor";
import { MonitorIcon as MonitorFillIcon } from "../fill/Monitor";
import { MonitorIcon as MonitorLightIcon } from "../light/Monitor";
import { MonitorIcon as MonitorRegularIcon } from "../regular/Monitor";
import { MonitorIcon as MonitorThinIcon } from "../thin/Monitor";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MonitorThinIcon,
	light: MonitorLightIcon,
	regular: MonitorRegularIcon,
	bold: MonitorBoldIcon,
	fill: MonitorFillIcon,
	duotone: MonitorDuotoneIcon,
} as const;

export function MonitorIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MonitorIcon as Monitor };
