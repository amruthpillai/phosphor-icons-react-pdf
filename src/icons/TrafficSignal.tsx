import { TrafficSignalIcon as TrafficSignalBoldIcon } from "../bold/TrafficSignal";
import { TrafficSignalIcon as TrafficSignalDuotoneIcon } from "../duotone/TrafficSignal";
import { TrafficSignalIcon as TrafficSignalFillIcon } from "../fill/TrafficSignal";
import { TrafficSignalIcon as TrafficSignalLightIcon } from "../light/TrafficSignal";
import { TrafficSignalIcon as TrafficSignalRegularIcon } from "../regular/TrafficSignal";
import { TrafficSignalIcon as TrafficSignalThinIcon } from "../thin/TrafficSignal";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TrafficSignalThinIcon,
	light: TrafficSignalLightIcon,
	regular: TrafficSignalRegularIcon,
	bold: TrafficSignalBoldIcon,
	fill: TrafficSignalFillIcon,
	duotone: TrafficSignalDuotoneIcon,
} as const;

export function TrafficSignalIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TrafficSignalIcon as TrafficSignal };
